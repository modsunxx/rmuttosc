<script lang="ts">
	// Mock ข้อมูลกิจกรรม (สามารถเปลี่ยนรูปภาพและข้อความจริงได้ในภายหลัง)
	const events = [
		{
			id: 1,
			title: 'โครงการ SCITECH VOLUNTEER ปลูกป่าชายเลน',
			date: '20 สิงหาคม 2569',
			category: 'จิตอาสา',
			image:
				'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
			excerpt:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
		}
	];
</script>

<svelte:head>
	<title>ข่าวสารและกิจกรรม | สภานักศึกษา RMUTTO</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 pb-20">
	<section class="mb-12 border-b border-gray-200 bg-white py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<h1 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
				ข่าวสารและกิจกรรม
			</h1>
			<p class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-500">
				ติดตามความเคลื่อนไหว โครงการ และกิจกรรมต่างๆ ที่จัดขึ้นเพื่อนักศึกษา มทร.ตะวันออก
			</p>
		</div>
	</section>

	<section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each events as event (event.id)}
				<article
					class="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
				>
					<div class="relative h-48 w-full overflow-hidden">
						<img
							src={event.image}
							alt={event.title}
							class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
						/>
						<div
							class="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-wide text-blue-700 uppercase shadow-sm backdrop-blur-sm"
						>
							{event.category}
						</div>
					</div>

					<div class="flex grow flex-col p-6">
						<div class="mb-3 flex items-center text-sm text-gray-500">
							<svg class="mr-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							{event.date}
						</div>

						<h2 class="mb-3 line-clamp-2 text-xl leading-snug font-bold text-gray-900">
							{event.title}
						</h2>

						<p class="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-600">
							{event.excerpt}
						</p>

						<div class="mt-auto border-t border-gray-100 pt-4">
							<a
								href="#"
								class="inline-flex items-center font-semibold text-blue-600 transition-colors hover:text-blue-800"
							>
								อ่านเพิ่มเติม
								<svg
									class="ml-1.5 h-4 w-4 transition-transform hover:translate-x-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M14 5l7 7m0 0l-7 7m7-7H3"
									/>
								</svg>
							</a>
						</div>
					</div>
				</article>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<button
				class="rounded-full border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
			>
				โหลดกิจกรรมเพิ่มเติม
			</button>
		</div>
	</section>
</div>
