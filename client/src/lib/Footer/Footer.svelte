<script>
	import FooterTabItem from '$lib/Footer/FooterTabItem.svelte';

	const footerNavItems = [
		{ text: 'DONTATE', icon: 'fa-solid fa-hand-holding-dollar' },
		{ text: 'MENU', icon: 'fa-solid fa-bars' },
		{ text: 'CONTACT', icon: 'fa-regular fa-message' }
	];
</script>

<footer class="flex px-8 py-6 bg-white shadow-sm font-bold text-2xl">
	{#each footerNavItems as item}
		<FooterTabItem text={item.text} icon={item.icon} />
	{/each}
</footer>
