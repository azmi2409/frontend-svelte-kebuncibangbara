<script>
	import DataTable, { Head, Body, Row, Cell, Pagination } from '@smui/data-table';
	import Select, { Option } from '@smui/select';
	import IconButton from '@smui/icon-button';
	import { Label } from '@smui/common';
	import moment from 'moment';
	import { goto } from '$app/navigation';

	export let trees = [];
	let rowsPerPage = 10;
	let currentPage = 0;

	$: items = trees.slice();
	$: start = currentPage * rowsPerPage;
	$: end = Math.min(start + rowsPerPage, items.length);
	$: slice = items.slice(start, end);
	$: lastPage = Math.max(Math.ceil(items.length / rowsPerPage) - 1, 0);
	$: if (currentPage > lastPage) {
		currentPage = lastPage;
	}
</script>

		<DataTable table$aria-label="List Kelengkeng" style="width: 100%;">
			<Head>
				<Row>
					<Cell class="text-center">Photo</Cell>
					<Cell class="text-center">Nomor</Cell>
					<Cell class="text-center">Lokasi</Cell>
					<Cell class="text-center">Status</Cell>
					<Cell class="text-center">Umur</Cell>
				</Row>
			</Head>
			<Body style="cursor:pointer;">
				{#each slice as item (item.id)}
					<Row on:click={() => goto(`/tree/${item.id}`)}>
						<Cell class="text-center p-1">
							<img
								loading="lazy"
								src="https://objectstorage.ap-singapore-1.oraclecloud.com/n/axmb2z4evhfl/b/kebuncibangbara/o/longan/{item.id?.toLowerCase()}.jpg"
								alt="Longan"
								class="img-thumbnail"
								style="height: 100px; width: auto;"
							/>
						</Cell>
						<Cell class="text-center">{item.id}</Cell>
						<Cell class="text-center">{item.lokasi}</Cell>
						<Cell class="text-center">{item.status}</Cell>
						<Cell class="text-center"
							>{moment(item.w_tanam).startOf('years').fromNow().split(' ')[0]} Tahun</Cell
						>
					</Row>
				{/each}
			</Body>

			<Pagination slot="paginate">
				<svelte:fragment slot="rowsPerPage">
					<Label>Rows Per Page</Label>
					<Select variant="outlined" bind:value={rowsPerPage} noLabel>
						<Option value={10}>10</Option>
						<Option value={25}>25</Option>
						<Option value={50}>50</Option>
					</Select>
				</svelte:fragment>
				<svelte:fragment slot="total">
					{start + 1}-{end} of {items.length}
				</svelte:fragment>

				<IconButton
					class="material-icons"
					action="first-page"
					title="First page"
					on:click={() => (currentPage = 0)}
					disabled={currentPage === 0}>first_page</IconButton
				>
				<IconButton
					class="material-icons"
					action="prev-page"
					title="Prev page"
					on:click={() => currentPage--}
					disabled={currentPage === 0}>chevron_left</IconButton
				>
				<IconButton
					class="material-icons"
					action="next-page"
					title="Next page"
					on:click={() => currentPage++}
					disabled={currentPage === lastPage}>chevron_right</IconButton
				>
				<IconButton
					class="material-icons"
					action="last-page"
					title="Last page"
					on:click={() => (currentPage = lastPage)}
					disabled={currentPage === lastPage}>last_page</IconButton
				>
			</Pagination>
		</DataTable>