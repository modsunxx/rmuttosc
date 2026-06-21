<script lang="ts">
	// โครงสร้างข้อมูลกิจกรรม (มีแค่ชื่อ วันที่ และรูปภาพ ก็เฟี้ยวได้!)
	const events = [
		{
			id: 'leadership-camp',
			title: 'โครงการพัฒนาผู้นำนักศึกษา (จังหวัดระยอง)',
			date: '25 พฤษภาคม 2569',
			coverImage:
				'/images/events/โครงการพัฒนาผู้นำนักศึกษา (จังหวัดระยอง)/ไฟล์ - 2026-05-25T13_43_06(16).358Z', // เดี๋ยวเราเอารูปไปใส่ในโฟลเดอร์ static/images/events/
			photoCount: 12 // สมมติว่าอัลบั้มนี้มีกี่รูป
		},
		{
			id: 'council-meeting-q2',
			title: 'ประชุมสภา ไตรมาส 2',
			date: '30 พฤษภาคม 2569',
			coverImage: '/images/events/meeting-cover.jpg',
			photoCount: 8
		},
		{
			id: 'sut-exchange',
			title: 'มทร.ตะวันออก ต้อนรับ มทส. แลกเปลี่ยนเรียนรู้และเสริมประสิทธิภาพ',
			date: '18 มิถุนายน 2569',
			coverImage: '/images/events/sut-exchange-cover.jpg',
			photoCount: 24
		},
		{
			id: 'council-9r',
			title: 'สภา 9R',
			date: '11 มิถุนายน 2569',
			coverImage: '/images/events/council-9r-cover.jpg',
			photoCount: 15
		}
	];
</script>

<svelte:head>
	<title>ภาพกิจกรรม | สภานักศึกษา RMUTTO</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 pb-20">
	<section class="border-b border-gray-200 bg-white py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
				<svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
			</div>
			<h1 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
				ประมวลภาพกิจกรรม
			</h1>
			<p class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-500">
				รวมภาพบรรยากาศการดำเนินงานและกิจกรรมต่างๆ ของสภานักศึกษา
			</p>
		</div>
	</section>

	<section class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
			{#each events as event (event.id)}
				<div
					class="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
				>
					<div class="aspect-w-4 aspect-h-3 w-full">
						<img
							src={event.coverImage}
							alt={event.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							onerror={(e) =>
								((e.currentTarget as HTMLImageElement).src =
									'https://placehold.co/800x600/e2e8f0/64748b?text=RMUTTO+Events')}
						/>
					</div>

					<div
						class="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"
					></div>

					<div class="absolute right-0 bottom-0 left-0 p-6">
						<div class="mb-2 flex items-center gap-3">
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
						<h3 class="text-xl leading-snug font-bold text-white drop-shadow-md">
							{event.title}
						</h3>
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>
