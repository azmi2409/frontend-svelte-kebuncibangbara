<script context="module">
	import { variables } from '$lib/variables';
	export async function load({ fetch, session }) {
		try {
			const res = await fetch(`${variables.targetUrl}trees/`, {
				headers: {
					cookie: session.user.oriCookie
				}
			});
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
	import { header, treeData } from '$lib/stores/trees.js';
	import { fade, fly } from 'svelte/transition';
	import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
	Icon
  } from 'sveltestrap';

	let grid = false;
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

	const handleGrid = (e) => {
		e.stopPropagation();
		return grid = !grid;
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
<div class="row justify-content-center">
	<div class="col-12 col-md-10">
		<span class="d-flex justify-content-center">
			<h2 class="px-2 text-uppercase">List Kelengkeng</h2>
		</span>
		<Dropdown class="m-2">
			<DropdownToggle caret><Icon name="gear"></Icon></DropdownToggle>
			<DropdownMenu>
				<DropdownItem header>Options</DropdownItem>
				<DropdownItem on:click={handleGrid}>Switch to {grid? 'DataTable View' : 'Grid View'}</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	</div>
</div>
{#if grid}
	<div class="row justify-content-center">
		<div class="col-12 col-md-10">
	<TreeBlocks trees={$treeData} />
</div>
</div>
{:else}
	<div
		class="row justify-content-center"
		in:fly={{ y: 200, duration: 1000 }}
		out:fade={{ duration: 1000 }}
	>
		<div class="col-12 col-md-10">
			<DataTable trees={$treeData} />
		</div>
	</div>
{/if}
