<script lang="ts">
	import { page } from '$app/stores';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<nav
	class="sticky top-0 z-50 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md transition-colors duration-500 dark:border-gray-800 dark:bg-gray-950/90"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex shrink-0 items-center">
				<a href="/" class="inline-block transition-transform hover:scale-105 active:scale-95">
					<img
						src="/rmuttosclogo_nobg.png"
						alt="โลโก้สภานักศึกษา RMUTTO"
						class="transition-allduration-500dark:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] h-40 w-auto object-contain drop-shadow-sm"
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

			<div class="flex items-center gap-4 md:hidden">
				<ThemeToggle />
				<button
					aria-label="Toggle mobile menu"
					class="text-gray-500 hover:text-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-200"
				>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</nav>
