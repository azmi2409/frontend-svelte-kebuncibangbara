<script>
	import { onMount } from 'svelte';
	import { Modal, ModalHeader, ModalBody } from 'sveltestrap';
	import html2canvas from 'html2canvas';

	export let codeValue;
	export let squareSize;
	export let open = false;
	const toggle = () => (open = !open);

	const loadQr = () => {
		new QRCode('qrcode', {
			text: codeValue,
			width: squareSize,
			height: squareSize,
			colorDark: '#000000',
			colorLight: '#ffffff',
			correctLevel: QRCode.CorrectLevel.H
		});
	};

	const handleDownload = () => {
		html2canvas(document.querySelector('#qrcode')).then(canvas => {
			saveAs(canvas.toDataURL(), 'QRCode.jpeg');
		});
	};

	function saveAs(uri, filename) {
		var link = document.createElement('a');

		if (typeof link.download === 'string') {
			link.href = uri;
			link.download = filename;

			//Firefox requires the link to be in the body
			document.body.appendChild(link);

			//simulate click
			link.click();

			//remove the link when done
			document.body.removeChild(link);
		} else {
			window.open(uri);
		}
	}

	onMount(() => {
		let script = document.createElement('script');
		script.src = '/QRCode.js';
		document.head.append(script);
	});
</script>

<button class="btn btn-secondary px-5 my-5" on:click={() => (open = true)}>Qrcode</button>
<Modal on:open={loadQr} isOpen={open}>
	<ModalHeader {toggle}>QrCode Viewer</ModalHeader>
	<ModalBody class="my-3 py-3">
		<div class="d-flex justify-content-center align-items-center">
			<div class="d-flex justify-content-evenly" id="qrcode" style="height: 200px; width: 200px;"/>
		</div>
		<div class="d-flex justify-content-lg-center mt-4 py-3">
			<button on:click={() => handleDownload()} class="btn btn-primary px-2">Download QRCode</button>
		</div>
	</ModalBody>
</Modal>

<style>
	#qrcode {
		width: 210px;
		height: 210x;
		margin-top: 15px;
	}
</style>
