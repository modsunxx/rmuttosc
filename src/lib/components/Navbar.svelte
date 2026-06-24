<script lang="ts">
	import { page } from '$app/stores';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	// 💡 1. สร้าง State สำหรับคุมการเปิด-ปิดเมนูมือถือ
	let isMobileMenuOpen = $state(false);

	// ฟังก์ชันสลับการเปิด/ปิดเมนู
	function toggleMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<nav
	class="sticky top-0 z-100 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md transition-colors duration-500 dark:border-gray-800 dark:bg-gray-950/90"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex shrink-0 items-center">
				<a href="/" class="inline-block transition-transform hover:scale-105 active:scale-95">
					<img
						src="/rmuttosclogo_nobg.png"
						alt="โลโก้สภานักศึกษา RMUTTO"
						class="block h-40 w-auto object-contain drop-shadow-sm dark:hidden"
					/>

					<img
						src="/rmutto_darkmode-removebg.png"
						alt="โลโก้สภานักศึกษา RMUTTO"
						class="hidden h-40 w-auto object-contain drop-shadow-sm dark:block"
					/>
				</a>
			</div>

			<div class="hidden items-center space-x-8 md:flex">
				<a
					href="/"
					class="pb-1 transition-colors {$page.url.pathname === '/'
						? 'border-b-2 border-blue-600 font-semibold text-blue-600 dark:border-blue-400 dark:text-blue-400'
						: 'border-b-2 border-transparent font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}"
					>หน้าแรก</a
				>
				<a
					href="/services"
					class="pb-1 transition-colors {$page.url.pathname.startsWith('/services')
						? 'border-b-2 border-blue-600 font-semibold text-blue-600 dark:border-blue-400 dark:text-blue-400'
						: 'border-b-2 border-transparent font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}"
					>บริการนักศึกษา</a
				>
				<a
					href="/events"
					class="pb-1 transition-colors {$page.url.pathname.startsWith('/events')
						? 'border-b-2 border-blue-600 font-semibold text-blue-600 dark:border-blue-400 dark:text-blue-400'
						: 'border-b-2 border-transparent font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}"
					>กิจกรรม</a
				>
				<a
					href="/about"
					class="pb-1 transition-colors {$page.url.pathname === '/about'
						? 'border-b-2 border-blue-600 font-semibold text-blue-600 dark:border-blue-400 dark:text-blue-400'
						: 'border-b-2 border-transparent font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}"
					>เกี่ยวกับเรา</a
				>

				<div class="flex items-center border-l border-gray-200 pl-6 dark:border-gray-700">
					<ThemeToggle />
				</div>
			</div>

			<div class="relative z-50 flex items-center gap-4 md:hidden">
				<ThemeToggle />

				<button
					onclick={toggleMenu}
					aria-label="Toggle mobile menu"
					class="p-2 text-gray-500 hover:text-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-200"
				>
					{#if isMobileMenuOpen}
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{:else}
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	{#if isMobileMenuOpen}
		<div
			class="border-t border-gray-100 bg-white px-4 pt-2 pb-4 shadow-lg transition-colors duration-500 md:hidden dark:border-gray-800 dark:bg-gray-950"
		>
			<div class="flex flex-col space-y-2">
				<a
					href="/"
					onclick={toggleMenu}
					class="block rounded-md px-3 py-2 text-base font-medium transition-colors {$page.url
						.pathname === '/'
						? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
						: 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'}"
					>หน้าแรก</a
				>
				<a
					href="/services"
					onclick={toggleMenu}
					class="block rounded-md px-3 py-2 text-base font-medium transition-colors {$page.url.pathname.startsWith(
						'/services'
					)
						? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
						: 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'}"
					>บริการนักศึกษา</a
				>
				<a
					href="/events"
					onclick={toggleMenu}
					class="block rounded-md px-3 py-2 text-base font-medium transition-colors {$page.url.pathname.startsWith(
						'/events'
					)
						? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
						: 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'}"
					>กิจกรรม</a
				>
				<a
					href="/about"
					onclick={toggleMenu}
					class="block rounded-md px-3 py-2 text-base font-medium transition-colors {$page.url
						.pathname === '/about'
						? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
						: 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'}"
					>เกี่ยวกับเรา</a
				>
			</div>
		</div>
	{/if}
</nav>
