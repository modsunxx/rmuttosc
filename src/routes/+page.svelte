<script lang="ts">
	import FAQ from '$lib/components/FAQ.svelte';
</script>

<svelte:head>
	<title>หน้าแรก | สภานักศึกษา RMUTTO</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 font-sans">
	<main class="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
		<h1 class="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
			เสียงของคุณ
			<span class="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
				คือพลังของเรา
			</span>
		</h1>

		<p class="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-gray-600">
			ยินดีต้อนรับสู่เว็บไซต์สภานักศึกษา มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก <br />
			เราพร้อมเป็นตัวแทนในการพิทักษ์สิทธิ และขับเคลื่อนคุณภาพชีวิตของนักศึกษาทุกคน
		</p>

		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/events"
				class="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg"
			>
				ติดตามข่าวสารกิจกรรม
			</a>
			<a
				href="/complaint"
				class="rounded-full border border-gray-200 bg-white px-8 py-3 font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:text-blue-600"
			>
				แจ้งเรื่องร้องเรียน
			</a>
		</div>
	</main>

	<FAQ />
</div>
