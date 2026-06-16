// src/routes/services/+page.server.ts
import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { SUPABASE_SERVICE_ROLE_KEY } from '$env/static/private';

const supabase = createClient(PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

export async function load() {
	// ดึงข้อมูลจากตาราง complaints เรียงจากใหม่ไปเก่า
	const { data: complaints, error } = await supabase
		.from('complaints')
		.select('category, topic, detail, status, created_at')
		.order('created_at', { ascending: false });

	if (error) {
		console.error('ดึงข้อมูลไม่สำเร็จ:', error);
		return { complaints: [] };
	}

	return { complaints };
}
