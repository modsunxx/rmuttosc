<script lang="ts">
	import './layout.css'; // โหลด Tailwind CSS

	// นำเข้า Navbar Component จากโฟลเดอร์ที่เราเพิ่งสร้าง
	// $lib/ เป็น alias ที่ชี้ไปยังโฟลเดอร์ src/lib/ อัตโนมัติ
	import Navbar from '$lib/components/Navbar.svelte';

	// นำเข้า Footer Component ที่เราเพิ่งสร้างไว้ใน src/lib/components/
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-gray-50 font-sans">
	<Navbar />

	<main class="grow">
		{@render children()}
	</main>

	<Footer />
</div>
