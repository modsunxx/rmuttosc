<script lang="ts">
	const teamMembers = [
		{
			name: 'นายอนัส ด้วงฟู',
			role: 'ประธานสภานักศึกษา',
			img: '/team/นายอนัส ด้วงฟู.jpeg'
		},
		{
			name: 'นายณัฏฐ์ชย บุญส่ง',
			role: 'รองประธานสภานักศึกษา',
			img: '/team/นายณัฏฐ์ชย บุญส่ง.png'
		},
		{
			name: 'นางสาวตุลยามาศ บูโฮม',
			role: 'รองประธานสภานักศึกษา',
			img: '/team/นางสาวตุลยามาศ บูโฮม.jpg'
		},
		{
			name: 'นางสาวธันยพร คงสอน',
			role: 'รองประธานสภานักศึกษา',
			img: '/team/นางสาวธันยพร คงสอน.png'
		},
		{
			name: 'นายนลธวัช โพธิ์สอาด',
			role: 'รองประธานสภานักศึกษา',
			img: '/team/นายนลธวัช โพธิ์สอาด.jpg'
		},
		{
			name: 'นางสาวสุปรียา จ้อยเจริญ',
			role: 'เลขาธิการสภานักศึกษา',
			img: '/team/นางสาวสุปรียา จ้อยเจริญ.PNG'
		},
		{
			name: 'นายณัฐภัทร เลาว้าง',
			role: 'ผู้ตรวจสอบการเงินสภานักศึกษา',
			img: '/team/นายณัฐภัทร เลาว้าง.PNG'
		},
		{
			name: 'นางสาวบุษกร จงอุ่นกลาง',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นางสาวบุษกร จงอุ่นกลาง.jpg'
		},
		{
			name: 'นายสุธี เนื่องจำนงค์',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นายสุธี เนื่องจำนงค์.PNG'
		},
		{
			name: 'นายณัฏฐชัย ลือธนรัฏฐ์',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นายณัฏฐชัย ลือธนรัฏฐ์.PNG'
		},
		{
			name: 'นางสาวพชรพร ประมาพันธ์',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นางสาวพชรพร ประมาพันธ์.jpg'
		},
		{
			name: 'นางสาวสุขพรรษา นามวงษ์',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นางสาวสุขพรรษา นามวงษ์.jpeg'
		},
		{
			name: 'นางสาวบัณฑิตา รวมวงษ์',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นางสาวบัณฑิตา รวมวงษ์.png'
		},
		{
			name: 'นางสาวเชลซี สังสนา',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นางสาวเชลซี สังสนา.png'
		},
		{
			name: 'นายอธินันท์ บุราเลข',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นายอธินันท์ บุราเลข.png'
		},
		{
			name: 'นายธนพล ทิฎฐานนท์',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นายธนพล ทิฎฐานนท์.png'
		},
		{
			name: 'นางสาวทิพรดา แรมจันทึก',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นางสาวทิพรดา แรมจันทึก.jpg'
		},
		{
			name: 'นายทรงศักดิ์ แวววับ',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นายทรงศักดิ์ แวววับ.PNG'
		},
		{
			name: 'นางสาวภมลภา เขาจารี',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นางสาวภมลภา เขาจารี.png'
		},
		{
			name: 'นางสาวพิชญธิดา มากเปี่ยม',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นางสาวพิชญธิดา มากเปี่ยม.png'
		},
		{
			name: 'นางสาวปภาวี พรมสีดา',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นางสาวปภาวี พรมสีดา.png'
		},
		{
			name: 'นายอดิภา ชูพลสัตย์',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นายอดิภา ชูพลสัตย์.JPG'
		},
		{
			name: 'นายกิตติคุณ จันทร์มหา',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นายกิตติคุณ จันทร์มหา.PNG'
		},
		{
			name: 'นางสาว กนกวรรณ โนรี',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นางสาวกนกวรรณ โนรี.jpg'
		},
		{
			name: 'นายเจตนิพัทธ์ แฟนพิมาย',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นายเจตนิพัทธ์ แฟนพิมาย.jpg'
		},
		{
			name: 'นายชินภัทร นครชาตรี',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นายชินภัทร นครชาตรี.png'
		},
		{
			name: 'นายชยกานต์ เทียนสว่าง',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นายชยกานต์ เทียนสว่าง.jpg'
		},
		{
			name: 'นายสุระคัมภีร์ ภู่ระหงษ์',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นายสุรคัมภีร์ ภู่ระหงษ์.png'
		},
		{
			name: 'นายธีร์นวัต จิรชุนวีศิลป์',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นายธีร์นวัต จิรชุนวีศิลป์.jpg'
		},
		{
			name: 'นายเสฏฐพงศ์ เตียบฉายพันธุ์',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นายเสฏฐพงศ์ เตียบฉายพันธุ์.png'
		},
		{ name: 'นายธนกฤษ รัตนะ', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นายธนกฤษ รัตนะ.jpg' },
		{
			name: 'นายอมรเทพ เฉิดฉาย ',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นายอมรเทพ เฉิดฉาย.jpg'
		},
		{
			name: 'นางสาวธัญชนก แซ่โง้ว',
			role: 'คณะกรรมการสภานักศึกษา',
			img: '/team/นางสาวธัญชนก แซ่โง้ว.jpg'
		}
	];
</script>

<svelte:head>
	<title>เกี่ยวกับเรา | สภานักศึกษา RMUTTO</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 pb-20">
	<section class="border-b border-gray-200 bg-white py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<h1 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
				สภานักศึกษา (Student Council)
			</h1>
			<p class="mb-8 text-2xl font-bold text-blue-600">
				“ร่วมกันคิด ร่วมกันสร้าง ร่วมกันพัฒนามหาวิทยาลัย”
			</p>
			<p class="mx-auto max-w-4xl text-xl leading-relaxed text-gray-500">
				องค์กรตัวแทนของนักศึกษาที่ทำหน้าที่เป็นศูนย์กลางในการรับฟังความคิดเห็น
				ดูแลสิทธิและผลประโยชน์ของนักศึกษา
				รวมถึงเป็นสื่อกลางในการประสานงานระหว่างนักศึกษากับมหาวิทยาลัย เพื่อส่งเสริมคุณภาพชีวิต
				การพัฒนากิจกรรมนักศึกษา และการพัฒนามหาวิทยาลัยให้ก้าวหน้าอย่างยั่งยืน
			</p>
		</div>
	</section>

	<section class="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div
				class="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
			>
				<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
					<svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
						/>
					</svg>
				</div>
				<h2 class="mb-4 text-2xl font-bold text-gray-900">วิสัยทัศน์ (Vision)</h2>
				<p class="grow leading-relaxed text-gray-600">
					“สร้างมหาวิทยาลัยที่นักศึกษาทุกคนมีเสียง มีโอกาส มีอนาคตร่วมกันอย่างยั่งยืน
					เพราะสภานักศึกษาเป็นศูนย์กลางแห่งการมีส่วนร่วม ขับเคลื่อนมหาวิทยาลัยสู่ความยั่งยืน ทันสมัย
					และเติบโตไปพร้อมนักศึกษา”
				</p>
			</div>

			<div
				class="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
			>
				<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100">
					<svg
						class="h-8 w-8 text-indigo-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
						/>
					</svg>
				</div>
				<h2 class="mb-4 text-2xl font-bold text-gray-900">พันธกิจ (Mission)</h2>
				<p class="grow leading-relaxed text-gray-600">
					“พวกเรามุ่งมั่นพัฒนามหาวิทยาลัยให้เป็นพื้นที่แห่งโอกาส การเรียนรู้ และความเท่าเทียม
					โดยยึดนักศึกษาเป็นศูนย์กลาง เปิดรับทุกความคิดเห็น ส่งเสริมศักยภาพของนักศึกษาในทุกด้าน
					พร้อมขับเคลื่อนมหาวิทยาลัยไปสู่อนาคตที่ทันสมัย เป็นมิตรต่อสิ่งแวดล้อม
					และเติบโตอย่างยั่งยืนร่วมกัน”
				</p>
			</div>
		</div>

		<div
			class="mt-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
		>
			<div
				class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-100"
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
			<h2 class="mb-4 text-2xl font-bold text-gray-900">หน้าที่หลัก (Main duties)</h2>
			<p class="mx-auto max-w-5xl leading-relaxed text-gray-600">
				การพิทักษ์สิทธิและผลประโยชน์ของนักศึกษา
				การรับฟังข้อคิดเห็นและเรื่องร้องทุกข์จากนักศึกษาเพื่อเสนอแนะแนวทางแก้ไข
				การตรวจสอบและกำกับดูแลการดำเนินงานขององค์การนักศึกษา สโมสรนักศึกษา ชมรม และชุมนุม
				ให้เป็นไปตามวัตถุประสงค์และงบประมาณที่ได้รับ
				รวมถึงเสนอความคิดเห็นหรือข้อเสนอแนะที่เป็นประโยชน์ต่อมหาวิทยาลัยและนักศึกษา
				นอกจากนี้ยังมีหน้าที่พิจารณาโครงการและงบประมาณด้านกิจกรรมนักศึกษา
				ไกล่เกลี่ยข้อขัดแย้งในการดำเนินกิจกรรม ติดตามและประเมินผลการดำเนินงาน
				ตลอดจนปฏิบัติหน้าที่อื่นตามที่มหาวิทยาลัยมอบหมาย
			</p>
		</div>
	</section>

	<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">ทำเนียบคณะกรรมการ</h2>
			<p class="mt-4 text-lg text-gray-500">คณะกรรมการสภานักศึกษา ประจำปีการศึกษา 2569</p>
		</div>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each teamMembers as member (member.name)}
				<div
					class="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
				>
					<img
						class="mb-4 h-32 w-32 rounded-full border-4 border-gray-50 object-cover shadow-sm"
						src={member.img}
						alt={member.name}
					/>
					<h3 class="mb-1 text-xl font-bold text-gray-900">{member.name}</h3>
					<p class="font-medium text-blue-600">{member.role}</p>
				</div>
			{/each}
		</div>
	</section>
</div>
