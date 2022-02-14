<script context="module">
	import {variables} from '$lib/variables';
	export async function load({ fetch }) {
		try {
			const res = await fetch(`${variables.targetUrl}trees/`);
			const data = await res.json();
			return {
				props: {
					trees: data
				}
			};
		} catch (err) {
			console.log('500:', err);
		}
	}
</script>

<script>
	import TreeBlocks from '$lib/TreeBlocks.svelte';
	export let trees;
</script>

<svelte:head>
	<title>Kebun Kelengkeng Cibangbara</title>
</svelte:head>

<div class="container-fluid mt-3 py-5">
	<TreeBlocks trees={trees.rows} />
</div>
