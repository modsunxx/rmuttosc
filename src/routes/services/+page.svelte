<script lang="ts">
	let { data } = $props();

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('th-TH', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});
	}

	// 💡 อัปเดต: เพิ่มคลาส dark:... สำหรับป้ายสถานะแต่ละสี
	function getStatusBadge(status: string) {
		if (status === 'pending')
			return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800/50';
		if (status === 'complete')
			return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800/50';
		return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700';
	}

	function translateStatus(status: string) {
		if (status === 'pending') return 'กำลังดำเนินการ';
		if (status === 'complete') return 'เรียบร้อย';
		return status;
	}

	function translateCategory(cat: string) {
		const categories: Record<string, string> = {
			academic: 'วิชาการ',
			facilities: 'อาคารสถานที่',
			security: 'ความปลอดภัย',
			other: 'อื่นๆ'
		};
		return categories[cat] || cat;
	}
</script>

<div class="min-h-screen bg-gray-50 px-6 py-12 transition-colors duration-500 dark:bg-gray-950">
	<div class="mx-auto max-w-6xl">
		<header class="mb-12 text-center">
			<h1
				class="mb-4 text-4xl font-bold text-blue-900 transition-colors duration-300 dark:text-blue-400"
			>
				บริการนักศึกษา
			</h1>
			<p class="text-lg text-gray-600 transition-colors duration-300 dark:text-gray-400">
				สภานักศึกษา มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก (RMUTTO)
			</p>
		</header>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<a href="/complaint" class="group block">
				<div
					class="flex h-full flex-col items-center rounded-2xl border-t-4 border-blue-600 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-xl dark:bg-gray-800/60 dark:backdrop-blur-sm"
				>
					<div
						class="mb-6 rounded-full bg-blue-100 p-4 text-blue-600 transition-all duration-300 group-hover:scale-110 dark:bg-blue-900/40 dark:text-blue-400"
					>
						<svg
							class="h-8 w-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
							></path>
						</svg>
					</div>
					<h2
						class="mb-3 text-2xl font-bold text-gray-800 transition-colors duration-300 dark:text-gray-100"
					>
						แจ้งเรื่องร้องเรียน
					</h2>
					<p class="text-gray-600 transition-colors duration-300 dark:text-gray-400">
						แจ้งปัญหา เสนอแนะ หรือร้องเรียนเรื่องต่างๆ ภายในมหาวิทยาลัย (ระบบนิรนาม)
					</p>
				</div>
			</a>

			<a href="/downloads" class="group block">
				<div
					class="flex h-full flex-col items-center rounded-2xl border-t-4 border-green-500 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-xl dark:bg-gray-800/60 dark:backdrop-blur-sm"
				>
					<div
						class="mb-6 rounded-full bg-green-100 p-4 text-green-500 transition-all duration-300 group-hover:scale-110 dark:bg-green-900/30 dark:text-green-400"
					>
						<svg
							class="h-8 w-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							></path>
						</svg>
					</div>
					<h2
						class="mb-3 text-2xl font-bold text-gray-800 transition-colors duration-300 dark:text-gray-100"
					>
						ดาวน์โหลดเอกสาร
					</h2>
					<p class="text-gray-600 transition-colors duration-300 dark:text-gray-400">
						รวมแบบฟอร์มคำร้องต่างๆ ของสภานักศึกษา และเอกสารที่เกี่ยวข้อง
					</p>
				</div>
			</a>

			<a href="/calendar" class="group block">
				<div
					class="flex h-full flex-col items-center rounded-2xl border-t-4 border-orange-500 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-xl dark:bg-gray-800/60 dark:backdrop-blur-sm"
				>
					<div
						class="mb-6 rounded-full bg-orange-100 p-4 text-orange-500 transition-all duration-300 group-hover:scale-110 dark:bg-orange-900/30 dark:text-orange-400"
					>
						<svg
							class="h-8 w-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							></path>
						</svg>
					</div>
					<h2
						class="mb-3 text-2xl font-bold text-gray-800 transition-colors duration-300 dark:text-gray-100"
					>
						ปฏิทินกิจกรรม
					</h2>
					<p class="text-gray-600 transition-colors duration-300 dark:text-gray-400">
						ติดตามกำหนดการ และกิจกรรมต่างๆ ของสภานักศึกษาตลอดปีการศึกษา
					</p>
				</div>
			</a>
		</div>

		<div class="mt-20">
			<div
				class="mb-8 flex items-center justify-between border-b border-gray-200 pb-4 transition-colors duration-300 dark:border-gray-700"
			>
				<h2
					class="flex items-center gap-2 text-2xl font-bold text-gray-800 transition-colors duration-300 dark:text-gray-100"
				>
					<span class="text-2xl">📢</span> อัปเดตเรื่องร้องเรียนล่าสุด
				</h2>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each data.complaints as complaint, i (i)}
					<div
						class="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700/50 dark:bg-gray-800/50"
					>
						<div class="absolute top-0 left-0 h-1 w-full bg-blue-500 dark:bg-blue-600"></div>

						<div class="mb-4 flex items-start justify-between">
							<span
								class="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600 transition-colors duration-300 dark:bg-blue-900/30 dark:text-blue-400"
							>
								{translateCategory(complaint.category)}
							</span>
							<span
								class={`rounded-full border px-2.5 py-1 text-xs font-bold transition-colors duration-300 ${getStatusBadge(complaint.status)}`}
							>
								{translateStatus(complaint.status)}
							</span>
						</div>

						<h3
							class="mb-2 line-clamp-1 text-lg font-bold text-gray-800 transition-colors duration-300 dark:text-gray-100"
						>
							{complaint.topic}
						</h3>

						<p
							class="mb-6 line-clamp-3 grow text-sm leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-400"
						>
							{complaint.detail}
						</p>

						<div
							class="mt-auto flex items-center border-t border-gray-50 pt-4 text-xs font-medium text-gray-400 transition-colors duration-300 dark:border-gray-700/50 dark:text-gray-500"
						>
							🕒 แจ้งเมื่อ: {formatDate(complaint.created_at)}
						</div>
					</div>
				{/each}

				{#if data.complaints.length === 0}
					<div
						class="col-span-full rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center text-gray-500 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800/30 dark:text-gray-400"
					>
						<div class="mb-3 text-4xl opacity-50 dark:opacity-30">📭</div>
						ยังไม่มีรายการเรื่องร้องเรียนในขณะนี้
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
