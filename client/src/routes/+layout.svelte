<script>
	import Breakpoints from '$lib/Breakpoints.svelte';
	import Footer from '$lib/Footer/Footer.svelte';
	import '../app.css';
</script>

<header class="fixed top-0 w-full z-50">THIS IS THE HEADER</header>
<main class="min-h-screen mb-[100px] mt-[24px]">
	<slot />
</main>
<Footer />
