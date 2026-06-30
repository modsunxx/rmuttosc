<script lang="ts">
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
							iconColor: 'text-blue-500 dark:text-blue-400',
							bgColor: 'bg-blue-50 dark:bg-blue-900/30'
						},
						{
							id: 2,
							title: 'เอกสารชมรม (ตั้งชมรมใหม่)',
							date: 'ปีการศึกษา 2569',
							type: 'PDF',
							filename: 'club-establish.pdf',
							iconColor: 'text-red-500 dark:text-red-400',
							bgColor: 'bg-red-50 dark:bg-red-900/30'
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
							iconColor: 'text-blue-500 dark:text-blue-400',
							bgColor: 'bg-blue-50 dark:bg-blue-900/30'
						},
						{
							id: 4,
							title: 'เอกสารชมรม (ต่ออายุชมรม)',
							date: 'ปีการศึกษา 2569',
							type: 'PDF',
							filename: 'club-renew.pdf',
							iconColor: 'text-red-500 dark:text-red-400',
							bgColor: 'bg-red-50 dark:bg-red-900/30'
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
					iconColor: 'text-red-500 dark:text-red-400',
					bgColor: 'bg-red-50 dark:bg-red-900/30'
				},
				{
					id: 6,
					title: 'ข้อบังคับว่าด้วยการจัดการแข่งขันกีฬาราชมงคลแห่งประเทศไทย',
					date: 'พ.ศ. 2563 (ฉบับแก้ไข 2564)',
					type: 'PDF',
					filename: 'regulation-sports-2563.pdf',
					iconColor: 'text-red-500 dark:text-red-400',
					bgColor: 'bg-red-50 dark:bg-red-900/30'
				},
				{
					id: 7,
					title: 'ข้อบังคับว่าด้วยการศึกษาระดับปริญญาตรี',
					date: 'พ.ศ. 2553',
					type: 'PDF',
					filename: 'regulation-bachelor-2553.pdf',
					iconColor: 'text-red-500 dark:text-red-400',
					bgColor: 'bg-red-50 dark:bg-red-900/30'
				},
				{
					id: 8,
					title: 'ข้อบังคับว่าด้วยกิจกรรมนักศึกษาระดับปริญญาตรี',
					date: 'พ.ศ. 2564',
					type: 'PDF',
					filename: 'regulation-activities-2564.pdf',
					iconColor: 'text-red-500 dark:text-red-400',
					bgColor: 'bg-red-50 dark:bg-red-900/30'
				},
				{
					id: 9,
					title: 'ข้อบังคับวินัยของนักศึกษา',
					date: 'พ.ศ. 2549',
					type: 'PDF',
					filename: 'regulation-discipline-2549.pdf',
					iconColor: 'text-red-500 dark:text-red-400',
					bgColor: 'bg-red-50 dark:bg-red-900/30'
				},
				{
					id: 16,
					title: 'ประกาศฯ เรื่อง การจัดกิจกรรมสานสัมพันธ์นักศึกษา (รับน้อง)',
					date: 'ปีการศึกษา 2569',
					type: 'PDF',
					filename: 'announcement-freshmen-2569.pdf',
					iconColor: 'text-red-500 dark:text-red-400',
					bgColor: 'bg-red-50 dark:bg-red-900/30'
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
					iconColor: 'text-blue-500 dark:text-blue-400',
					bgColor: 'bg-blue-50 dark:bg-blue-900/30'
				},
				{
					id: 11,
					title: 'แบบฟอร์มเสนอของบประมาณ (สโมสรนักศึกษา/องค์การนักศึกษา)',
					date: 'ปีการศึกษา 2569',
					type: 'PDF',
					filename: 'project-budget-form.pdf',
					iconColor: 'text-red-500 dark:text-red-400',
					bgColor: 'bg-red-50 dark:bg-red-900/30'
				},
				{
					id: 12,
					title: 'แบบฟอร์มสรุปโครงการ (สโมสรนักศึกษา/องค์การนักศึกษา)',
					date: 'ปีการศึกษา 2569',
					type: 'DOCX',
					filename: 'project-summary-form.docx',
					iconColor: 'text-blue-500 dark:text-blue-400',
					bgColor: 'bg-blue-50 dark:bg-blue-900/30'
				},
				{
					id: 13,
					title: 'แบบฟอร์มสรุปโครงการ (สโมสรนักศึกษา/องค์การนักศึกษา)',
					date: 'ปีการศึกษา 2569',
					type: 'PDF',
					filename: 'project-summary-form.pdf',
					iconColor: 'text-red-500 dark:text-red-400',
					bgColor: 'bg-red-50 dark:bg-red-900/30'
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
					iconColor: 'text-red-500 dark:text-red-400',
					bgColor: 'bg-red-50 dark:bg-red-900/30'
				},
				{
					id: 15,
					title: 'คำสั่ง 1832 แต่งตั้งอาจารย์ที่ปรึกษาสภานักศึกษา',
					date: 'ปีการศึกษา 2569',
					type: 'PDF',
					filename: 'appointment-advisor-1832.pdf',
					iconColor: 'text-red-500 dark:text-red-400',
					bgColor: 'bg-red-50 dark:bg-red-900/30'
				}
			]
		}
	];

	let selectedFolder = $state<(typeof folders)[0] | null>(null);

	function openFolder(folder: (typeof folders)[0]) {
		selectedFolder = folder;
	}

	function backToFolders() {
		selectedFolder = null;
	}
