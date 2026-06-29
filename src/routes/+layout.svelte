<script lang="ts">
	import { onNavigate } from '$app/navigation'; // 💡 นำเข้าเครื่องมือทำ Transition
	import './layout.css'; // โหลด Tailwind CSS

	// นำเข้า Navbar Component จากโฟลเดอร์ที่เราเพิ่งสร้าง
	// $lib/ เป็น alias ที่ชี้ไปยังโฟลเดอร์ src/lib/ อัตโนมัติ
	import Navbar from '$lib/components/Navbar.svelte';

	// นำเข้า Footer Component ที่เราเพิ่งสร้างไว้ใน src/lib/components/
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	// 💡 เวทมนตร์ที่ทำให้เปลี่ยนหน้าเว็บได้สมูทแบบ Crossfade (แอปมือถือ)
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div
	class="flex min-h-screen flex-col bg-gray-50 font-sans transition-colors duration-500 dark:bg-gray-950"
>
	<Navbar />

	<main class="grow">
		{@render children()}
	</main>

	<Footer />
</div>
