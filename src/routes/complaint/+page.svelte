<!-- src/routes/complaint/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';

	// 1. นำเข้าประเภทข้อมูล (Types) จาก Supabase
	import type { User, Session, AuthChangeEvent } from '@supabase/supabase-js';

	let { form } = $props();

	let isSubmitting = $state(false);

	// 2. กำหนด Type ให้ชัดเจนแทนการใช้ any
	let user = $state<User | null>(null);
	let sessionToken = $state('');
	let authError = $state('');
	let isAuthChecking = $state(true);

	onMount(() => {
		// เปลี่ยนมาเขียนแบบรับ response เต็มๆ แล้วค่อยดึง session ออกมา
		supabase.auth.getSession().then((response: { data: { session: Session | null } }) => {
			const session = response.data.session;
			checkUserDomain(session);
			isAuthChecking = false;
		});

		supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
			checkUserDomain(session);
		});
	});

	// 4. กำหนด Type ให้ parameter session
	function checkUserDomain(session: Session | null) {
		if (session?.user) {
			const email = session.user.email || '';

			if (email.endsWith('@rmutto.ac.th')) {
				user = session.user;
				sessionToken = session.access_token;
				authError = '';
			} else {
				authError = 'ระบบนี้สงวนสิทธิ์เฉพาะนักศึกษาที่ใช้อีเมล @rmutto.ac.th เท่านั้น';
				supabase.auth.signOut();
				user = null;
				sessionToken = '';
			}
		} else {
			user = null;
			sessionToken = '';
		}
	}

	async function loginWithGoogle() {
		await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: window.location.origin + '/complaint'
			}
		});
	}

	async function logout() {
		await supabase.auth.signOut();
	}
</script>

