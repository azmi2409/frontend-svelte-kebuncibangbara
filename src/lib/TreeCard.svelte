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
	import Fa from 'svelte-fa';
	import { faTree } from '@fortawesome/free-solid-svg-icons';

	export let tree;
	const time = moment(tree.w_tanam).startOf('day').fromNow();
</script>

<Card class="rounded-3">
	<CardHeader>
		<CardTitle class="mb-3">
			<h3 class="text-center">{tree.id}</h3>
		</CardTitle>
	</CardHeader>
	<CardBody class="text-center">
		<CardImg
			loading="lazy"
			class="py-2 px-2 mb-2"
			src="/longan/{tree.id.toLowerCase()}.jpg"
			alt="Longan"
			style="max-height: 200px; width:auto; border-radius:30px !important;"
		/>
		<CardSubtitle class="py-1">Variant: {tree.variant}</CardSubtitle>
		<CardSubtitle class="py-1">Status: {tree.status}</CardSubtitle>
		<CardSubtitle class="py-1">Lokasi: {tree.lokasi}</CardSubtitle>
		<CardSubtitle class="py-1">Koordinat: {tree.koordinat}</CardSubtitle>
		<CardSubtitle class="py-1">Waktu Tanam: {time}</CardSubtitle>
		<CardFooter class="text-center py-3 mt-2">
            <a href={`/tree/${tree.id}`}>
			<button class="btn btn-secondary btn-lg px-4 py-2">
				<Fa icon={faTree} />
				Profile
			</button>
        </a>
		</CardFooter>
	</CardBody>
</Card>