</script>

<svelte:head>
	<title>ดาวน์โหลดเอกสาร | สภานักศึกษา RMUTTO</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 pb-20 transition-colors duration-500 dark:bg-gray-950">
	
	<section class="border-b border-gray-200 bg-white py-16 transition-colors duration-500 sm:py-24 dark:border-gray-800 dark:bg-gray-900/50">
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 transition-colors duration-300 dark:bg-green-900/40">
				<svg class="h-8 w-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
				</svg>
			</div>
			<h1 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 transition-colors duration-300 sm:text-5xl dark:text-white">
				ดาวน์โหลดเอกสาร
			</h1>
			<p class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-500 transition-colors duration-300 dark:text-gray-400">
				รวมแบบฟอร์มคำร้องและเอกสารต่างๆ สำหรับนักศึกษา RMUTTO
			</p>
		</div>
	</section>

	<section class="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
		
		{#if !selectedFolder}
			<div class="mb-8">
				<h2 class="text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">หมวดหมู่เอกสาร</h2>
				<p class="mt-1 text-gray-500 transition-colors duration-300 dark:text-gray-400">คลิกเลือกโฟลเดอร์เพื่อดูเอกสารภายใน</p>
			</div>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
				
				{#each folders as folder (folder.id)}
					<button
						onclick={() => openFolder(folder)}
						class="flex w-full items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700/50 dark:bg-gray-800/50 dark:hover:shadow-green-900/20"
					>
						<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-colors duration-300 dark:bg-gray-700/50 dark:text-gray-400">
							<svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
								<path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-bold text-gray-900 transition-colors duration-300 dark:text-white">{folder.name}</h3>
							<p class="mt-1 line-clamp-2 text-sm text-gray-500 transition-colors duration-300 dark:text-gray-400">{folder.description}</p>
							<span class="mt-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 transition-colors duration-300 dark:bg-blue-900/30 dark:text-blue-400">
								{folder.files?.length || (folder.subfolders ? folder.subfolders.reduce((acc, sub) => acc + sub.files.length, 0) : 0)} รายการ
							</span>
						</div>
					</button>
				{/each}

				<a
					href="https://academic.rmutto.ac.th/?page_id=626"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex w-full items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-gray-700/50 dark:bg-gray-800/50 dark:hover:shadow-purple-900/20"
				>
					<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 transition-colors duration-300 group-hover:scale-110 dark:bg-purple-900/30 dark:text-purple-400">
						<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-bold text-gray-900 transition-colors duration-300 dark:text-white">เอกสารสำนักส่งเสริมวิชาการฯ</h3>
						<p class="mt-1 line-clamp-2 text-sm text-gray-500 transition-colors duration-300 dark:text-gray-400">ดาวน์โหลดแบบฟอร์มคำร้องต่างๆ จากเว็บไซต์สำนักส่งเสริมวิชาการและงานทะเบียน (สวท.)</p>
						<span class="mt-3 inline-flex items-center gap-1 rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700 transition-colors duration-300 dark:bg-purple-900/30 dark:text-purple-400">
							เปิดเว็บไซต์ภายนอก
							<svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</span>
					</div>
				</a>

			</div>

		{:else}
			<div class="mb-8 flex items-center gap-4 border-b border-gray-200 pb-4 transition-colors duration-300 dark:border-gray-800">
				<button
					onclick={backToFolders}
					class="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
				>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
					ย้อนกลับ
				</button>
				<h2 class="flex items-center gap-2 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
					<svg class="h-6 w-6 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
						<path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
					</svg>
					{selectedFolder.name}
				</h2>
			</div>

			<div class="space-y-4">
				
				{#if selectedFolder.subfolders && selectedFolder.subfolders.length > 0}
					<div class="space-y-8">
						{#each selectedFolder.subfolders as subfolder (subfolder.id)}
							<div>
								<h3 class="mb-4 text-xl font-bold text-gray-800 transition-colors duration-300 dark:text-gray-200">
									📁 {subfolder.name}
								</h3>
								<div class="space-y-4">
									{#each subfolder.files as doc (doc.id)}
										<div class="flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md sm:flex-row dark:border-gray-700/50 dark:bg-gray-800/50 dark:hover:shadow-green-900/10">
											<div class="flex w-full items-center gap-4 sm:w-auto">
												<div class={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${doc.bgColor}`}>
													<svg class={`h-6 w-6 transition-colors duration-300 ${doc.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
													</svg>
												</div>
												<div>
													<h4 class="text-lg font-bold text-gray-900 transition-colors duration-300 dark:text-white">{doc.title}</h4>
													<p class="mt-1 text-sm text-gray-500 transition-colors duration-300 dark:text-gray-400">อัปเดต: {doc.date} • {doc.type}</p>
												</div>
											</div>
											<a href={`/documents/${doc.filename}`} download class="w-full shrink-0 rounded-lg bg-green-500 px-8 py-3 text-center font-bold text-white shadow-sm transition-colors hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto dark:bg-green-600 dark:hover:bg-green-500">
												ดาวน์โหลด
											</a>
										</div>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				
				{:else if selectedFolder.files && selectedFolder.files.length > 0}
					{#each selectedFolder.files as doc (doc.id)}
						<div class="flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md sm:flex-row dark:border-gray-700/50 dark:bg-gray-800/50 dark:hover:shadow-green-900/10">
							<div class="flex w-full items-center gap-4 sm:w-auto">
								<div class={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${doc.bgColor}`}>
									<svg class={`h-6 w-6 transition-colors duration-300 ${doc.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
									</svg>
								</div>
								<div>
									<h4 class="text-lg font-bold text-gray-900 transition-colors duration-300 dark:text-white">{doc.title}</h4>
									<p class="mt-1 text-sm text-gray-500 transition-colors duration-300 dark:text-gray-400">อัปเดต: {doc.date} • {doc.type}</p>
								</div>
							</div>
							<a href={`/documents/${doc.filename}`} download class="w-full shrink-0 rounded-lg bg-green-500 px-8 py-3 text-center font-bold text-white shadow-sm transition-colors hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto dark:bg-green-600 dark:hover:bg-green-500">
								ดาวน์โหลด
							</a>
						</div>
					{/each}

				{:else}
					<div class="rounded-2xl border border-dashed border-gray-300 bg-gray-50 py-16 text-center transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800/30">
						<p class="text-gray-500 dark:text-gray-400">ยังไม่มีเอกสารในโฟลเดอร์นี้</p>
					</div>
				{/if}
			</div>
		{/if}
	</section>
</div>