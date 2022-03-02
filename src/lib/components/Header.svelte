<script>
	import { goto } from '$app/navigation';
	import { Icon } from 'sveltestrap';
	let y;
	let show = false;
	let treshold = 100;
	let sticky = false

	$: if(y >= 100){
		sticky = true
	} else if(y == 0){
		sticky = false
	}

</script>

<svelte:window bind:scrollY={y} />

<header
	id={sticky ? 'sticky' : 'header'}
	class="navbar navbar-expand-lg {sticky ? 'sticky-top' : ''}"
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

		<button
			class="navbar-toggler"
			type="button"
			on:click={() => (show = !show)}
		>
			<Icon name={show? "x-circle-fill" : "list"} />
		</button>

		<div class="collapse navbar-collapse {show ? 'show' : ''}">
			<ul class="navbar-nav text-center">
				<li class="nav-item">
					<a class="nav-link" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/auth">Account</a>
				</li>
			</ul>
		</div>
</header>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
	header {
		font-family: 'Roboto Mono', serif;
		padding-left: 12% !important;
		padding-right: 12% !important;
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
