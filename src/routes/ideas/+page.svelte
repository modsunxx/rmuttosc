<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';
	import type { User } from '@supabase/supabase-js';

	// 💡 1. สร้าง Interface ประกาศหน้าตาของข้อมูล Idea
	interface Idea {
		id: number;
		title: string;
		detail: string;
		status: string;
		createdAt: string;
		votes: number;
		isVoted: boolean;
	}

	// 💡 2. เปลี่ยนจาก <any[]> เป็น <Idea[]>
	let ideas = $state<Idea[]>([]);

	let user = $state<User | null>(null);
	let showModal = $state(false);
	let isSubmitting = $state(false);

	// State สำหรับฟอร์มสร้างไอเดีย
	let newTitle = $state('');
	let newDetail = $state('');

	// เช็คสถานะตอนโหลดหน้าเว็บ
	onMount(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			user = session?.user || null;
			fetchIdeas();
		});

		supabase.auth.onAuthStateChange((_event, session) => {
			user = session?.user || null;
			fetchIdeas();
		});
	});

	// ฟังก์ชันดึงข้อมูลจาก Database
	async function fetchIdeas() {
		// 1. ดึงไอเดียทั้งหมด พร้อมนับจำนวนโหวต (count)
		const { data: ideasData, error } = await supabase
			.from('ideas')
			.select('id, title, detail, status, created_at, idea_votes (count)')
			.order('created_at', { ascending: false });

		if (error) return console.error('Error fetching ideas:', error);

		// 2. ถ้าล็อกอินอยู่ ให้เช็คว่าผู้ใช้เคยโหวตไอเดียไหนไปแล้วบ้าง
		let votedIdeaIds: number[] = [];
		if (user) {
			const { data: votesData } = await supabase
				.from('idea_votes')
				.select('idea_id')
				.eq('user_id', user.id);
			votedIdeaIds = votesData?.map((v) => v.idea_id) || [];
		}

		// 3. จัดข้อมูลให้พร้อมแสดงผล
		ideas = (ideasData || []).map((idea) => ({
			id: idea.id,
			title: idea.title,
			detail: idea.detail,
			status: idea.status,
			createdAt: idea.created_at,
			votes: idea.idea_votes[0]?.count || 0, // ดึงตัวเลขโหวตมาโชว์
			isVoted: votedIdeaIds.includes(idea.id)
		}));
	}

	// ฟังก์ชันล็อกอิน
	async function loginWithGoogle() {
		await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: { redirectTo: window.location.origin + '/ideas' }
		});
	}

	// ฟังก์ชันส่งไอเดียใหม่เข้า Database
	async function submitIdea(e: Event) {
		e.preventDefault();
		if (!user) return alert('กรุณาเข้าสู่ระบบก่อนครับ');
		if (!user.email?.endsWith('@rmutto.ac.th'))
			return alert('สงวนสิทธิ์เฉพาะอีเมล @rmutto.ac.th ครับ');

		isSubmitting = true;
		const { error } = await supabase.from('ideas').insert({
			title: newTitle,
			detail: newDetail,
			user_id: user.id
		});
		isSubmitting = false;

		if (!error) {
			showModal = false;
			newTitle = '';
			newDetail = '';
			fetchIdeas(); // โหลดข้อมูลใหม่หลังจากเพิ่มเสร็จ
		} else {
			alert('เกิดข้อผิดพลาด: ' + error.message);
		}
	}

	// ฟังก์ชันกดโหวต
	async function toggleVote(id: number) {
		if (!user) return alert('กรุณาเข้าสู่ระบบก่อนโหวตครับ');
		if (!user.email?.endsWith('@rmutto.ac.th'))
			return alert('สงวนสิทธิ์เฉพาะอีเมล @rmutto.ac.th ครับ');

		const idea = ideas.find((i) => i.id === id);
		if (!idea) return;

		// เปลี่ยนตัวเลขโหวตบนหน้าจอก่อนทันที (เพื่อให้เว็บดูลื่นไหล ไม่ต้องรอโหลด)
		if (idea.isVoted) {
			idea.votes -= 1;
			idea.isVoted = false;
			await supabase.from('idea_votes').delete().match({ idea_id: id, user_id: user.id });
		} else {
			idea.votes += 1;
			idea.isVoted = true;
			await supabase.from('idea_votes').insert({ idea_id: id, user_id: user.id });
		}

		// อัปเดตข้อมูลจริงจาก DB อีกรอบ
		fetchIdeas();
	}

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('th-TH', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

	function getStatusConfig(status: string) {
		if (status === 'pending')
			return {
				label: 'รอพิจารณา',
				classes:
					'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'
			};
		if (status === 'in-progress')
			return {
				label: 'สภาฯ รับเรื่องแล้ว',
				classes:
					'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800/50'
			};
		if (status === 'completed')
			return {
				label: 'ผลักดันสำเร็จ 🎉',
				classes:
					'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800/50'
			};
		return { label: status, classes: 'bg-gray-100 text-gray-800 border-gray-200' };
	}
</script>

<svelte:head>
	<title>กระดานเสนอไอเดีย | สภานักศึกษา RMUTTO</title>
</svelte:head>

<div
	class="min-h-screen bg-gray-50 px-4 py-12 transition-colors duration-500 sm:px-6 lg:px-8 dark:bg-gray-950"
>
	<div class="mx-auto max-w-4xl">
		<div class="mb-10 flex flex-col items-center justify-between gap-6 md:flex-row">
			<div>
				<h1
					class="text-3xl font-extrabold text-gray-900 transition-colors duration-300 sm:text-4xl dark:text-white"
				>
					💡 กระดานเสนอไอเดีย
				</h1>
				<p class="mt-2 text-lg text-gray-600 transition-colors duration-300 dark:text-gray-400">
					ร่วมโหวตและเสนอความคิดเห็น เพื่อพัฒนามหาวิทยาลัยของเรา
				</p>
			</div>

			<div class="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
				{#if !user}
					<button
						onclick={loginWithGoogle}
						class="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50 md:w-auto dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
					>
						<img
							src="https://www.svgrepo.com/show/475656/google-color.svg"
							alt="Google"
							class="h-5 w-5"
						/>
						เข้าสู่ระบบก่อน
					</button>
				{/if}

				<button
					onclick={() => {
						if (user) showModal = true;
						else alert('กรุณาเข้าสู่ระบบก่อนเสนอไอเดียครับ');
					}}
					class="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-sm transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-md md:w-auto dark:bg-blue-500 dark:hover:bg-blue-600"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"
						></path>
					</svg>
					เสนอไอเดียใหม่
				</button>
			</div>
		</div>

		<div class="space-y-6">
			{#if ideas.length === 0}
				<div
					class="rounded-2xl border border-dashed border-gray-300 py-16 text-center dark:border-gray-700"
				>
					<p class="text-gray-500 dark:text-gray-400">
						ยังไม่มีไอเดียถูกเสนอในขณะนี้ มาเป็นคนแรกที่เสนอสิ!
					</p>
				</div>
			{/if}

			{#each ideas as idea (idea.id)}
				{@const status = getStatusConfig(idea.status)}
				<div
					class="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:flex-row sm:p-6 dark:border-gray-800 dark:bg-gray-900/50 dark:backdrop-blur-sm"
				>
					<div class="flex shrink-0 items-center sm:flex-col sm:items-center sm:justify-start">
						<button
							onclick={() => toggleVote(idea.id)}
							class="flex h-12 w-12 flex-col items-center justify-center rounded-lg border transition-all sm:h-auto sm:w-16 sm:py-3 {idea.isVoted
								? 'border-orange-200 bg-orange-50 text-orange-600 dark:border-orange-900/50 dark:bg-orange-900/30 dark:text-orange-400'
								: 'border-gray-100 bg-gray-50 text-gray-500 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}"
						>
							<svg class="mb-1 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2.5"
									d="M5 15l7-7 7 7"
								></path>
							</svg>
							<span class="text-sm font-bold sm:text-base">{idea.votes}</span>
						</button>
					</div>

					<div class="flex-1">
						<div class="mb-2 flex flex-wrap items-center gap-2">
							<span class={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${status.classes}`}>
								{status.label}
							</span>
							<span class="text-xs font-medium text-gray-400 dark:text-gray-500">
								โพสต์เมื่อ {formatDate(idea.createdAt)}
							</span>
						</div>
						<h3
							class="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white"
						>
							{idea.title}
						</h3>
						<p
							class="leading-relaxed whitespace-pre-wrap text-gray-600 transition-colors duration-300 dark:text-gray-400"
						>
							{idea.detail}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

{#if showModal}
	<div class="fixed inset-0 z-110 flex items-center justify-center px-4">
		<div
			class="absolute inset-0 bg-black/40 backdrop-blur-sm"
			aria-hidden="true"
			onclick={() => (showModal = false)}
		></div>

		<div
			class="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 shadow-2xl transition-all sm:p-8 dark:border dark:border-gray-700 dark:bg-gray-900"
		>
			<div class="mb-6 flex items-center justify-between">
				<h2 class="text-2xl font-bold text-gray-900 dark:text-white">เสนอไอเดียใหม่ 🚀</h2>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<button
					onclick={() => (showModal = false)}
					class="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						></path></svg
					>
				</button>
			</div>

			<form onsubmit={submitIdea} class="space-y-5">
				<div>
					<!-- svelte-ignore a11y_label_has_associated_control -->
					<label class="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300"
						>หัวข้อไอเดีย <span class="text-red-500">*</span></label
					>
					<input
						type="text"
						bind:value={newTitle}
						required
						placeholder="เช่น ขอเพิ่มจุดทิ้งขยะแยกประเภท"
						class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-blue-400"
					/>
				</div>
				<div>
					<!-- svelte-ignore a11y_label_has_associated_control -->
					<label class="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300"
						>รายละเอียดเพิ่มเติม <span class="text-red-500">*</span></label
					>
					<textarea
						rows="4"
						bind:value={newDetail}
						required
						placeholder="อธิบายไอเดียของคุณให้พวกเราฟังหน่อย..."
						class="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-blue-400"
					></textarea>
				</div>
				<div class="flex gap-3 pt-4">
					<button
						type="button"
						onclick={() => (showModal = false)}
						class="w-full rounded-xl bg-gray-100 px-4 py-3 font-bold text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
						>ยกเลิก</button
					>
					<button
						type="submit"
						disabled={isSubmitting}
						class="w-full rounded-xl bg-blue-600 px-4 py-3 font-bold text-white transition hover:bg-blue-700 disabled:bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600 dark:disabled:bg-blue-800"
					>
						{#if isSubmitting}
							กำลังบันทึก...
						{:else}
							โพสต์ไอเดีย
						{/if}
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}
