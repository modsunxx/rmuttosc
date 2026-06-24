<script lang="ts">
	import { SvelteDate } from 'svelte/reactivity';

	const today = new SvelteDate();
	today.setHours(0, 0, 0, 0);

	const timelineEvents = [
		// --- เดือนเมษายน ---
		{
			id: 1,
			title: 'โครงการวันอนุรักษ์มรดกไทย ประจำปี 2569',
			date: '2 เมษายน 2569',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-04-02'
		},
		{
			id: 2,
			title: 'โครงการสืบสานประเพณีสงกรานต์ มทร.ตะวันออก ประจำปี 2569',
			date: '2 เมษายน 2569',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-04-02'
		},
		{
			id: 3,
			title: 'กิจกรรมสืบสานประเพณีวันสงกรานต์ ประจำปี 2569',
			date: '1–10 เมษายน 2569',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-04-10'
		},
		{
			id: 4,
			title: 'โครงการสืบสานประเพณีก่อพระทรายวันไหลบางแสน',
			date: '16–17 เมษายน 2569',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-04-17'
		},
		{
			id: 5,
			title:
				'โครงการส่งเสริมศิลปวัฒนธรรมประเพณีท้องถิ่นร่วมกับชุมชนภายนอก กิจกรรมที่ 1 : กิจกรรมประเพณีแห่พญายมตำบลบางพระ ประจำปี พ.ศ. 2569',
			date: '18 เมษายน 2569',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-04-18'
		},
		{
			id: 6,
			title:
				'โครงการส่งเสริมศิลปวัฒนธรรมประเพณีท้องถิ่นร่วมกับชุมชนภายนอก กิจกรรมที่ 2 : กิจกรรมประเพณีกองข้าวศรีราชา ประจำปี 2569',
			date: '21 เมษายน 2569',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-04-21'
		},
		{
			id: 7,
			title: 'กิจกรรมสืบสานประเพณีสงกรานต์',
			date: 'ยังไม่กำหนด (เมษายน 2569)',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-04-30'
		},

		// --- เดือนมิถุนายน ---
		{
			id: 8,
			title: 'โครงการวันเฉลิมพระชนมพรรษาสมเด็จพระนางเจ้าสุทิดา พัชรสุธาพิมลลักษณ พระบรมราชินี',
			date: '2 มิถุนายน 2569',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-06-02'
		},
		{
			id: 9,
			title: 'โครงการสัมมนาเชิงปฏิบัติการสภานักศึกษา 9 มทร. (9R)',
			date: '8-10 มิถุนายน 2569',
			description: '',
			department: 'สภานักศึกษา',
			compareDate: '2026-06-10'
		},
		{
			id: 10,
			title: 'โครงการสานสัมพันธ์วันคล้ายวันสถาปนาวิทยาเขตจันทบุรี ครบรอบ 62 ปี',
			date: '11 มิถุนายน 2569',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-06-11'
		},

		// --- เดือนกรกฎาคม ---
		{
			id: 11,
			title: 'โครงการสืบสานประเพณีแห่เทียนพรรษา',
			date: '16–17, 22 กรกฎาคม 2569',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-07-22'
		},
		{
			id: 12,
			title: 'กิจกรรมสืบสานประเพณีวันเข้าพรรษา ประจำปี 2569',
			date: '24 กรกฎาคม 2569',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-07-24'
		},
		{
			id: 13,
			title: 'โครงการเฉลิมพระเกียรติพระชนมพรรษา พระบาทสมเด็จพระเจ้าอยู่หัว รัชกาลที่ 10',
			date: '24 กรกฎาคม 2569',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-07-24'
		},
		{
			id: 14,
			title: 'โครงการเสริมสร้างศักยภาพสภานักศึกษา สู่การแลกเปลี่ยนเรียนรู้ด้านวิชาการบริหารจัดการ',
			date: '25 กรกฎาคม 2569',
			description: '',
			department: 'สภานักศึกษา',
			compareDate: '2026-07-25'
		},
		{
			id: 15,
			title: 'กิจกรรมถวายเทียนพรรษา ประจำปี 2569',
			date: '27 กรกฎาคม 2569',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-07-27'
		},
		{
			id: 16,
			title: 'โครงการสืบสานประเพณีถวายเทียนพรรษา ประจำปี 2569',
			date: 'ยังไม่กำหนด (กรกฎาคม 2569)',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-07-31'
		},

		// --- เดือนสิงหาคม ---
		{
			id: 17,
			title:
				'โครงการน้อมรำลึกพระมหากรุณาธิคุณสมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง',
			date: '11 สิงหาคม 2569',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-08-11'
		},
		{
			id: 18,
			title:
				'โครงการเข้าร่วมโครงการสัมมนาเชิงปฏิบัติการพัฒนาผู้นำนักศึกษา 9 ราชมงคลสู่สากล ครั้งที่ 6',
			date: 'ยังไม่กำหนด (สิงหาคม 2569)',
			description: '',
			department: 'สภานักศึกษา',
			compareDate: '2026-08-31'
		},

		// --- เดือนกันยายน ---
		{
			id: 19,
			title: 'โครงการประชุมสภานักศึกษา ประจำไตรมาส 4 ปีงบประมาณ 2569',
			date: '12 กันยายน 2569',
			description: '',
			department: 'สภานักศึกษา',
			compareDate: '2026-09-12'
		},
		{
			id: 20,
			title: 'โครงการวันราชมงคลน้อมเกล้า ประจำปี พ.ศ. 2569',
			date: '15 กันยายน 2569',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-09-15'
		},
		{
			id: 21,
			title: 'กิจกรรมแสดงมุทิตาจิตแด่ผู้เกษียณอายุราชการ ประจำปี 2569',
			date: '16 กันยายน 2569',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-09-16'
		},
		{
			id: 22,
			title: 'แสดงมุทิตาจิตบุคลากรเกษียณอายุราชการ',
			date: 'ยังไม่กำหนด (กันยายน 2569)',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-09-30'
		},
		{
			id: 23,
			title: 'กิจกรรมแสดงมุทิตาจิตแด่ผู้เกษียณอายุราชการ ประจำปี 2569',
			date: 'ยังไม่กำหนด (กันยายน 2569)',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-09-30'
		}
	];
