<script>
	import layoutStore from '$lib/stores/layout-store';
	import Sidebar from '$lib/Sidebar/Sidebar.svelte';
	import Footer from '$lib/Footer/Footer.svelte';
	import Header from '$lib/Header/Header.svelte';

	import '../app.css';
</script>

<Header />
<div class="min-h-[100%] mt-[80px] mb-[84px] min-w-[320px] lg:mt-[0px] lg:mb-[0px] flex">
	<Sidebar />
	<main class="grow">
		<slot />
	</main>
</div>
<!-- svelte-ignore missing-declaration -->
<Footer />

{#if $layoutStore.showMobileMenu}
	<div class="fixed left-0 top-0 h-full w-full z-1 bg-black text-white">
		<button on:click={layoutStore.toggleMobileMenu}>CLOSE</button>
	</div>
{/if}
