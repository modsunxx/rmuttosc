<script lang="ts">
	// 1. จัดโครงสร้างข้อมูลใหม่ แบ่งเป็นกลุ่มโฟลเดอร์
	// โครงสร้างข้อมูลใหม่ รัน ID 1-15 เรียงตามหมวดหมู่
	const folders = [
		{
			id: 'club-forms',
			name: 'แบบฟอร์มชมรม',
			description: 'รวมแบบฟอร์มสำหรับการจัดตั้งและดำเนินงานชมรมต่างๆ',
			subfolders: [
				{
					id: 'club-new',
					name: 'จัดตั้งชมรม',
					description: 'เอกสารสำหรับขอจัดตั้งชมรมใหม่',
					files: [
						{
							id: 1,
							title: 'เอกสารชมรม (ตั้งชมรมใหม่)',
							date: 'ปีการศึกษา 2569',
							type: 'DOCX',
							filename: 'club-establish.docx',
							iconColor: 'text-blue-500',
							bgColor: 'bg-blue-50'
						},
						{
							id: 2,
							title: 'เอกสารชมรม (ตั้งชมรมใหม่)',
							date: 'ปีการศึกษา 2569',
							type: 'PDF',
							filename: 'club-establish.pdf',
							iconColor: 'text-red-500',
							bgColor: 'bg-red-50'
						}
					]
				},
				{
					id: 'club-renew',
					name: 'ต่ออายุชมรม',
					description: 'เอกสารสำหรับขอต่ออายุชมรม',
					files: [
						{
							id: 3,
							title: 'เอกสารชมรม (ต่ออายุชมรม)',
							date: 'ปีการศึกษา 2569',
							type: 'DOCX',
							filename: 'club-renew.docx',
							iconColor: 'text-blue-500',
							bgColor: 'bg-blue-50'
						},
						{
							id: 4,
							title: 'เอกสารชมรม (ต่ออายุชมรม)',
							date: 'ปีการศึกษา 2569',
							type: 'PDF',
							filename: 'club-renew.pdf',
							iconColor: 'text-red-500',
							bgColor: 'bg-red-50'
						}
					]
				}
			]
		},
		{
			id: 'regulations',
			name: 'เอกสารข้อบังคับต่างๆ',
			description: 'ข้อบังคับและระเบียบของสภานักศึกษาและมหาวิทยาลัย',
			files: [
				{
					id: 5,
					title: 'ข้อบังคับว่าด้วยเครื่องแบบ เครื่องหมาย และเครื่องแต่งกายนักศึกษา',
					date: 'พ.ศ. 2549',
					type: 'PDF',
					filename: 'regulation-uniform-2549.pdf',
					iconColor: 'text-red-500',
					bgColor: 'bg-red-50'
				},
				{
					id: 6,
					title: 'ข้อบังคับว่าด้วยการจัดการแข่งขันกีฬาราชมงคลแห่งประเทศไทย',
					date: 'พ.ศ. 2563 (ฉบับแก้ไข 2564)',
					type: 'PDF',
					filename: 'regulation-sports-2563.pdf',
					iconColor: 'text-red-500',
					bgColor: 'bg-red-50'
				},
				{
					id: 7,
					title: 'ข้อบังคับว่าด้วยการศึกษาระดับปริญญาตรี',
					date: 'พ.ศ. 2553',
					type: 'PDF',
					filename: 'regulation-bachelor-2553.pdf',
					iconColor: 'text-red-500',
					bgColor: 'bg-red-50'
				},
				{
					id: 8,
					title: 'ข้อบังคับว่าด้วยกิจกรรมนักศึกษาระดับปริญญาตรี',
					date: 'พ.ศ. 2564',
					type: 'PDF',
					filename: 'regulation-activities-2564.pdf',
					iconColor: 'text-red-500',
					bgColor: 'bg-red-50'
				},
				{
					id: 9,
					title: 'ข้อบังคับวินัยของนักศึกษา',
					date: 'พ.ศ. 2549',
					type: 'PDF',
					filename: 'regulation-discipline-2549.pdf',
					iconColor: 'text-red-500',
					bgColor: 'bg-red-50'
				}
			]
		},
		{
			id: 'projects',
			name: 'เอกสารโครงการเสนอ-สรุป',
			description: 'แบบฟอร์มขออนุมัติจัดโครงการ และสรุปผลการดำเนินงาน',
			files: [
				{
					id: 10,
					title: 'แบบฟอร์มเสนอของบประมาณ (สโมสรนักศึกษา/องค์การนักศึกษา)',
					date: 'ปีการศึกษา 2569',
					type: 'DOCX',
					filename: 'project-budget-form.docx',
					iconColor: 'text-blue-500',
					bgColor: 'bg-blue-50'
				},
				{
					id: 11,
					title: 'แบบฟอร์มเสนอของบประมาณ (สโมสรนักศึกษา/องค์การนักศึกษา)',
					date: 'ปีการศึกษา 2569',
					type: 'PDF',
					filename: 'project-budget-form.pdf',
					iconColor: 'text-red-500',
					bgColor: 'bg-red-50'
				},
				{
					id: 12,
					title: 'แบบฟอร์มสรุปโครงการ (สโมสรนักศึกษา/องค์การนักศึกษา)',
					date: 'ปีการศึกษา 2569',
					type: 'DOCX',
					filename: 'project-summary-form.docx',
					iconColor: 'text-blue-500',
					bgColor: 'bg-blue-50'
				},
				{
					id: 13,
					title: 'แบบฟอร์มสรุปโครงการ (สโมสรนักศึกษา/องค์การนักศึกษา)',
					date: 'ปีการศึกษา 2569',
					type: 'PDF',
					filename: 'project-summary-form.pdf',
					iconColor: 'text-red-500',
					bgColor: 'bg-red-50'
				}
			]
		},
		{
			id: 'appointments',
			name: 'เอกสารแต่งตั้ง',
			description: 'คำสั่งแต่งตั้งคณะกรรมการและอาจารย์ที่ปรึกษา',
			files: [
				{
					id: 14,
					title: 'คำสั่ง 1831 แต่งตั้งคณะกรรมการสภานักศึกษา',
					date: 'ปีการศึกษา 2569',
					type: 'PDF',
					filename: 'appointment-committee-1831.pdf',
					iconColor: 'text-red-500',
					bgColor: 'bg-red-50'
				},
				{
					id: 15,
					title: 'คำสั่ง 1832 แต่งตั้งอาจารย์ที่ปรึกษาสภานักศึกษา',
					date: 'ปีการศึกษา 2569',
					type: 'PDF',
					filename: 'appointment-advisor-1832.pdf',
					iconColor: 'text-red-500',
					bgColor: 'bg-red-50'
				}
			]
		}
	];

	// 2. ตัวแปรเก็บสถานะว่า "ตอนนี้เลือกโฟลเดอร์ไหนอยู่" (null = หน้าแรก)
	let selectedFolder = $state<(typeof folders)[0] | null>(null);

	// ฟังก์ชันเปิดโฟลเดอร์
	function openFolder(folder: (typeof folders)[0]) {
		selectedFolder = folder;
	}

	// ฟังก์ชันกลับหน้าหลัก
	function backToFolders() {
		selectedFolder = null;
	}