</script>

<svelte:head>
	<title>ปฏิทินกิจกรรม | สภานักศึกษา RMUTTO</title>
</svelte:head>

<!-- 💡 1. พื้นหลังหลักของหน้า -->
<div class="min-h-screen bg-gray-50 px-6 py-12 transition-colors duration-500 dark:bg-gray-950">
	
	<!-- 💡 2. ตัวการ์ดปฏิทิน (เพิ่มพื้นหลังโปร่งแสงและเส้นขอบในโหมดมืด) -->
	<div class="mx-auto max-w-4xl rounded-2xl border-t-4 border-orange-500 bg-white p-8 shadow-sm transition-colors duration-300 dark:bg-gray-800/50 dark:backdrop-blur-sm">
		
		<div class="mb-2 flex items-center gap-4">
			<!-- 💡 ไอคอนหัวข้อ -->
			<div class="rounded-full bg-orange-100 p-3 text-orange-500 transition-colors duration-300 dark:bg-orange-900/40 dark:text-orange-400">
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
				</svg>
			</div>
			<h1 class="text-3xl font-bold text-gray-800 transition-colors duration-300 dark:text-white">ปฏิทินกิจกรรม</h1>
		</div>
		<p class="mb-10 ml-14 text-gray-600 transition-colors duration-300 dark:text-gray-400">กำหนดการและกิจกรรมที่น่าสนใจตลอดปีการศึกษา</p>

		<div class="mt-8">
			{#each timelineEvents as event, index (event.id)}
				{@const isUpcoming = new Date(event.compareDate) >= today}

				<div class="flex">
					<div class="flex w-12 shrink-0 flex-col items-center">
						<!-- 💡 จุด Timeline -->
						<div
							class="z-10 mt-1 h-5 w-5 rounded-full {isUpcoming
								? 'bg-orange-500 dark:bg-orange-500 dark:shadow-[0_0_10px_rgba(249,115,22,0.5)]'
								: 'bg-gray-300 dark:bg-gray-700'} shadow-sm transition-colors duration-300"
						></div>

						<!-- 💡 เส้น Timeline -->
						{#if index !== timelineEvents.length - 1}
							<div
								class="-mt-1 h-full w-0.5 {isUpcoming
									? 'bg-orange-200 dark:bg-orange-900/50'
									: 'bg-gray-200 dark:bg-gray-700'} transition-colors duration-300"
							></div>
						{/if}
					</div>

					<div class="flex-1 pt-0.5 pb-10 pl-2">
						<!-- 💡 ป้ายกำกับ "เร็วๆ นี้" -->
						{#if isUpcoming}
							<span
								class="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold tracking-wider text-orange-700 uppercase transition-colors duration-300 dark:bg-orange-900/30 dark:text-orange-400"
							>
								เร็วๆ นี้
							</span>
						{/if}

						<!-- 💡 ชื่อกิจกรรม -->
						<h3 class="mt-1 text-xl font-bold transition-colors duration-300 {isUpcoming ? 'text-gray-800 dark:text-gray-100' : 'text-gray-500 dark:text-gray-500'}">
							{event.title}
						</h3>

						<!-- 💡 ป้ายกำกับแผนกที่จัด -->
						<span
							class="mt-1 mb-2 inline-block rounded-md transition-colors duration-300 {event.department === 'สภานักศึกษา'
								? 'border border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-800/50 dark:bg-blue-900/30 dark:text-blue-400'
								: 'border border-gray-200 bg-gray-100 text-gray-600 dark:border-gray-700/50 dark:bg-gray-800 dark:text-gray-400'} px-2 py-0.5 text-xs font-medium"
						>
							จัดโดย: {event.department}
						</span>

						<!-- 💡 วันที่จัดกิจกรรม -->
						<p
							class="mb-3 text-sm font-semibold transition-colors duration-300 {isUpcoming ? 'text-orange-600 dark:text-orange-400' : 'text-gray-500 dark:text-gray-500'}"
						>
							📅 {event.date}
						</p>

						<!-- 💡 รายละเอียดกิจกรรม (ถ้ามี) -->
						{#if event.description}
							<p
								class="leading-relaxed transition-colors duration-300 {isUpcoming
									? 'rounded-lg border border-gray-100 bg-gray-50 p-4 text-gray-600 shadow-sm dark:border-gray-700/50 dark:bg-gray-800/50 dark:text-gray-300'
									: 'text-gray-500 dark:text-gray-500'}"
							>
								{event.description}
							</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>