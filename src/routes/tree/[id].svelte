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
			return {
				props: {
					table: data2,
					profile: data
				}
			};
		} catch (err) {
			console.log('500:', err);
		}
	}
</script>

<script>
	import { page } from '$app/stores';
	import TableLog from '$lib/TableLog.svelte';
	import Modal from '$lib/Modal.svelte';
	import Qrjs from '$lib/Qrjs.svelte';
	import { treeLogs } from '$lib/stores/trees';
	import { Image, Figure } from 'sveltestrap';

	export let profile;
	export let table;
	let reload = false;

	const reloadTable = (event) => ((reload = true), toggleModal());

	const toggleModal = () => (open = !open);

	const setLogs = () => {
		$treeLogs = table.map((data,i) => {
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

<div class="container py-5">
	<div class="d-flex justify-content-center mb-5">
		<h1>Tree Profile: {profile.id}</h1>
	</div>
	<div class="row justify-content-center mb-5">
		<div class="col-lg-auto col-md-auto text-center">
			<Figure caption={profile.id}>
				<Image
					thumbnail
					style="max-height: 400px; width:auto; border-radius:30px;"
					loading="lazy"
					src="/longan/{profile.id.toLowerCase()}.jpg"
					alt="profile"
				/>
			</Figure>
		</div>
		<div class="col-lg-auto col-md-auto">
			<h5>Status: {profile.status}</h5>
			<h5>Lokasi: {profile.lokasi}</h5>
			<h6>Current URL : http://kebuncibangbara.xyz{$page.url.pathname}</h6>
			<Qrjs codeValue="http://kebuncibangbara.xyz{$page.url.pathname}" squareSize="200" />
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
</div>
