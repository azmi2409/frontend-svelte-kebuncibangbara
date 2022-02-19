<script context="module">
	import { page } from '$app/stores';
</script>

<script>
	let path;
	$: ({ path } = $page.url.pathname);
	let y;
</script>

<svelte:window bind:scrollY={y} />
<div class="container-fluid sticky-md-top p-0">
<header id={y > 50? 'sticky' : 'header'} class="navbar navbar-expand flex-column flex-md-row p-0 my-0 px-lg-5 justify-content-center">
	<a class="navbar navbar-brand" href="/">
		<img class="d-block" id="logo" alt="logo" src="/logo.png" />
	</a>
	<div class="navbar-nav-sroll ml-0">
		<ul class="navbar-nav flex-row">
			<li class="nav-item">
				<a class="nav-link active" href="/">Home</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/">Account</a>
			</li>
		</ul>
	</div>
</header>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
	header {
		font-family: 'Roboto Mono', serif;
	}
	#sticky {
		background: rgb(211, 222, 220,0.4);
		backdrop-filter: blur(10px);
	}
	#logo {
		max-height: 50px;
		width: auto;
		cursor: pointer;
	}

	.nav-link {
		color: #434343;
	}
	.nav-link:hover{
		color: #F05454;
	}
</style>
