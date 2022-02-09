<script>
	import { Modal, ModalHeader, ModalBody } from 'sveltestrap';
	import { postLog } from './PostLog';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

    export let id;
	export let open = false;
	let data = {
		id: id,
		perlakuan: '',
		tanggal: new Date().toISOString().slice(0, 10),
		petugas: '',
		keterangan: ''
	}
	const toggle = () => (open = !open);
    const handleSubmit = () => {
		const json = () => postLog(data);
		const eventDispatch = () => {
			dispatch('submitForm', {
			text: 'reload!'
		})
		}
		return (
		json(),
		data = {
			id: id,
		perlakuan: '',
		tanggal: new Date().toISOString().slice(0, 10),
		petugas: '',
		keterangan: ''
		},
		eventDispatch(),
        toggle()
		)
	};

</script>

<Modal isOpen={open}>
	<ModalHeader {toggle}>Add Logs</ModalHeader>
	<ModalBody>
		<form class="container px-3" on:submit|preventDefault={handleSubmit}>
			<div class="d-block justify-content-center mb-3">
				<label class="form-label" for="perlakuan">Perlakuan</label>
				<input bind:value={data.perlakuan} class="form-control" name="perlakuan" type="text" required />
				<div class="mt-3">
					<label class="form-label" for="tanggal">Tanggal</label>
					<input bind:value={data.tanggal} class="form-control" name="tanggal" type="date" required />
				</div>
				<div class="mt-3">
					<label class="form-label" for="petugas">Petugas</label>
					<input bind:value={data.petugas} class="form-control" name="petugas" type="text" required />
				</div>
				<div class="mt-3">
					<label class="form-label" for="keterangan">Keterangan</label>
					<input bind:value={data.keterangan} class="form-control" name="keterangan" type="text" />
				</div>
				<div class="mt-3">
					<button type="submit" class="btn btn-secondary btn-lg px-3">Submit</button>
				</div>
			</div>
		</form>
	</ModalBody>
</Modal>
