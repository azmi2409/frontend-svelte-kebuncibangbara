<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Loading from '$lib/Loading.svelte';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { navigating } from '$app/stores';

	let loading = false;

	$: if ($navigating) {
		loading = true;
		window.setTimeout(() => {
			loading = false;
		}, 1200);
	}
</script>

{#if loading}
	<Loading />
{:else}
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
{/if}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
	:global(body) {
		font-family: 'Lato', sans-serif !important;
	}
	:global(button) {
		box-shadow: 1px 3px 5px gray;
	}
	:global(button:hover){
		background: linear-gradient(to right, #000000 0%, #434343 100%) !important;
		transform: translateX(2px) translateY(-2px);
		box-shadow: 5px 5px 8px gray;
	}
	main{
		padding-top: 100px;
	}
</style>
