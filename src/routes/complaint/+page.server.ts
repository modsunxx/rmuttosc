// src/routes/complaint/+page.server.ts
import { fail } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { SUPABASE_SERVICE_ROLE_KEY, COMPLAINT_SECRET_KEY } from '$env/static/private';

const supabase = createClient(PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

function hashEmail(email: string): string {
	const hash = crypto
		.createHmac('sha256', COMPLAINT_SECRET_KEY)
		.update(email.toLowerCase().trim())
		.digest('hex');
	return `usr_${hash.substring(0, 12)}`;
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const category = formData.get('category')?.toString();
		const topic = formData.get('topic')?.toString();
		const detail = formData.get('detail')?.toString();
		const contact = formData.get('contact')?.toString() || '';

		// 1. รับค่าไฟล์รูปภาพที่แนบมาจากหน้าบ้าน
		const imageFile = formData.get('image') as File | null;
		let imageUrl = '';

		// ป้องกันกรณีไม่ได้กรอกข้อมูลหลัก
		if (!category || !topic || !detail) {
			return fail(400, { error: 'กรุณากรอกข้อมูลให้ครบถ้วน', success: false });
		}

		// รับ Token ที่ส่งมาจากหน้าเว็บ
		const accessToken = formData.get('access_token')?.toString();

		// ป้องกันกรณีไม่มีการ Login
		if (!accessToken) {
			return fail(401, { error: 'ไม่พบข้อมูลการเข้าสู่ระบบ กรุณาเข้าสู่ระบบใหม่', success: false });
		}

		// ให้ Supabase ช่วยยืนยันว่า Token นี้เป็นของจริง และเป็นของใคร
		const {
			data: { user },
			error: authError
		} = await supabase.auth.getUser(accessToken);

		if (authError || !user) {
			return fail(401, {
				error: 'Session หมดอายุหรือไม่ถูกต้อง กรุณาเข้าสู่ระบบใหม่',
				success: false
			});
		}

		// ตรวจสอบอีเมลแบบขั้นเด็ดขาดที่ฝั่ง Backend อีกรอบ!
		const userEmail = user.email || '';
		if (!userEmail.endsWith('@rmutto.ac.th')) {
			return fail(403, { error: 'ถูกปฏิเสธ: อนุญาตเฉพาะนักศึกษา RMUTTO เท่านั้น', success: false });
		}

		// 2. ถ้ามีการแนบไฟล์รูปมาจริง ให้จัดการอัปโหลดขึ้น Storage
		if (imageFile && imageFile.size > 0) {
			const fileExt = imageFile.name.split('.').pop();
			// ตั้งชื่อไฟล์สุ่มป้องกันชื่อซ้ำกันในระบบ
			const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`;

			const { error: uploadError } = await supabase.storage
				.from('complaint_images')
				.upload(fileName, imageFile);

			if (!uploadError) {
				// อัปโหลดผ่านฉลุย ดึงลิงก์สาธารณะ (Public URL) ออกมาใช้งาน
				const { data: publicUrlData } = supabase.storage
					.from('complaint_images')
					.getPublicUrl(fileName);
				imageUrl = publicUrlData.publicUrl;
			} else {
				console.error('Supabase Storage Upload Error:', uploadError);
			}
		}

		// นำอีเมลจริงที่ยืนยันแล้วไปทำการเข้ารหัส
		const hashedUserId = hashEmail(userEmail);

		// 3. ส่งข้อมูลเข้า Supabase (เพิ่มช่อง image_url)
		const { data: insertedData, error: dbError } = await supabase
			.from('complaints')
			.insert({
				hashed_user_id: hashedUserId,
				category: category,
				topic: topic,
				detail: detail,
				contact: contact,
				image_url: imageUrl, // <--- บันทึกลิงก์รูปลงฐานข้อมูล
				status: 'pending'
			})
			.select()
			.single();

		if (dbError) {
			console.error('Supabase Insert Error:', dbError);
			return fail(500, { error: 'ไม่สามารถบันทึกข้อมูลได้ กรุณาลองใหม่อีกครั้ง', success: false });
		}

		// 4. ถ้าเข้า Supabase สำเร็จ ให้ยิงข้อมูลส่งไป Google Sheets ด้วย
		if (insertedData) {
			try {
				const GOOGLE_SHEET_URL =
					'https://script.google.com/macros/s/AKfycbz_peLek99-J41wtGNp6l03sZ6gjqTlbR3-iywW-zF2c2Al18f8acfejU3sqdB1Ebnp/exec';

				await fetch(GOOGLE_SHEET_URL, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						id: insertedData.id,
						hashed_user_id: insertedData.hashed_user_id,
						category: insertedData.category,
						topic: insertedData.topic,
						detail: insertedData.detail,
						contact: insertedData.contact,
						status: insertedData.status,
						created_at: insertedData.created_at,
						image_url: insertedData.image_url // <--- ส่งลิงก์รูปไปให้ Google Apps Script บันทึก
					})
				});
			} catch (err) {
				console.error('Google Sheets Sync Error:', err);
			}
		}

		return { success: true };
	}
};
