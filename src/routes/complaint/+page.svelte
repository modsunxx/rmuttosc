<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';

	import type { User, Session, AuthChangeEvent } from '@supabase/supabase-js';

	let { form } = $props();

	let isSubmitting = $state(false);
	let user = $state<User | null>(null);
	let sessionToken = $state('');
	let authError = $state('');
	let isAuthChecking = $state(true);

	onMount(() => {
		supabase.auth.getSession().then((response: { data: { session: Session | null } }) => {
			const session = response.data.session;
			checkUserDomain(session);
			isAuthChecking = false;
		});

		supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
			checkUserDomain(session);
		});
	});

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

<div
	class="min-h-screen bg-gray-50 px-4 py-12 transition-colors duration-500 sm:px-6 lg:px-8 dark:bg-gray-950"
>
	<div class="mx-auto max-w-3xl">
		<div class="mb-10 text-center">
			<h1
				class="mb-4 text-3xl font-extrabold text-gray-900 transition-colors duration-300 sm:text-4xl dark:text-white"
			>
				ระบบร้องเรียนและแจ้งเบาะแส
			</h1>
			<p class="text-lg text-gray-600 transition-colors duration-300 dark:text-gray-400">
				สภานักศึกษาพร้อมรับฟังและประสานงานแก้ไขปัญหาของคุณ
			</p>
		</div>

		{#if authError}
			<div
				class="mb-8 rounded-r-xl border-l-4 border-red-600 bg-red-50 p-4 shadow-sm transition-colors duration-300 dark:border-red-500 dark:bg-red-900/30"
			>
				<p class="font-bold text-red-700 dark:text-red-400">{authError}</p>
			</div>
		{/if}

		{#if isAuthChecking}
			<div class="py-10 text-center">
				<p class="text-gray-500 dark:text-gray-400">กำลังตรวจสอบสถานะนักศึกษา...</p>
			</div>
		{:else if !user}
			<div
				class="rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-md transition-all duration-300 dark:border-gray-700/50 dark:bg-gray-800/50 dark:backdrop-blur-sm"
			>
				<svg
					class="mx-auto mb-4 h-16 w-16 text-gray-400 dark:text-gray-500"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
					></path>
				</svg>
				<h2
					class="mb-2 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white"
				>
					ยืนยันตัวตนนักศึกษา
				</h2>
				<p class="mb-8 text-gray-600 transition-colors duration-300 dark:text-gray-400">
					โปรดเข้าสู่ระบบด้วยอีเมลของมหาวิทยาลัย (@rmutto.ac.th) เพื่อใช้งานระบบร้องเรียน
				</p>
				<button
					onclick={loginWithGoogle}
					class="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-bold text-gray-700 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
				>
					<img
						src="https://www.svgrepo.com/show/475656/google-color.svg"
						alt="Google"
						class="mr-3 h-5 w-5"
					/>
					เข้าสู่ระบบด้วย Google
				</button>
			</div>
		{:else}
			<div
				class="mb-8 flex items-start justify-between rounded-r-xl border-l-4 border-blue-600 bg-blue-50 p-6 shadow-sm transition-colors duration-300 dark:border-blue-500 dark:bg-blue-900/30"
			>
				<div class="flex">
					<div class="shrink-0">
						<svg
							class="h-6 w-6 text-blue-600 dark:text-blue-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
							/>
						</svg>
					</div>
					<div class="ml-4">
						<h3
							class="text-lg font-bold text-blue-800 transition-colors duration-300 dark:text-blue-300"
						>
							ยืนยันตัวตนสำเร็จ (Anonymous System)
						</h3>
						<p
							class="mt-2 text-sm leading-relaxed text-blue-700 transition-colors duration-300 dark:text-blue-400/80"
						>
							เข้าสู่ระบบด้วย <strong class="dark:text-blue-200">{user.email}</strong><br />
							ข้อมูลอีเมลของคุณจะถูกเข้ารหัสก่อนบันทึก ไม่ต้องกังวลเรื่องการเปิดเผยตัวตน
						</p>
					</div>
				</div>
				<button
					onclick={logout}
					class="text-sm font-bold text-red-600 underline transition-colors hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
					>ออกจากระบบ</button
				>
			</div>

			{#if form?.success}
				<div
					class="mb-8 flex items-center rounded-xl border border-green-200 bg-green-50 p-4 text-green-800 shadow-sm transition-colors duration-300 dark:border-green-800/50 dark:bg-green-900/30 dark:text-green-400"
				>
					<svg
						class="mr-3 h-6 w-6 text-green-600 dark:text-green-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"
						></path>
					</svg>
					<span class="font-medium">ส่งเรื่องร้องเรียนสำเร็จ! สภาฯ จะเร่งดำเนินการตรวจสอบครับ</span>
				</div>
			{/if}

			{#if form?.error}
				<div
					class="mb-8 rounded-xl border border-red-200 bg-red-50 p-4 font-medium text-red-800 shadow-sm transition-colors duration-300 dark:border-red-800/50 dark:bg-red-900/30 dark:text-red-400"
				>
					{form.error}
				</div>
			{/if}

			<div
				class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-colors duration-300 dark:border-gray-700/50 dark:bg-gray-800/50 dark:backdrop-blur-sm"
			>
				<div class="p-8">
					<form
						method="POST"
						enctype="multipart/form-data"
						use:enhance={() => {
							isSubmitting = true;
							return async ({ update }) => {
								isSubmitting = false;
								update({ reset: true });
							};
						}}
						class="space-y-6"
					>
						<input type="hidden" name="access_token" value={sessionToken} />

						<div>
							<label
								for="category"
								class="mb-2 block text-sm font-bold text-gray-700 transition-colors duration-300 dark:text-gray-200"
							>
								หมวดหมู่ปัญหา <span class="text-red-500">*</span>
							</label>
							<select
								name="category"
								id="category"
								required
								class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900/50 dark:text-white dark:focus:ring-blue-400"
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
							<label
								for="topic"
								class="mb-2 block text-sm font-bold text-gray-700 transition-colors duration-300 dark:text-gray-200"
							>
								หัวข้อเรื่องร้องเรียน <span class="text-red-500">*</span>
							</label>
							<input
								type="text"
								name="topic"
								id="topic"
								required
								placeholder="เช่น ไฟส่องสว่างบริเวณหน้าหอพักเสีย"
								class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900/50 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-400"
							/>
						</div>

						<div>
							<label
								for="detail"
								class="mb-2 block text-sm font-bold text-gray-700 transition-colors duration-300 dark:text-gray-200"
							>
								รายละเอียด <span class="text-red-500">*</span>
							</label>
							<textarea
								name="detail"
								id="detail"
								rows="6"
								required
								placeholder="อธิบายรายละเอียดปัญหา..."
								class="w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900/50 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-400"
							></textarea>
						</div>

						<div>
							<label
								for="contact"
								class="mb-2 block text-sm font-bold text-gray-700 transition-colors duration-300 dark:text-gray-200"
							>
								ช่องทางติดต่อกลับ <span class="text-xs font-normal text-gray-400 dark:text-gray-500"
									>(ไม่บังคับ)</span
								>
							</label>
							<input
								type="text"
								name="contact"
								id="contact"
								placeholder="เช่น เบอร์โทรศัพท์, Line ID (หากต้องการให้สภาฯ ติดต่อกลับ)"
								class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900/50 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-400"
							/>
						</div>

						<div>
							<label
								for="image"
								class="mb-2 block text-sm font-bold text-gray-700 transition-colors duration-300 dark:text-gray-200"
							>
								แนบรูปภาพประกอบ <span class="text-xs font-normal text-gray-400 dark:text-gray-500"
									>(ไม่บังคับ)</span
								>
							</label>
							<input
								type="file"
								name="image"
								id="image"
								accept="image/*"
								class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-colors outline-none file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900/50 dark:text-gray-300 dark:file:bg-blue-900/50 dark:file:text-blue-400 dark:hover:file:bg-blue-800/50"
							/>
						</div>

						<div class="pt-4">
							<button
								type="submit"
								disabled={isSubmitting}
								class="flex w-full justify-center rounded-lg border border-transparent bg-blue-600 px-4 py-4 text-lg font-bold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:bg-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:disabled:bg-blue-800 dark:disabled:text-gray-400"
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
