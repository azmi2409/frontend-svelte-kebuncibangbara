<script>
	import TreeCard from '$lib/TreeCard.svelte';
	import { slide } from 'svelte/transition';

	export let trees = [];
</script>

<div class="row">
	{#each trees as tree (tree.no)}
		<div class="col-lg-4 col-md-6 col-sm-12 p-5 mb-3" transition:slide>
			<TreeCard {tree} />
		</div>
	{/each}
</div>

