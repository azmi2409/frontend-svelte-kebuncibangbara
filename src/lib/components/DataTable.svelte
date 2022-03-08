<script>
	import moment from 'moment';
	import { goto } from '$app/navigation';
	import { Pagination, PaginationItem, PaginationLink } from 'sveltestrap';

	export let trees = [];
	let rowsPerPage = 10;
	let currentPage = 0;

	const handleKeyDown = (e) => {
		if (e.keyCode == 39) {
			if (currentPage != lastPage) currentPage++;
			console.log(currentPage);
		}
		if (e.keyCode == 37) {
			if (currentPage != 0) currentPage--;
			console.log();
		}
		return;
	};

	$: items = trees.slice();
	$: start = currentPage * rowsPerPage;
	$: end = Math.min(start + rowsPerPage, items.length);
	$: slice = items.slice(start, end);
	$: lastPage = Math.max(Math.ceil(items.length / rowsPerPage) - 1, 0);
	$: if (currentPage > lastPage) {
		currentPage = lastPage;
	}
	$: editRows = (e) => {
		rowsPerPage = parseInt(e.target.value) || 10;
	};

	//Function to search items from array
	function search(searchTerm, array) {
		if (searchTerm == '') {
			return array;
		}
		return array.filter((item) => {
			return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
		});
	}

</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="d-flex justify-content-between mb-2 mt-2 align-items-center">
    <span class="px-2">
		Showing : {start + 1}-{end} of {items.length}
	</span>
    <div class=hstack>
	<span class="px-2"><h6>Rows per page:</h6></span>
	<select on:change={editRows} class="form-select-sm">
		<option selected>10</option>
		<option>25</option>
		<option>50</option>
	</select>
</div>
</div>

<div class="table-responsive">
	<table class="table align-middle table-borderless table-hover table-striped">
		<thead class="border-1">
			<tr>
				<th class="text-center" scope="col">Photo</th>
				<th class="text-center" scope="col">Nomor</th>
				<th class="text-center" scope="col">Lokasi</th>
				<th class="text-center" scope="col">Status</th>
				<th class="text-center" scope="col">Umur</th>
			</tr>
		</thead>
		<tbody>
			{#each slice as item (item.no)}
				<tr on:click={() => goto(`/tree/${item.id}`)}>
					<td class="text-center">
						<img
							loading="lazy"
							src="https://objectstorage.ap-singapore-1.oraclecloud.com/n/axmb2z4evhfl/b/kebuncibangbara/o/longan/{item.id?.toLowerCase()}.jpg"
							on:error={(e) => (e.target.src = '/longan/k1.jpg')}
							alt="Longan"
							class="img-thumbnail"
							style="height: 100px; width: auto;"
						/>
					</td>
					<td class="text-center">{item.id}</td>
					<td class="text-center">{item.lokasi}</td>
					<td class="text-center">{item.status}</td>
					<td class="text-center"
						>{moment(item.w_tanam).startOf('years').fromNow().split(' ')[0]} Tahun</td
					><td />
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<div class="d-flex justify-content-center align-items-center mt-2">
	<Pagination ariaLabel="Longan Page Navigation">
		<PaginationItem class={currentPage != 0 ? '' : 'disabled'}>
			<PaginationLink on:click={() => (currentPage = 0)} first />
		</PaginationItem>
		<PaginationItem class={currentPage != 0 ? '' : 'disabled'}>
			<PaginationLink on:click={() => currentPage--} previous />
		</PaginationItem>
		<PaginationItem class={currentPage == 0 ? 'active' : ''}>
			<PaginationLink on:click={() => (currentPage = 0)}>1</PaginationLink>
		</PaginationItem>
		<PaginationItem class={currentPage == 1 ? 'active' : ''}>
			<PaginationLink on:click={() => (currentPage = 1)}>2</PaginationLink>
		</PaginationItem>
		<PaginationItem class={currentPage == 2 ? 'active' : ''}>
			<PaginationLink on:click={() => (currentPage = 2)}>3</PaginationLink>
		</PaginationItem>
		<PaginationItem class={currentPage == 3 ? 'active' : ''}>
			<PaginationLink on:click={() => (currentPage = 3)}>4</PaginationLink>
		</PaginationItem>
		<PaginationItem class={currentPage == 4 ? 'active' : ''}>
			<PaginationLink on:click={() => (currentPage = 4)}>5</PaginationLink>
		</PaginationItem>
		{#if currentPage > 4}
			<PaginationItem active>
				<PaginationLink on:click={() => {}}>{currentPage + 1}</PaginationLink>
			</PaginationItem>
		{/if}
		<PaginationItem class={currentPage != lastPage ? '' : 'disabled'}>
			<PaginationLink on:click={() => currentPage++} next />
		</PaginationItem>
		<PaginationItem class={currentPage != lastPage ? '' : 'disabled'}>
			<PaginationLink on:click={() => (currentPage = lastPage)} last />
		</PaginationItem>
	</Pagination>
</div>
<style>
	thead{
		font-family: 'Roboto',serif;
	}
</style>