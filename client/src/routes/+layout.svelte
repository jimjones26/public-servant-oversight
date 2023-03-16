<script>
	import Breakpoints from '$lib/Breakpoints.svelte';
	import Footer from '$lib/Footer/Footer.svelte';
	import Header from '$lib/Header/Header.svelte';
	import '../app.css';
</script>

<Header />
<main class="min-h-[100%] mt-[104px] mb-[84px] min-w-[320px]">
	<slot />
</main>
<Footer />
