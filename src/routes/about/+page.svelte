<script lang="ts">
	// Mock ข้อมูลคณะกรรมการ (สามารถเปลี่ยนรูปและชื่อจริงได้ภายหลัง)
	const teamMembers = [
		{
			name: 'นาย อนัส ด้วงฟู',
			role: 'ประธานสภานักศึกษา',
			img: 'https://ui-avatars.com/api/?name=anusdoungfu&background=0D8ABC&color=fff&size=256'
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
				เกี่ยวกับองค์กรของเรา
			</h1>
			<p class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-500">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
		</div>
	</section>

	<section class="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
		<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
			<div
				class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
			>
				<div
					class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100"
				>
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
				<p class="leading-relaxed text-gray-600">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
					irure dolor in reprehenderit.
				</p>
			</div>

			<div
				class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
			>
				<div
					class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100"
				>
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
				<p class="leading-relaxed text-gray-600">
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
					nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
			</div>
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