</script>

<svelte:head>
	<title>ดาวน์โหลดเอกสาร | สภานักศึกษา RMUTTO</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 pb-20">
	<section class="border-b border-gray-200 bg-white py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<div
				class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
			>
				<svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
					/>
				</svg>
			</div>
			<h1 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
				ดาวน์โหลดเอกสาร
			</h1>
			<p class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-500">
				รวมแบบฟอร์มคำร้องและเอกสารต่างๆ สำหรับนักศึกษา RMUTTO
			</p>
		</div>
	</section>

	<section class="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
		{#if !selectedFolder}
			<div class="mb-8">
				<h2 class="text-2xl font-bold text-gray-900">หมวดหมู่เอกสาร</h2>
				<p class="mt-1 text-gray-500">คลิกเลือกโฟลเดอร์เพื่อดูเอกสารภายใน</p>
			</div>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
				{#each folders as folder (folder.id)}
					<button
						onclick={() => openFolder(folder)}
						class="flex w-full items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
					>
						<div
							class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600"
						>
							<svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
								></path>
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-bold text-gray-900">{folder.name}</h3>
							<p class="mt-1 line-clamp-2 text-sm text-gray-500">{folder.description}</p>
							<span
								class="mt-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
							>
								{folder.files?.length || folder.subfolders?.length || 0} รายการ
							</span>
						</div>
					</button>
				{/each}
			</div>
		{:else}
			<div class="mb-8 flex items-center gap-4 border-b border-gray-200 pb-4">
				<button
					onclick={backToFolders}
					class="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200"
				>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					ย้อนกลับ
				</button>
				<h2 class="flex items-center gap-2 text-2xl font-bold text-gray-900">
					<svg class="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
						></path>
					</svg>
					{selectedFolder.name}
				</h2>
			</div>

			<div class="space-y-4">
				{#if !selectedFolder.files || selectedFolder.files.length === 0}
					<div
						class="rounded-2xl border border-dashed border-gray-300 bg-gray-50 py-16 text-center"
					>
						<p class="text-gray-500">ยังไม่มีเอกสารในโฟลเดอร์นี้</p>
					</div>
				{:else}
					{#each selectedFolder.files as doc (doc.id)}
						<div
							class="flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md sm:flex-row"
						>
							<div class="flex w-full items-center gap-4 sm:w-auto">
								<div
									class={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${doc.bgColor}`}
								>
									<svg
										class={`h-6 w-6 ${doc.iconColor}`}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div>
									<h3 class="text-lg font-bold text-gray-900">{doc.title}</h3>
									<p class="mt-1 text-sm text-gray-500">
										อัปเดต: {doc.date} • {doc.type}
									</p>
								</div>
							</div>
							<a
								href={`/documents/${doc.filename}`}
								download
								class="w-full shrink-0 rounded-lg bg-green-500 px-8 py-3 text-center font-bold text-white shadow-sm transition-colors hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
							>
								ดาวน์โหลด
							</a>
						</div>
					{/each}
				{/if}
			</div>
		{/if}
	</section>
</div>
