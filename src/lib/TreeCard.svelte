<script>
	import { CardBody, CardHeader, CardSubtitle, CardTitle } from 'sveltestrap';
	import moment from 'moment';
	import { goto } from '$app/navigation';
	let hover = false;
	let loadImg = true;

	const handleLoad = () => {
		loadImg = false;
	};

	export let tree;
	const time = (params) => moment(params).startOf('years').fromNow().split(' ')[0];
	const hovering = (params) => {
		params ? (hover = true) : (hover = false);
	};
</script>

<div
	class={hover ? 'card hover rounded-3' : 'card rounded-3'}
	style="cursor:pointer;"
	on:mouseenter={() => hovering(true)}
	on:mouseleave={() => hovering(false)}
	on:click={() => goto(`/tree/${tree.id}`)}
>
	<CardHeader>
		<CardTitle class="my-3">
			<h3 class="text-center">{tree.id}</h3>
		</CardTitle>
	</CardHeader>
	<CardBody class="text-center">
		<img
			loading="lazy"
			class="d-block mx-auto mb-2 img-thumbnail border-0"
			id="pict"
			on:error={(e) => (e.target.src = 'https://objectstorage.ap-singapore-1.oraclecloud.com/n/axmb2z4evhfl/b/kebuncibangbara/o/longan/k1.jpg')}
			src="https://objectstorage.ap-singapore-1.oraclecloud.com/n/axmb2z4evhfl/b/kebuncibangbara/o/longan/{tree.id?.toLowerCase()}.jpg"
			alt="Longan"
			style="filter:opacity({loadImg ? 0 : 1});"
			on:load={handleLoad()}
		/>
		<CardSubtitle class="py-1">Variant: {tree.variant}</CardSubtitle>
		<CardSubtitle class="py-1">Status: {tree.status}</CardSubtitle>
		<CardSubtitle class="py-1">Lokasi: {tree.lokasi}</CardSubtitle>
		<CardSubtitle class="py-1">Koordinat: {tree.koordinat}</CardSubtitle>
		<CardSubtitle class="py-1">Umur: {time(tree.w_tanam)} Tahun</CardSubtitle>
	</CardBody>
</div>

<style>
	.hover {
		box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
		filter: drop-shadow(5px 5px 0.1em gray);
		transform: translate(-2px, -1px);
		transition-duration: 250ms;
	}
	#pict {
		max-height: 200px;
		width: auto;
		border-radius: 30px !important;
		transition: opacity 3000ms ease;
	}
</style>
