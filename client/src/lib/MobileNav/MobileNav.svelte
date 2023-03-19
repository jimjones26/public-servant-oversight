<script>
	import layoutStore from '$lib/stores/layout-store';

	let isOpen = false;
	let isMenuRendered;
	$: {
		if (isOpen) {
			setTimeout(() => {
				isMenuRendered = true;
			}, 20);
		} else {
			setTimeout(() => {
				isMenuRendered = false;
			}, 300);
		}
	}
</script>

<button
	class="flex basis-0 grow flex-col items-center gap-2"
	on:click={layoutStore.toggleMobileMenu}
>
	<span class="fa-solid fa-bars" />
	<span class="text-sm">MENU</span>
</button>
