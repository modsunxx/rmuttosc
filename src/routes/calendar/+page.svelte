<script lang="ts">
	import { SvelteDate } from 'svelte/reactivity'; // 💡 1. นำเข้าเครื่องมือ SvelteDate มาใช้

	// 💡 2. เปลี่ยนจาก new Date() เป็น new SvelteDate()
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
			compareDate: '2026-04-10' // 📌 ใช้เวลาวันสุดท้ายคือวันที่ 10
		},
		{
			id: 4,
			title: 'โครงการสืบสานประเพณีก่อพระทรายวันไหลบางแสน',
			date: '16–17 เมษายน 2569',
			description: '',
			department: 'หน่วยงานมหาวิทยาลัย',
			compareDate: '2026-04-17' // 📌 ใช้เวลาวันสุดท้ายคือวันที่ 17
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
			compareDate: '2026-04-30' // 📌 ใช้เวลาวันสิ้นเดือนไปก่อน
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
			compareDate: '2026-06-10' // 📌 ใช้เวลาวันสุดท้ายคือวันที่ 10
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
			compareDate: '2026-07-22' // 📌 ใช้เวลาวันสุดท้ายที่จัดงานคือวันที่ 22
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
<!-- 1. คลุมด้วย relative และ overflow-hidden พร้อมใส่ bg-white ตามแบบ -->

<div class="min-h-screen bg-gray-50 px-6 py-12">
	<div class="mx-auto max-w-4xl rounded-2xl border-t-4 border-orange-500 bg-white p-8 shadow-sm">
		<div class="mb-2 flex items-center gap-4">
			<div class="rounded-full bg-orange-100 p-3 text-orange-500">
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
					></path>
				</svg>
			</div>
			<h1 class="text-3xl font-bold text-gray-800">ปฏิทินกิจกรรม</h1>
		</div>
		<p class="mb-10 ml-14 text-gray-600">กำหนดการและกิจกรรมที่น่าสนใจตลอดปีการศึกษา</p>

		<div class="mt-8">
			{#each timelineEvents as event, index (event.id)}
				{@const isUpcoming = new Date(event.compareDate) >= today}

				<div class="flex">
					<div class="flex w-12 shrink-0 flex-col items-center">
						<div
							class="z-10 mt-1 h-5 w-5 rounded-full {isUpcoming
								? 'bg-orange-500'
								: 'bg-gray-300'} shadow-sm transition-colors duration-300"
						></div>

						{#if index !== timelineEvents.length - 1}
							<div
								class="-mt-1 h-full w-0.5 {isUpcoming
									? 'bg-orange-200'
									: 'bg-gray-200'} transition-colors duration-300"
							></div>
						{/if}
					</div>

					<div class="flex-1 pt-0.5 pb-10 pl-2">
						{#if isUpcoming}
							<span
								class="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold tracking-wider text-orange-700 uppercase"
							>
								เร็วๆ นี้
							</span>
						{/if}

						<h3 class="mt-1 text-xl font-bold {isUpcoming ? 'text-gray-800' : 'text-gray-500'}">
							{event.title}
						</h3>

						<span
							class="mt-1 mb-2 inline-block rounded-md {event.department === 'สภานักศึกษา'
								? 'border border-blue-100 bg-blue-50 text-blue-600'
								: 'border border-gray-200 bg-gray-100 text-gray-600'} px-2 py-0.5 text-xs font-medium"
						>
							จัดโดย: {event.department}
						</span>

						<p
							class="mb-3 text-sm font-semibold {isUpcoming ? 'text-orange-600' : 'text-gray-500'}"
						>
							📅 {event.date}
						</p>

						{#if event.description}
							<p
								class="leading-relaxed {isUpcoming
									? 'rounded-lg border border-gray-100 bg-gray-50 p-4 text-gray-600 shadow-sm'
									: 'text-gray-500'}"
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
