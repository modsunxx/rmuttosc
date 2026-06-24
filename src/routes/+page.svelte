<script lang="ts">
	import FAQ from '$lib/components/FAQ.svelte';
</script>

<svelte:head>
	<title>หน้าแรก | สภานักศึกษา RMUTTO</title>
</svelte:head>

<div
	class="relative min-h-screen w-full overflow-hidden bg-white pb-10 font-sans transition-colors duration-500 dark:bg-gray-950"
>
	<div
		class="absolute inset-0 z-0 transition-opacity duration-500 dark:opacity-10"
		style="background-image: radial-gradient(circle 600px at 0% 200px, #a99bf7, transparent), radial-gradient(circle 600px at 100% 200px, #a99bf7, transparent);"
	></div>

	<div class="relative z-10">
		<main class="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
			<h1
				class="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 transition-colors duration-500 md:text-6xl dark:text-white"
			>
				เสียงของคุณ
				<span
					class="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400"
				>
					คือพลังของเรา
				</span>
			</h1>

			<p
				class="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-gray-600 transition-colors duration-500 dark:text-gray-300"
			>
				ยินดีต้อนรับสู่เว็บไซต์สภานักศึกษา มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก <br />
				เราพร้อมเป็นตัวแทนในการพิทักษ์สิทธิ และขับเคลื่อนคุณภาพชีวิตของนักศึกษาทุกคน
			</p>

			<div class="mt-4 flex flex-col items-center justify-center gap-6 sm:flex-row">
				<div class="group relative inline-flex w-full sm:w-auto">
					<div
						class="absolute -inset-1 rounded-full bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-40 blur-md transition-all duration-300 group-hover:opacity-80 group-hover:blur-lg group-hover:duration-200"
					></div>

					<a
						href="/events"
						class="relative flex w-full items-center justify-center rounded-full bg-indigo-600 px-8 py-3.5 font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-indigo-700"
					>
						ติดตามข่าวสารกิจกรรม
					</a>
				</div>

				<a
					href="/complaint"
					class="relative flex w-full items-center justify-center rounded-full border border-gray-200/80 bg-white/70 px-8 py-3.5 font-bold text-gray-700 shadow-sm backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-indigo-600 hover:shadow-md sm:w-auto dark:border-gray-700/50 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-indigo-400"
				>
					แจ้งเรื่องร้องเรียน
				</a>
			</div>
		</main>

		<FAQ />
	</div>
</div>
