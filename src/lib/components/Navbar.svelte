<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex shrink-0 items-center">
				<a
					// eslint-disable-next-line svelte/no-navigation-without-resolve
					href="/"
					class="text-xl font-bold tracking-tight text-blue-800 transition-colors hover:text-blue-900"
				>
					สภานักศึกษา RMUTTO
				</a>
			</div>

			<div class="hidden space-x-8 md:flex">
				<a
					// eslint-disable-next-line svelte/no-navigation-without-resolve
					href="/"
					class="pb-1 transition-colors {$page.url.pathname === '/'
						? 'border-b-2 border-blue-600 font-semibold text-blue-600'
						: 'border-b-2 border-transparent font-medium text-gray-600 hover:text-blue-600'}"
				>
					หน้าแรก
				</a>

				<a
					// eslint-disable-next-line svelte/no-navigation-without-resolve
					href="/about"
					class="pb-1 transition-colors {$page.url.pathname === '/about'
						? 'border-b-2 border-blue-600 font-semibold text-blue-600'
						: 'border-b-2 border-transparent font-medium text-gray-600 hover:text-blue-600'}"
				>
					เกี่ยวกับเรา
				</a>

				<a
					// eslint-disable-next-line svelte/no-navigation-without-resolve
					href="/events"
					class="pb-1 transition-colors {$page.url.pathname.startsWith('/events')
						? 'border-b-2 border-blue-600 font-semibold text-blue-600'
						: 'border-b-2 border-transparent font-medium text-gray-600 hover:text-blue-600'}"
				>
					กิจกรรม
				</a>

				<a
					// eslint-disable-next-line svelte/no-navigation-without-resolve
					href="/services"
					class="pb-1 transition-colors {$page.url.pathname.startsWith('/services')
						? 'border-b-2 border-blue-600 font-semibold text-blue-600'
						: 'border-b-2 border-transparent font-medium text-gray-600 hover:text-blue-600'}"
				>
					บริการนักศึกษา
				</a>
			</div>

			<div class="flex items-center md:hidden">
				<button
					aria-label="Toggle mobile menu"
					class="text-gray-500 hover:text-gray-700 focus:outline-none"
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