<svelte:head>
	<title>ระบบร้องเรียนนิรนาม | สภานักศึกษา RMUTTO</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<div class="mb-10 text-center">
			<h1 class="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
				ระบบร้องเรียนและแจ้งเบาะแส
			</h1>
			<p class="text-lg text-gray-600">สภานักศึกษาพร้อมรับฟังและประสานงานแก้ไขปัญหาของคุณ</p>
		</div>

		<!-- แจ้งเตือน Error จากระบบ Login -->
		{#if authError}
			<div class="mb-8 rounded-r-xl border-l-4 border-red-600 bg-red-50 p-4 shadow-sm">
				<p class="font-bold text-red-700">{authError}</p>
			</div>
		{/if}

		<!-- สถานะกำลังโหลดเช็ค Login -->
		{#if isAuthChecking}
			<div class="py-10 text-center">
				<p class="text-gray-500">กำลังตรวจสอบสถานะนักศึกษา...</p>
			</div>

			<!-- กรณียังไม่ได้ Login -->
		{:else if !user}
			<div class="rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-md">
				<svg
					class="mx-auto mb-4 h-16 w-16 text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
					></path></svg
				>
				<h2 class="mb-2 text-2xl font-bold text-gray-900">ยืนยันตัวตนนักศึกษา</h2>
				<p class="mb-8 text-gray-600">
					โปรดเข้าสู่ระบบด้วยอีเมลของมหาวิทยาลัย (@rmutto.ac.th) เพื่อใช้งานระบบร้องเรียน
				</p>

				<button
					onclick={loginWithGoogle}
					class="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-bold text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
				>
					<img
						src="https://www.svgrepo.com/show/475656/google-color.svg"
						alt="Google"
						class="mr-3 h-5 w-5"
					/>
					เข้าสู่ระบบด้วย Google
				</button>
			</div>

			<!-- กรณี Login ผ่านแล้ว (โชว์ฟอร์ม) -->
		{:else}
			<div
				class="mb-8 flex items-start justify-between rounded-r-xl border-l-4 border-blue-600 bg-blue-50 p-6 shadow-sm"
			>
				<div class="flex">
					<div class="shrink-0">
						<svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
							/></svg
						>
					</div>
					<div class="ml-4">
						<h3 class="text-lg font-bold text-blue-800">ยืนยันตัวตนสำเร็จ (Anonymous System)</h3>
						<p class="mt-2 text-sm leading-relaxed text-blue-700">
							เข้าสู่ระบบด้วย <strong>{user.email}</strong><br />
							ข้อมูลอีเมลของคุณจะถูกเข้ารหัสก่อนบันทึก ไม่ต้องกังวลเรื่องการเปิดเผยตัวตน
						</p>
					</div>
				</div>
				<button onclick={logout} class="text-sm font-bold text-red-600 underline hover:text-red-800"
					>ออกจากระบบ</button
				>
			</div>

			{#if form?.success}
				<div
					class="mb-8 flex items-center rounded-xl border border-green-200 bg-green-50 p-4 text-green-800 shadow-sm"
				>
					<svg
						class="mr-3 h-6 w-6 text-green-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						></path></svg
					>
					<span class="font-medium">ส่งเรื่องร้องเรียนสำเร็จ! สภาฯ จะเร่งดำเนินการตรวจสอบครับ</span>
				</div>
			{/if}

			{#if form?.error}
				<div
					class="mb-8 rounded-xl border border-red-200 bg-red-50 p-4 font-medium text-red-800 shadow-sm"
				>
					{form.error}
				</div>
			{/if}

			<div class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
				<div class="p-8">
					<form
						method="POST"
						use:enhance={() => {
							isSubmitting = true;
							return async ({ update }) => {
								isSubmitting = false;
								update({ reset: true });
							};
						}}
						class="space-y-6"
					>
						<!-- แนบ Token ไปให้ Server ตรวจสอบด้วยเพื่อความปลอดภัย -->
						<input type="hidden" name="access_token" value={sessionToken} />

						<div>
							<label for="category" class="mb-2 block text-sm font-bold text-gray-700"
								>หมวดหมู่ปัญหา <span class="text-red-500">*</span></label
							>
							<select
								name="category"
								id="category"
								required
								class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors outline-none focus:ring-2 focus:ring-blue-500"
							>
								<option value="" disabled selected>-- โปรดเลือกหมวดหมู่ --</option>
								<option value="facilities">อาคารสถานที่ และสิ่งแวดล้อม</option>
								<option value="security">ความปลอดภัย และสวัสดิภาพ</option>
								<option value="academic">วิชาการ และการเรียนการสอน</option>
								<option value="welfare">สวัสดิการ และบริการของมหาวิทยาลัย</option>
								<option value="others">อื่นๆ</option>
							</select>
						</div>

						<div>
							<label for="topic" class="mb-2 block text-sm font-bold text-gray-700"
								>หัวข้อเรื่องร้องเรียน <span class="text-red-500">*</span></label
							>
							<input
								type="text"
								name="topic"
								id="topic"
								required
								placeholder="เช่น ไฟส่องสว่างบริเวณหน้าหอพักเสีย"
								class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>

						<div>
							<label for="detail" class="mb-2 block text-sm font-bold text-gray-700"
								>รายละเอียด <span class="text-red-500">*</span></label
							>
							<textarea
								name="detail"
								id="detail"
								rows="6"
								required
								placeholder="อธิบายรายละเอียดปัญหา..."
								class="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 transition-colors outline-none focus:ring-2 focus:ring-blue-500"
							></textarea>
						</div>

						<div>
							<label for="contact" class="mb-2 block text-sm font-bold text-gray-700"
								>ช่องทางติดต่อกลับ <span class="text-xs font-normal text-gray-400">(ไม่บังคับ)</span
								></label
							>
							<input
								type="text"
								name="contact"
								id="contact"
								placeholder="เช่น เบอร์โทรศัพท์, Line ID (หากต้องการให้สภาฯ ติดต่อกลับ)"
								class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>

						<div class="pt-4">
							<button
								type="submit"
								disabled={isSubmitting}
								class="flex w-full justify-center rounded-lg border border-transparent bg-blue-600 px-4 py-4 text-lg font-bold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:bg-blue-300"
							>
								{#if isSubmitting}
									กำลังบันทึกข้อมูลและเข้ารหัส...
								{:else}
									ส่งเรื่องร้องเรียน (แบบนิรนาม)
								{/if}
							</button>
						</div>
					</form>
				</div>
			</div>
		{/if}
	</div>
</div>
