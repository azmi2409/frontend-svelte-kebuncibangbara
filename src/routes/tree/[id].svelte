<script context="module">
	import { variables } from '$lib/variables';
	export async function load({ params, fetch }) {
		try {
			const url = `${variables.targetUrl}trees/${params.id}`;
			const res = await fetch(url);
			const data = await res.json();
			const url2 = `${variables.targetUrl}logs/${params.id}`;
			const res2 = await fetch(url2);
			const data2 = await res2.json();
			if (res.status == 200) {
				return {
					props: {
						table: data2,
						profile: data
					}
				};
			} return {status:res.status,error:data.message}
		} catch (err) {
			console.log(err);
		}
	}
</script>

<script>
	import { page } from '$app/stores';
	import TableLog from '$lib/TableLog.svelte';
	import Modal from '$lib/Modal.svelte';
	import Qrjs from '$lib/Qrjs.svelte';
	import { treeLogs } from '$lib/stores/trees';

	export let profile;
	export let table;
	let reload = false;

	const reloadTable = (event) => ((reload = true), toggleModal());

	const toggleModal = () => (open = !open);

	const setLogs = () => {
		$treeLogs = table?.map((data, i) => {
			i += 1;
			data.no = i;
			return data;
		});
	};
	setLogs();
	$: open = false;
</script>

<svelte:head>
	<title>Tree Profile: {profile.id}</title>
</svelte:head>

<div class="d-flex justify-content-center mb-5">
	<h1>Tree Profile: {profile.id}</h1>
</div>
<div class="row justify-content-center align-items-center">
	<div class="col-lg-auto col-md-auto text-center">
		<img
			class="img-thumbnail d-flex"
			style="max-height: 200px; width:auto; border-radius:30px;"
			loading="lazy"
			src="https://objectstorage.ap-singapore-1.oraclecloud.com/n/axmb2z4evhfl/b/kebuncibangbara/o/longan/{profile.id?.toLowerCase()}.jpg"
			on:error={(e) => (e.target.src = '/longan/k1.jpg')}
			alt="profile"
		/>
	</div>
	<div class="col-lg-auto col-md-auto">
		<h5>Status: {profile.status}</h5>
		<h5>Lokasi: {profile.lokasi}</h5>
		<h6>Current URL : http://kebuncibangbara.xyz{$page.url.pathname}/</h6>
		<Qrjs codeValue="http://kebuncibangbara.xyz{$page.url.pathname}/" squareSize="200" />
	</div>
</div>
<div class="row justify-content-center mt-5">
	<div class="col-8 py-4">
		<button on:click={toggleModal} class="d-flex btn btn-secondary rounded-3 px-4 mb-3"
			>Add Log</button
		>
		<Modal bind:open id={profile.id} on:submitForm={reloadTable} />
		<TableLog bind:reload />
	</div>
</div>
