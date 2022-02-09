<script context="module">
	import { page } from '$app/stores';
</script>

<script>
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Form,
		InputGroup,
		Input,
		Button
	} from 'sveltestrap';

	import Fa from 'svelte-fa/src/fa.svelte';
	import { faSearch } from '@fortawesome/free-solid-svg-icons';

	const handleClick = () => {
		event.preventDefault();
	};

	let search = '';

	let path;
	$: ({ path } = $page.url.pathname);
</script>

<header class="container-fluid">
	<Navbar class="navbar-expand" expand="md">
		<NavbarBrand class="d-flex justify-content-start align-items-center flex-row" href="/">
			<img id="logo" alt="logo" src="/favicon.png" />
			<div id="link" class="d-block justify-content-center align-self-center text-center">
				<h3 class="brand">Kebun Cibangbara</h3>
				<h6 class="brand">Farm Management System</h6>
			</div>
		</NavbarBrand>
		<Nav class="ms-auto" navbar>
			<Form inline>
				<InputGroup>
					<Input
						type="number"
						name="search"
						id="search"
						bind:value={search}
						placeholder="Cari Nomor"
					/>
					<button id="search" class="btn btn-secondary" on:click|preventDefault={handleClick}>
						<Fa icon={faSearch}/>
					</button>
				</InputGroup>
			</Form>
		</Nav>
	</Navbar>
</header>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
	header {
		position: fixed;
		top: 0;
		z-index: 1;
		overflow-y: hidden;
		overflow-x: auto;
		width: 100%;
		color: white;
		background: rgb(211, 222, 220, 0.8);
		border: 3px solid rgba(211, 222, 220, 0.8);
		backdrop-filter: blur(4px);
		/*background: #0f2027; /* fallback for old browsers 
		background: -webkit-linear-gradient(
			to right,
			#0f2027,
			#203a43,
			#2c5364
		); /* Chrome 10-25, Safari 5.1-6 
		background: linear-gradient(to right, #0f2027, #203a43, #2c5364);*/
	}
	.brand {
		font-family: 'Roboto Mono', cursive;
		/*background: #7f7fd5;
		background: -webkit-linear-gradient(to right, #7f7fd5 0%, #91eae4 100%);
		background: -moz-linear-gradient(to right, #7f7fd5 0%, #91eae4 100%);
		background: linear-gradient(to right, #7f7fd5 0%, #91eae4 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;*/
		background-clip: text;
		background: #000000;
		background: -webkit-linear-gradient(to right, #000000 0%, #434343 100%);
		background: -moz-linear-gradient(to right, #000000 0%, #434343 100%);
		background: linear-gradient(to right, #000000 0%, #434343 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-decoration: none;
		font: bold;
	}
	#logo {
		margin-right: 10px;
	}

	.brand:hover {
		-webkit-text-fill-color: #F05454;
	}
</style>
