<svelte:head>
	<title>Hello World</title>
</svelte:head>

<h1 class="text-7xl">Header (7xl)</h1>
<h1 class="text-6xl">Header (6xl)</h1>
<h1 class="text-5xl">Header (5xl)</h1>
<h1 class="text-4xl">Header (4xl)</h1>
<h1 class="text-3xl">Header (3xl)</h1>
<h1 class="text-2xl">Header (2xl)</h1>
<h2 class="text-xl">Header (xl)</h2>
<h3 class="text-lg">Header (lg)</h3>
<p class="text-base">A regular paragraph (base)</p>
<p class="text-sm">A description paragraph (sm)</p>
<p class="text-xs note">A little note... (xs)</p>
<div class="bg-black min-h-[500px]" />
<br />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
