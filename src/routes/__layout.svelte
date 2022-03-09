<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import { navigating } from '$app/stores';

	let loading = false;

	const timeout = (ms) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	async function stopLoading() {
		if (loading) {
			await timeout(200);
			return (loading = false);
		}
		return;
	}

	async function startLoading() {
		await timeout(100);
		if ($navigating) {
			return (loading = true);
		}
		return;
	}

	$: $navigating ? startLoading() : stopLoading();
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
