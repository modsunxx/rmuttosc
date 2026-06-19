<script lang="ts">
	// ตั้งค่าข้อมูลไฟล์เอกสาร (ถ้ามีไฟล์ใหม่ เอามาเพิ่มตรงนี้ได้เลย)
	const documents = [
		{
			id: 1,
			title: 'แบบฟอร์มสรุปโครงการ กองทุนเพื่อนักศึกษา',
			date: 'ปีการศึกษา 2567',
			type: 'DOCX',
			// 🚨 ชื่อไฟล์ต้องพิมพ์ให้ตรงกับในโฟลเดอร์ static/documents แบบเป๊ะๆ ทุกตัวอักษร
			filename: 'form-2567.docx',
			iconColor: 'text-blue-500',
			bgColor: 'bg-blue-50'
		},
		{
			id: 2,
			title: 'คำสั่ง 1831 แต่งตั้งคณะกรรมการสภานักศึกษา',
			date: 'ปีการศึกษา 2569',
			type: 'PDF',
			filename: 'order-1831.pdf',
			iconColor: 'text-red-500',
			bgColor: 'bg-red-50'
		},
		{
			id: 3,
			title: 'คำสั่ง 1832 แต่งตั้งอาจารย์ที่ปรึกษาสภานักศึกษา',
			date: 'ปีการศึกษา 2569',
			type: 'PDF',
			filename: 'order-1832.pdf',
			iconColor: 'text-red-500',
			bgColor: 'bg-red-50'
		}
	];
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

	<section class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="space-y-4">
			{#each documents as doc (doc.id)}
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
		</div>
	</section>
</div>
