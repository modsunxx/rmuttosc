<script lang="ts">
	// โครงสร้างข้อมูลกิจกรรม
	const events = [
		{
			id: 'leadership-camp',
			title: 'โครงการพัฒนาผู้นำนักศึกษา (จังหวัดระยอง)',
			date: '20 - 22 พฤษภาคม 2569',
			coverImage: '/images/leadership/cover.jpg',
			photoCount: 226,
			driveLink:
				'https://drive.google.com/drive/folders/1rXLktyaZ_sZEnyFXunWSJYKVQ9tLTzTB?usp=drive_link'
		},
		{
			id: 'council-meeting-q2',
			title: 'ประชุมสภา ไตรมาส 2',
			date: '30 พฤษภาคม 2569',
			coverImage: '/images/meeting/cover.jpg',
			photoCount: 73,
			driveLink:
				'https://drive.google.com/drive/folders/1StEiwz-MD2Ymybxn-OKo13ZcDTl8g7F7?usp=drive_link'
		},
		{
			id: 'sut-exchange',
			title: 'มทร.ตะวันออก ต้อนรับ มทส. แลกเปลี่ยนเรียนรู้และเสริมประสิทธิภาพ',
			date: '18 มิถุนายน 2569',
			coverImage: '/images/sut-exchange/cover.jpg',
			photoCount: 90,
			driveLink:
				'https://drive.google.com/drive/folders/1J_g5cRSrHtdmA1rgl3Qd7UYu2vd3HfAu?usp=drive_link'
		},
		{
			id: 'council-9r',
			title: 'สภา 9R',
			date: '11 มิถุนายน 2569',
			coverImage: '/images/council-9r/cover.jpg',
			photoCount: 754,
			driveLink:
				'https://drive.google.com/drive/folders/1X9AnobCrW1VLso2dO_phD82HXrn4svqm?usp=drive_link'
		}
	];
</script>

<svelte:head>
	<title>ภาพกิจกรรม | สภานักศึกษา RMUTTO</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 pb-20 transition-colors duration-500 dark:bg-gray-950">
	<section
		class="border-b border-gray-200 bg-white py-16 transition-colors duration-500 sm:py-24 dark:border-gray-800 dark:bg-gray-900/50"
	>
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<div
				class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 transition-colors duration-500 dark:bg-blue-900/40"
			>
				<svg
					class="h-8 w-8 text-blue-600 dark:text-blue-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
			</div>

			<h1
				class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 transition-colors duration-500 sm:text-5xl dark:text-white"
			>
				ประมวลภาพกิจกรรม
			</h1>
			<p
				class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-500 transition-colors duration-500 dark:text-gray-400"
			>
				รวมภาพบรรยากาศการดำเนินงานและกิจกรรมต่างๆ ของสภานักศึกษา
			</p>
		</div>
	</section>

	<section class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
			{#each events as event (event.id)}
				<a
					href={event.driveLink}
					target="_blank"
					rel="noopener noreferrer"
					class="group relative block aspect-4/3 overflow-hidden rounded-2xl bg-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 dark:bg-gray-800"
				>
					<img
						src={event.coverImage}
						alt={event.title}
						class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						onerror={(e) =>
							((e.currentTarget as HTMLImageElement).src =
								'https://placehold.co/800x600/1e293b/94a3b8?text=RMUTTO+Events')}
					/>

					<div
						class="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent"
					></div>

					<div class="absolute right-0 bottom-0 left-0 p-6">
						<div class="mb-2 flex flex-wrap items-center gap-3">
							<span
								class="inline-flex items-center rounded-full bg-blue-500/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm"
							>
								<svg class="mr-1.5 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									></path></svg
								>
								{event.date}
							</span>
							<span class="inline-flex items-center text-xs font-medium text-gray-300">
								<svg class="mr-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
									></path></svg
								>
								{event.photoCount} รูป
							</span>
						</div>
						<h3 class="mt-1 text-xl leading-snug font-bold text-white drop-shadow-md">
							{event.title}
						</h3>
					</div>
				</a>
			{/each}
		</div>
	</section>
</div>
