<script>
	// @ts-nocheck

	// @ts-ignore
	let y;
	let tailsize = new Map([
		[0, 500],
		[1, 640],
		[2, 768],
		[3, 1024],
		[4, 1280],
		[5, 1536]
	]);

	// @ts-ignore
	function resize(selection) {
		window.open(
			'https://svelte.dev/repl/a256e95e2c6b4c3c922f4d8c96562ccc?version=3.35.0',
			'_blank',
			'height=' + window.outerHeight + ', width=' + tailsize.get(selection)
		);
	}
</script>

<div class="flex flex-col top-2 left-2 bg-black text-white text-center text-small z-50 p-2">
	<p>
		Tailwind Breakpoint:
		<span class="sm:hidden">Unprefixed</span>
		<span class="hidden sm:max-md:inline">sm</span>
		<span class="hidden md:max-lg:inline">md</span>
		<span class="hidden lg:max-xl:inline">lg</span>
		<span class="hidden xl:max-2xl:inline">xl</span>
		<span class="hidden 2xl:inline">2xl</span>
		({y}px)
	</p>
	<div class="place-content-center py-2">
		<button
			type="button"
			class="p-2 bg-red-500 text-white"
			on:click={() => resize(0)}
			title="Unprefixed">UN</button
		>
		<button type="button" class="p-2 bg-red-500 text-white" on:click={() => resize(1)} title="Small"
			>SM</button
		>
		<button
			type="button"
			class="p-2 bg-red-500 text-white"
			on:click={() => resize(2)}
			title="Medium">MD</button
		>
		<button type="button" class="p-2 bg-red-500 text-white" on:click={() => resize(3)} title="Large"
			>LG</button
		>
		<button
			type="button"
			class="p-2 bg-red-500 text-white"
			on:click={() => resize(4)}
			title="Extra Large">XL</button
		>
		<button
			type="button"
			class="p-2 bg-red-500 text-white"
			on:click={() => resize(5)}
			title="2 Extra Large">2XL</button
		>
	</div>
</div>

<svelte:window bind:innerWidth={y} />
