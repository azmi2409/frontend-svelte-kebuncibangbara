<script>
	import moment from 'moment';
	import { treeLogs } from '$lib/stores/trees';
	export let reload = false;

	function timeout(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	async function loadLogs() {
		try {
			await timeout(1000);
			const data = $treeLogs;
			return data;
		} catch (error) {
			throw new Error(data);
		}
	}
	let promise = loadLogs();

	$: if (reload == true) {
		promise = loadLogs();
		reload = false;
	}
</script>

<div class="table-responsive">
	<table class="table table-bordered align-middle table-hover">
		<thead class="table-dark">
			<tr>
				<th scope="col">No</th>
				<th scope="col">Perlakuan</th>
				<th scope="col">Tanggal</th>
				<th scope="col">Petugas</th>
				<th scope="col">Keterangan</th>
			</tr>
		</thead>
		<tbody>
			{#await promise}
				<tr>
					<th colspan="5" class="text-center">Loading....</th>
				</tr>
			{:then data}
				{#if data.length > 0}
					{#each data as table}
						<tr>
							<th scope="row">{table.no}.</th>
							<td class="text-capitalize">{table.perlakuan}</td>
							<td>{moment(table.tanggal).format('ll')}</td>
							<td class="text-capitalize">{table.petugas}</td>
							<td class="text-capitalize">{table.keterangan}</td>
						</tr>
					{/each}
				{:else}
					<tr>
						<th colspan="5" class="text-center" style="color:blue;">No Data</th>
					</tr>
				{/if}
			{/await}
		</tbody>
	</table>
</div>
