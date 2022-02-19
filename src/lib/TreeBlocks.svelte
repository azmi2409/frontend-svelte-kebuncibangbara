<script>
	import TreeCard from '$lib/TreeCard.svelte';
	import { slide,fade } from 'svelte/transition';
	import { Pagination, PaginationItem, PaginationLink } from 'sveltestrap';

	export let trees = [];

	let rowsPerPage = 9;
	let currentPage = 0;

	$: items = trees.slice();
	$: maxPage = Math.round(trees.length / rowsPerPage);
	$: start = currentPage * rowsPerPage;
	$: end = Math.min(start + rowsPerPage, items.length);
	$: slice = items.slice(start, end);
	$: lastPage = Math.max(Math.ceil(items.length / rowsPerPage) - 1, 0);
	$: if (currentPage > lastPage) {
		currentPage = lastPage;
	}
</script>


<div class="row px-5 mx-5">
	{#each slice as tree (tree.no)}
		<div class="col-md-4 col-sm-12 p-2 mb-2" out:fade={{duration: 100}} in:slide={{y:200,duration: 200}}>
			<TreeCard {tree}/>
		</div>
	{/each}
</div>
<div class="d-flex justify-content-center align-items-center mt-2">
	<Pagination ariaLabel="Longan Page Navigation">
		<PaginationItem class={currentPage != 0? '' : 'disabled'}>
		  <PaginationLink on:click={() => currentPage = 0} first/>
		</PaginationItem>
		<PaginationItem class={currentPage != 0? '' : 'disabled'}>
		  <PaginationLink on:click={() => currentPage--} previous/>
		</PaginationItem>
		<PaginationItem class={currentPage == 0 ?'active': ''}>
		  <PaginationLink on:click={() => currentPage = 0}>1</PaginationLink>
		</PaginationItem>
		<PaginationItem class={currentPage == 1 ?'active': ''}>
		  <PaginationLink on:click={() => currentPage = 1}>2</PaginationLink>
		</PaginationItem>
		<PaginationItem class={currentPage == 2 ?'active': ''}>
		  <PaginationLink on:click={() => currentPage = 2}>3</PaginationLink>
		</PaginationItem>
		<PaginationItem class={currentPage == 3 ?'active': ''}>
		  <PaginationLink on:click={() => currentPage = 3}>4</PaginationLink>
		</PaginationItem>
		<PaginationItem class={currentPage == 4 ?'active': ''}>
		  <PaginationLink on:click={() => currentPage = 4}>5</PaginationLink>
		</PaginationItem>
		{#if currentPage > 4}
		<PaginationItem active>
			<PaginationLink on:click={() => {}}>{currentPage + 1}</PaginationLink>
		  </PaginationItem>
		{/if}
		<PaginationItem class={currentPage != lastPage? '' : 'disabled'}>
		  <PaginationLink on:click={() => currentPage++} next/>
		</PaginationItem>
		<PaginationItem class={currentPage != lastPage? '' : 'disabled'}>
		  <PaginationLink on:click={() => currentPage = maxPage} last/>
		</PaginationItem>
	  </Pagination>
</div>

