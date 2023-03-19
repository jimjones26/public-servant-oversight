<script>
	import FooterTabItem from '$lib/Footer/FooterTabItem.svelte';
	import MobileNav from '$lib/MobileNav/MobileNav.svelte';

	const footerNavItems = [
		{ text: 'DONTATE', icon: 'fa-solid fa-hand-holding-dollar' },
		{ text: 'MENU', icon: 'fa-solid fa-bars' },
		{ text: 'CONTACT', icon: 'fa-regular fa-message' }
	];
</script>

<footer
	class="flex py-4 lg:hidden bg-white shadow-lg shadow-slate-800 font-bold text-2xl fixed bottom-0 w-full z-1 min-w-[320px]"
>
	{#each footerNavItems as item}
		<FooterTabItem text={item.text} icon={item.icon} />
	{/each}
	<MobileNav />
</footer>
