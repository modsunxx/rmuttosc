<script lang="ts">
	let faqs = [
		{
			question: 'สภานักศึกษา มทร.ตะวันออก ทำหน้าที่อะไร?',
			answer:
				'เราเป็นตัวแทนของนักศึกษาในการรักษาสิทธิ เป็นกระบอกเสียงในการนำเสนอความคิดเห็น และตรวจสอบการดำเนินงานต่างๆ ภายในมหาวิทยาลัยเพื่อให้เกิดประโยชน์สูงสุดต่อนักศึกษาทุกคน'
		},
		{
			question: 'ต้องการเสนอโครงการหรือกิจกรรมต้องทำอย่างไร?',
			answer:
				"นักศึกษาสามารถดาวน์โหลดแบบฟอร์มเสนอโครงการได้ที่เมนู 'บริการนักศึกษา' และนำมายื่นที่ห้องสภานักศึกษา หรือส่งผ่านสโมสรนักศึกษาของแต่ละคณะ เพื่อให้ทางสภาฯ พิจารณาและสนับสนุนต่อไป"
		},
		{
			question: 'มีปัญหาเรื่องสิ่งอำนวยความสะดวก แจ้งที่ไหนได้บ้าง?',
			answer:
				"สามารถกรอกรายละเอียดในหน้า 'แจ้งเรื่องร้องเรียน' บนเว็บไซต์นี้ได้เลยครับ ข้อมูลของคุณจะถูกส่งตรงถึงคณะกรรมการเพื่อประสานงานกับหน่วยงานที่เกี่ยวข้องของมหาวิทยาลัยโดยเร็วที่สุด"
		},
		{
			question: 'อยากเข้าร่วมทำงานกับสภานักศึกษา ต้องทำอย่างไร?',
			answer:
				"ทางสภาฯ จะมีการเปิดรับสมัครและเลือกตั้งคณะกรรมการชุดใหม่ในช่วงต้นปีการศึกษา สามารถติดตามประกาศรับสมัคร วันเวลา และรายละเอียดได้ที่หน้า 'กิจกรรม' ครับ"
		}
	];

	let activeIndex = $state<number | null>(null);

	function toggle(index: number) {
		activeIndex = activeIndex === index ? null : index;
	}
</script>

<div class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="mb-10 text-center">
		<h2
			class="text-3xl font-extrabold text-gray-900 transition-colors duration-300 sm:text-4xl dark:text-white"
		>
			คำถามที่พบบ่อย (FAQ)
		</h2>
		<p class="mt-4 text-lg text-gray-500 transition-colors duration-300 dark:text-gray-400">
			ข้อสงสัยเกี่ยวกับการทำงานของสภานักศึกษาและบริการต่างๆ
		</p>
	</div>

	<div class="space-y-4">
		{#each faqs as faq, index (index)}
			<div
				class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700/50 dark:bg-gray-800/60 dark:backdrop-blur-sm"
			>
				<button
					class="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
					onclick={() => toggle(index)}
				>
					<span
						class="pr-4 text-lg font-semibold text-gray-900 transition-colors duration-300 dark:text-gray-100"
					>
						{faq.question}
					</span>

					<span
						class="ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors duration-300 dark:bg-blue-900/40 dark:text-blue-400"
					>
						<svg
							class="h-5 w-5 transform transition-transform duration-300 {activeIndex === index
								? 'rotate-180'
								: ''}"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							></path>
						</svg>
					</span>
				</button>

				{#if activeIndex === index}
					<div
						class="border-t border-gray-50 bg-white px-6 pt-4 pb-6 leading-relaxed text-gray-600 transition-colors duration-300 dark:border-gray-700/50 dark:bg-transparent dark:text-gray-300"
					>
						<p>{faq.answer}</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
