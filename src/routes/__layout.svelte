<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { navigating } from '$app/stores';

	let loading = false;

	async function stopLoading() {
		const timeout = (ms) => {
			return new Promise((resolve) => setTimeout(resolve, ms));
		};
		await timeout(200);
		loading = false;
	}

	$: $navigating? loading = true : stopLoading();
</script>

<Header />
<main class="container-fluid container-lg my-3 mx-auto py-2">
	{#if loading}
		<Loading />
	{:else}
		<slot/>
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
