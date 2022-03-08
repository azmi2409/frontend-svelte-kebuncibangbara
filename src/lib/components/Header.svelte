<script>
	import { goto } from '$app/navigation';
	import { Icon, Offcanvas } from 'sveltestrap';
	let y;
	let sticky = false;
	let canvas = false;

	$: if (y >= 100) {
		sticky = true;
	} else if (y == 0) {
		sticky = false;
	}

	const toggle = () => (canvas = !canvas);
</script>

<svelte:window bind:scrollY={y} />

<header
	id={sticky ? 'sticky' : 'header'}
	class="navbar flex-wrap {sticky ? 'sticky-top' : ''}"
>
	<div class="navbar navbar-brand">
		<img
			on:click={() => goto('/')}
			class="d-flex align-self-auto"
			id={sticky ? 'logo-sticky' : 'logo'}
			alt="logo"
			src={sticky ? '/logo.png' : '/logo-big.png'}
		/>
	</div>

	<div class="px-lg-5 mx-lg-5 d-flex justify-content-end">
		<ul class="navbar-nav">
			<li class="nav-item">
				<button class="navbar-toggler" on:click={toggle} style="color: black;"><Icon name="list" /></button>
			</li>
		</ul>
	</div>
</header>

<Offcanvas isOpen={canvas} {toggle} header="Main Menu" placement="start">
	<div class="d-flex px-2">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link" href="/" style="color: black;"
					><Icon name="house-door-fill" /><span class="mx-2">Home</span></a
				>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/auth" style="color: black;"
					><Icon name="person-fill" /><span class="mx-2">Account</span></a
				>
			</li>
			<li class="nav-item">
				<div class="nav-link" on:click={toggle} href="/auth" style="color: black;">
					<Icon name="gear-fill" /><span class="mx-2">Settings</span>
				</div>
			</li>
		</ul>
	</div>
</Offcanvas>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
	header {
		font-family: 'Roboto Mono', serif;
		padding-left: 10% !important;
		padding-right: 10% !important;
		transition: all 0.3s ease-in-out;
	}
	#sticky {
		background: rgb(211, 222, 220, 0.4);
		backdrop-filter: blur(10px);
	}
	#logo {
		max-height: 100px;
		width: auto;
		cursor: pointer;
		transition: all 0.5s ease-in;
	}
	#logo-sticky {
		max-height: 50px;
		width: auto;
		cursor: pointer;
		transition: all 0.5s ease-out;
	}
</style>
