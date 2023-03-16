<script>
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

<Footer />
