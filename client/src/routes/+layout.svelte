<script>
	import Breakpoints from '$lib/Breakpoints.svelte';
	import Footer from '$lib/Footer/Footer.svelte';
	import '../app.css';
</script>

<header />
<Breakpoints />
<main class="flex-auto">
	<slot />
</main>
<Footer />
