<script context="module">
	import { variables } from '$lib/variables';
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
	import DataTable from '$lib/components/DataTable.svelte';
	import { Icon } from 'sveltestrap';
	import IconButton from '@smui/icon-button';
	import { treeData } from '$lib/stores/trees.js';
	import { fade, fly } from 'svelte/transition';
	import Tooltip, { Wrapper } from '@smui/tooltip';

	let grid = true;
	export let trees;

	const addTree = () => {
		$treeData = trees.rows;
	};
	addTree();

	async function loadData() {
		const timeout = (ms) => {
			return new Promise((resolve) => setTimeout(resolve, ms));
		};
		await timeout(2000);
		return $treeData;
	}

	let promise = loadData();
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css"
	/>
	<title>Kebun Kelengkeng Cibangbara</title>
</svelte:head>

<div class="container-fluid container-lg my-3 mx-auto py-2">
	<div class="d-flex justify-content-center align-items-center mb-3">
		<h3>List Kelengkeng</h3>
		<Wrapper>
			<IconButton on:click={() => (grid = !grid)}>
				<Icon name={grid ? 'table' : 'grid'} />
			</IconButton>
			<Tooltip>{grid? 'Open Table View' : 'Open Grid View'}</Tooltip>
		</Wrapper>
	</div>
	{#if grid}
		<TreeBlocks trees={$treeData} />
	{:else}
		<div
			class="row justify-content-center"
			in:fly={{ y: 200, duration: 1000 }}
			out:fade={{ duration: 1000 }}
		>
			<div class="col-8">
				<DataTable trees={$treeData} />
			</div>
		</div>
	{/if}
</div>
