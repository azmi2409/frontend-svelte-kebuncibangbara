<script>
	import {
		Button,
		Card,
		CardBody,
		CardImg,
		CardFooter,
		CardHeader,
		CardSubtitle,
		Figure,
		CardTitle
	} from 'sveltestrap';
	import moment from 'moment';
	import {goto} from '$app/navigation';
	let hover = false;

	export let tree;
	const time = (params) => moment(params).startOf('years').fromNow().split(' ')[0];
	const hovering = (params) => {
		params? hover = true : hover = false;
	}
</script>

<div class={hover? 'card hover rounded-3' : 'card rounded-3'} style="cursor:pointer;" on:mouseenter={() => hovering(true)} on:mouseleave={() => hovering(false)} on:click={() => goto(`/tree/${tree.id}`)}>
	<CardHeader>
		<CardTitle class="mb-3">
			<h3 class="text-center">{tree.id}</h3>
		</CardTitle>
	</CardHeader>
	<CardBody class="text-center">
		<CardImg
			loading="lazy"
			class="d-none d-md-block mx-auto mb-2"
			src="/longan/{tree.id.toLowerCase()}.jpg"
			alt="Longan"
			style="max-height: 200px; width:auto; border-radius:30px !important;"
		/>
		<CardSubtitle class="py-1">Variant: {tree.variant}</CardSubtitle>
		<CardSubtitle class="py-1">Status: {tree.status}</CardSubtitle>
		<CardSubtitle class="py-1">Lokasi: {tree.lokasi}</CardSubtitle>
		<CardSubtitle class="py-1">Koordinat: {tree.koordinat}</CardSubtitle>
		<CardSubtitle class="py-1">Umur: {time(tree.w_tanam)} Tahun</CardSubtitle>
	</CardBody>
</div>

<style>
	.hover{
		box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
	}
</style>