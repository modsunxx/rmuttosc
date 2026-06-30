<script lang="ts">
	const teamMembers = [
		{ name: 'นายอนัส ด้วงฟู', role: 'ประธานสภานักศึกษา', img: '/team/นายอนัส ด้วงฟู.jpeg' },
		{ name: 'นายณัฏฐ์ชย บุญส่ง', role: 'รองประธานสภานักศึกษา', img: '/team/นายณัฏฐ์ชย บุญส่ง.png' },
		{ name: 'นางสาวตุลยามาศ บูโฮม', role: 'รองประธานสภานักศึกษา', img: '/team/นางสาวตุลยามาศ บูโฮม.jpg' },
		{ name: 'นางสาวธันยพร คงสอน', role: 'รองประธานสภานักศึกษา', img: '/team/นางสาวธันยพร คงสอน.png' },
		{ name: 'นายนลธวัช โพธิ์สอาด', role: 'รองประธานสภานักศึกษา', img: '/team/นายนลธวัช โพธิ์สอาด.jpg' },
		{ name: 'นางสาวสุปรียา จ้อยเจริญ', role: 'เลขาธิการสภานักศึกษา', img: '/team/นางสาวสุปรียา จ้อยเจริญ.PNG' },
		{ name: 'นายณัฐภัทร เลาว้าง', role: 'ผู้ตรวจสอบการเงินสภานักศึกษา', img: '/team/นายณัฐภัทร เลาว้าง.PNG' },
		{ name: 'นางสาวบุษกร จงอุ่นกลาง', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นางสาวบุษกร จงอุ่นกลาง.jpg' },
		{ name: 'นายสุธี เนื่องจำนงค์', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นายสุธี เนื่องจำนงค์.PNG' },
		{ name: 'นายณัฏฐชัย ลือธนรัฏฐ์', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นายณัฏฐชัย ลือธนรัฏฐ์.PNG' },
		{ name: 'นางสาวพชรพร ประมาพันธ์', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นางสาวพชรพร ประมาพันธ์.jpg' },
		{ name: 'นางสาวสุขพรรษา นามวงษ์', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นางสาวสุขพรรษา นามวงษ์.jpeg' },
		{ name: 'นางสาวบัณฑิตา รวมวงษ์', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นางสาวบัณฑิตา รวมวงษ์.png' },
		{ name: 'นางสาวเชลซี สังสนา', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นางสาวเชลซี สังสนา.png' },
		{ name: 'นายอธินันท์ บุราเลข', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นายอธินันท์ บุราเลข.png' },
		{ name: 'นายธนพล ทิฎฐานนท์', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นายธนพล ทิฎฐานนท์.png' },
		{ name: 'นางสาวทิพรดา แรมจันทึก', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นางสาวทิพรดา แรมจันทึก.jpg' },
		{ name: 'นายทรงศักดิ์ แวววับ', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นายทรงศักดิ์ แวววับ.PNG' },
		{ name: 'นางสาวภมลภา เขาจารี', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นางสาวภมลภา เขาจารี.png' },
		{ name: 'นางสาวพิชญธิดา มากเปี่ยม', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นางสาวพิชญธิดา มากเปี่ยม.png' },
		{ name: 'นางสาวปภาวี พรมสีดา', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นางสาวปภาวี พรมสีดา.png' },
		{ name: 'นายอดิภา ชูพลสัตย์', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นายอดิภา ชูพลสัตย์.JPG' },
		{ name: 'นายกิตติคุณ จันทร์มหา', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นายกิตติคุณ จันทร์มหา.PNG' },
		{ name: 'นางสาว กนกวรรณ โนรี', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นางสาวกนกวรรณ โนรี.jpg' },
		{ name: 'นายเจตนิพัทธ์ แฟนพิมาย', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นายเจตนิพัทธ์ แฟนพิมาย.jpg' },
		{ name: 'นายชินภัทร นครชาตรี', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นายชินภัทร นครชาตรี.png' },
		{ name: 'นายชยกานต์ เทียนสว่าง', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นายชยกานต์ เทียนสว่าง.jpg' },
		{ name: 'นายสุระคัมภีร์ ภู่ระหงษ์', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นายสุรคัมภีร์ ภู่ระหงษ์.png' },
		{ name: 'นายธีร์นวัต จิรชุนวีศิลป์', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นายธีร์นวัต จิรชุนวีศิลป์.jpg' },
		{ name: 'นายเสฏฐพงศ์ เตียบฉายพันธุ์', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นายเสฏฐพงศ์ เตียบฉายพันธุ์.png' },
		{ name: 'นายธนกฤษ รัตนะ', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นายธนกฤษ รัตนะ.jpg' },
		{ name: 'นายอมรเทพ เฉิดฉาย ', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นายอมรเทพ เฉิดฉาย.jpg' },
		{ name: 'นางสาวธัญชนก แซ่โง้ว', role: 'คณะกรรมการสภานักศึกษา', img: '/team/นางสาวธัญชนก แซ่โง้ว.jpg' }
	];

	// 💡 แยกกลุ่มตำแหน่งต่างๆ เพื่อนำไปจัด Layout ให้แตกต่างกัน
	const president = teamMembers.filter((m) => m.role === 'ประธานสภานักศึกษา');
	const vicePresidents = teamMembers.filter((m) => m.role === 'รองประธานสภานักศึกษา');
	const secAndAuditors = teamMembers.filter(
		(m) => m.role === 'เลขาธิการสภานักศึกษา' || m.role === 'ผู้ตรวจสอบการเงินสภานักศึกษา'
	);
	const committees = teamMembers.filter((m) => m.role === 'คณะกรรมการสภานักศึกษา');
</script>

<svelte:head>
	<title>เกี่ยวกับเรา | สภานักศึกษา RMUTTO</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 pb-20 transition-colors duration-500 dark:bg-gray-950">
	<!-- Section หัวข้อ และ พันธกิจ (โค้ดเดิม) -->
	<section
		class="border-b border-gray-200 bg-white py-16 transition-colors duration-500 sm:py-24 dark:border-gray-800 dark:bg-gray-900/50"
	>
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<h1
				class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 transition-colors duration-300 sm:text-5xl dark:text-white"
			>
				สภานักศึกษา (Student Council)
			</h1>
			<p class="mb-8 text-2xl font-bold text-blue-600 dark:text-blue-400">
				“ร่วมกันคิด ร่วมกันสร้าง ร่วมกันพัฒนามหาวิทยาลัย”
			</p>
			<p
				class="mx-auto max-w-4xl text-xl leading-relaxed text-gray-500 transition-colors duration-300 dark:text-gray-400"
			>
				องค์กรตัวแทนของนักศึกษาที่ทำหน้าที่เป็นศูนย์กลางในการรับฟังความคิดเห็น
				ดูแลสิทธิและผลประโยชน์ของนักศึกษา
				รวมถึงเป็นสื่อกลางในการประสานงานระหว่างนักศึกษากับมหาวิทยาลัย เพื่อส่งเสริมคุณภาพชีวิต
				การพัฒนากิจกรรมนักศึกษา และการพัฒนามหาวิทยาลัยให้ก้าวหน้าอย่างยั่งยืน
			</p>
		</div>
	</section>

	<section class="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<!-- วิสัยทัศน์ -->
			<div class="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700/50 dark:bg-gray-800/50 dark:backdrop-blur-sm">
				<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 transition-colors duration-300 dark:bg-blue-900/40">
					<svg class="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
					</svg>
				</div>
				<h2 class="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
					วิสัยทัศน์ (Vision)
				</h2>
				<p class="grow leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-300">
					“สร้างมหาวิทยาลัยที่นักศึกษาทุกคนมีเสียง มีโอกาส มีอนาคตร่วมกันอย่างยั่งยืน เพราะสภานักศึกษาเป็นศูนย์กลางแห่งการมีส่วนร่วม ขับเคลื่อนมหาวิทยาลัยสู่ความยั่งยืน ทันสมัย และเติบโตไปพร้อมนักศึกษา”
				</p>
			</div>

			<!-- พันธกิจ -->
			<div class="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700/50 dark:bg-gray-800/50 dark:backdrop-blur-sm">
				<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 transition-colors duration-300 dark:bg-indigo-900/40">
					<svg class="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
					</svg>
				</div>
				<h2 class="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
					พันธกิจ (Mission)
				</h2>
				<p class="grow leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-300">
					“พวกเรามุ่งมั่นพัฒนามหาวิทยาลัยให้เป็นพื้นที่แห่งโอกาส การเรียนรู้ และความเท่าเทียม โดยยึดนักศึกษาเป็นศูนย์กลาง เปิดรับทุกความคิดเห็น ส่งเสริมศักยภาพของนักศึกษาในทุกด้าน พร้อมขับเคลื่อนมหาวิทยาลัยไปสู่อนาคตที่ทันสมัย เป็นมิตรต่อสิ่งแวดล้อม และเติบโตอย่างยั่งยืนร่วมกัน”
				</p>
			</div>
		</div>

		<!-- หน้าที่หลัก -->
		<div class="mt-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700/50 dark:bg-gray-800/50 dark:backdrop-blur-sm">
			<div class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 transition-colors duration-300 dark:bg-green-900/40">
				<svg class="h-8 w-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
				</svg>
			</div>
			<h2 class="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
				หน้าที่หลัก (Main duties)
			</h2>
			<p class="mx-auto max-w-5xl leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-300">
				การพิทักษ์สิทธิและผลประโยชน์ของนักศึกษา การรับฟังข้อคิดเห็นและเรื่องร้องทุกข์จากนักศึกษาเพื่อเสนอแนะแนวทางแก้ไข การตรวจสอบและกำกับดูแลการดำเนินงานขององค์การนักศึกษา สโมสรนักศึกษา ชมรม และชุมนุม ให้เป็นไปตามวัตถุประสงค์และงบประมาณที่ได้รับ รวมถึงเสนอความคิดเห็นหรือข้อเสนอแนะที่เป็นประโยชน์ต่อมหาวิทยาลัยและนักศึกษา นอกจากนี้ยังมีหน้าที่พิจารณาโครงการและงบประมาณด้านกิจกรรมนักศึกษา ไกล่เกลี่ยข้อขัดแย้งในการดำเนินกิจกรรม ติดตามและประเมินผลการดำเนินงาน ตลอดจนปฏิบัติหน้าที่อื่นตามที่มหาวิทยาลัยมอบหมาย
			</p>
		</div>
	</section>

	<!-- 🌟 ทำเนียบคณะกรรมการ 🌟 -->
	<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2
				class="text-3xl font-extrabold text-gray-900 transition-colors duration-300 sm:text-4xl dark:text-white"
			>
				ทำเนียบคณะกรรมการ
			</h2>
			<p class="mt-4 text-lg text-gray-500 transition-colors duration-300 dark:text-gray-400">
				คณะกรรมการสภานักศึกษา ประจำปีการศึกษา 2569
			</p>
		</div>

		<!-- 🥇 1. กลุ่มประธานสภา (ใหญ่ที่สุด ตรงกลาง) -->
		<div class="mb-12 flex justify-center">
			{#each president as member (member.name)}
				<div class="flex flex-col items-center rounded-2xl border border-purple-200 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-purple-900/50 dark:bg-gray-800/60 dark:backdrop-blur-sm sm:w-112.5">
					<img
						class="mb-6 h-48 w-48 rounded-full border-4 border-purple-100 object-cover shadow-md transition-colors duration-300 dark:border-purple-900/50"
						src={member.img}
						alt={member.name}
					/>
					<h3 class="mb-2 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
						{member.name}
					</h3>
					<p class="text-lg font-bold text-purple-600 transition-colors duration-300 dark:text-purple-500">
						{member.role}
					</p>
				</div>
			{/each}
		</div>

		<!-- 🥈 2. กลุ่มรองประธาน (ขนาดกลาง) -->
		<div class="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each vicePresidents as member (member.name)}
				<div class="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700/50 dark:bg-gray-800/40">
					<img
						class="mb-5 h-40 w-40 rounded-full border-4 border-gray-50 object-cover shadow-sm transition-colors duration-300 dark:border-gray-700"
						src={member.img}
						alt={member.name}
					/>
					<h3 class="mb-1 text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
						{member.name}
					</h3>
					<p class="font-semibold text-blue-600 transition-colors duration-300 dark:text-blue-400">
						{member.role}
					</p>
				</div>
			{/each}
		</div>

		<!-- 🥉 3. กลุ่มเลขาและตรวจสอบการเงิน (ขนาดเท่ากัน 2 คนตรงกลาง) -->
		<div class="mx-auto mb-16 max-w-3xl">
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
				{#each secAndAuditors as member (member.name)}
					<div class="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700/50 dark:bg-gray-800/40">
						<img
							class="mb-4 h-36 w-36 rounded-full border-4 border-gray-50 object-cover shadow-sm transition-colors duration-300 dark:border-gray-700"
							src={member.img}
							alt={member.name}
						/>
						<h3 class="mb-1 text-lg font-bold text-gray-900 transition-colors duration-300 dark:text-white">
							{member.name}
						</h3>
						<p class="font-medium text-indigo-600 transition-colors duration-300 dark:text-indigo-400">
							{member.role}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- 🏅 4. กลุ่มคณะกรรมการสภานักศึกษา (ขนาดมาตรฐาน เรียง 4 แถว) -->
		<div class="mb-8 flex items-center justify-center">
			<div class="h-px w-16 bg-gray-300 dark:bg-gray-600"></div>
			<span class="px-4 text-sm font-semibold text-gray-500 dark:text-gray-400">คณะกรรมการสภานักศึกษา</span>
			<div class="h-px w-16 bg-gray-300 dark:bg-gray-600"></div>
		</div>

		<div class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
			{#each committees as member (member.name)}
				<div class="flex flex-col items-center rounded-xl bg-transparent p-4 text-center transition-all duration-300 hover:-translate-y-1">
					<img
						class="mb-3 h-28 w-28 rounded-full border-2 border-gray-100 object-cover shadow-sm transition-colors duration-300 dark:border-gray-800"
						src={member.img}
						alt={member.name}
					/>
					<h3 class="mb-1 text-base font-bold text-gray-800 transition-colors duration-300 dark:text-gray-200">
						{member.name}
					</h3>
					<p class="text-sm font-medium text-gray-500 transition-colors duration-300 dark:text-gray-400">
						กรรมการ
					</p>
				</div>
			{/each}
		</div>
	</section>
</div>