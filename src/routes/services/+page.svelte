<!-- src/routes/services/+page.svelte -->
<script lang="ts">
	// Mock ข้อมูลหมวดหมู่บริการ
	const serviceCategories = [
		{
			title: 'ระบบดาวน์โหลดเอกสาร',
			description:
				'ศูนย์รวมแบบฟอร์มต่างๆ ที่จำเป็นสำหรับการทำกิจกรรมของนักศึกษา เช่น ฟอร์มขออนุมัติโครงการ ฟอร์มเบิกจ่าย',
			svgPath:
				'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
		},
		{
			title: 'ระบบจองสถานที่',
			description:
				'สำหรับสโมสรนักศึกษา หรือชมรมที่ต้องการจองห้องประชุม ลานกิจกรรมส่วนกลาง หรือสนามกีฬา',
			svgPath:
				'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
		},
		{
			title: 'บริการยืม-คืนอุปกรณ์',
			description:
				'บริการให้ยืมอุปกรณ์โสตทัศนูปกรณ์ เต็นท์ โต๊ะ เก้าอี้ และอุปกรณ์อื่นๆ สำหรับการจัดกิจกรรม',
			svgPath: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
		}
	];

	// Mock ข้อมูลรายการเอกสารให้ดาวน์โหลด
	const documents = [
		{
			id: 1,
			name: 'แบบฟอร์มขออนุมัติจัดตั้งโครงการ (สำหรับสโมสรนักศึกษาและชมรม)',
			type: 'DOCX',
			size: '1.2 MB',
			date: '15 พ.ค. 2569'
		},
		{
			id: 2,
			name: 'แบบฟอร์มขอเบิกจ่ายงบประมาณจัดกิจกรรม',
			type: 'PDF',
			size: '850 KB',
			date: '10 พ.ค. 2569'
		},
		{
			id: 3,
			name: 'แบบฟอร์มขออนุญาตใช้สถานที่ภายในมหาวิทยาลัย',
			type: 'PDF',
			size: '2.1 MB',
			date: '02 พ.ค. 2569'
		},
		{
			id: 4,
			name: 'แบบฟอร์มขอยืมอุปกรณ์ส่วนกลาง',
			type: 'DOCX',
			size: '500 KB',
			date: '28 เม.ย. 2569'
		},
		{
			id: 5,
			name: 'คู่มือการเขียนรายงานผลการดำเนินงาน (ฉบับปรับปรุงใหม่)',
			type: 'PDF',
			size: '3.4 MB',
			date: '15 เม.ย. 2569'
		}
	];
</script>

<svelte:head>
	<title>บริการนักศึกษา | สภานักศึกษา RMUTTO</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 pb-20">
	<!-- Header Section -->
	<section class="mb-12 border-b-4 border-blue-600 bg-blue-800 py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<h1 class="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
				บริการนักศึกษา
			</h1>
			<p class="mx-auto max-w-2xl text-xl leading-relaxed text-blue-100">
				ศูนย์รวมบริการ ดาวน์โหลดแบบฟอร์ม และระบบอำนวยความสะดวกต่างๆ <br class="hidden sm:block" /> เพื่อสนับสนุนการจัดกิจกรรมของนักศึกษา
			</p>
		</div>
	</section>

	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Service Categories Grid -->
		<div class="-mt-20 mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each serviceCategories as category (category.title)}
				<div
					class="rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
				>
					<div
						class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
					>
						<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<!-- ใช้ {@html} เพื่อเรนเดอร์แท็ก SVG จากตัวแปร -->
							{@html category.svg}
						</svg>
					</div>
					<h3 class="mb-3 text-xl font-bold text-gray-900">{category.title}</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						{category.description}
					</p>
				</div>
			{/each}
		</div>

		<!-- Document Download Section -->
		<div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
			<div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-5">
				<h2 class="text-xl font-bold text-gray-900">เอกสารแบบฟอร์มที่เปิดให้ดาวน์โหลด</h2>
				<span class="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-500"
					>ทั้งหมด {documents.length} รายการ</span
				>
			</div>

			<div class="divide-y divide-gray-100">
				{#each documents as doc (doc.id)}
					<div
						class="group flex items-center justify-between px-6 py-5 transition-colors hover:bg-blue-50/50"
					>
						<div class="flex min-w-0 flex-1 items-center pr-4">
							<!-- Icon ตามประเภทไฟล์ -->
							<div class="mr-4 shrink-0">
								{#if doc.type === 'PDF'}
									<div
										class="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-xs font-bold text-red-600"
									>
										PDF
									</div>
								{:else}
									<div
										class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-xs font-bold text-blue-600"
									>
										DOCX
									</div>
								{/if}
							</div>

							<!-- ชื่อไฟล์และรายละเอียด -->
							<div class="min-w-0 flex-1">
								<p
									class="truncate text-sm font-semibold text-gray-900 transition-colors group-hover:text-blue-700"
								>
									{doc.name}
								</p>
								<div class="mt-1 flex items-center text-xs text-gray-500">
									<span class="mr-3">ขนาด: {doc.size}</span>
									<span>อัปเดตล่าสุด: {doc.date}</span>
								</div>
							</div>
						</div>

						<!-- ปุ่มดาวน์โหลด -->
						<div class="shrink-0">
							<button
								class="inline-flex items-center rounded-full border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm transition-colors hover:bg-blue-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
							>
								<svg
									class="mr-2 -ml-1 h-4 w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
									/>
								</svg>
								ดาวน์โหลด
							</button>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
