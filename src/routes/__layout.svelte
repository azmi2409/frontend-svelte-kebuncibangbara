<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { navigating } from '$app/stores';

	let loading = false;

	async function loadSpinner() {
		loading = true;
		const timeout = (ms) => {
			return new Promise((resolve) => setTimeout(resolve, ms));
		};
		await timeout(3000);
		loading = false;
	}

	$: if ($navigating) {
		loadSpinner();
	}
</script>

<Header />
<main class="container-fluid container-lg my-3 mx-auto py-2">
	{#if loading}
		<Loading />
	{:else}
		<slot />
	{/if}
</main>
<Footer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
	:global(body) {
		font-family: 'Lato', sans-serif !important;
		background-color: EFEFEF;
	}
</style>
