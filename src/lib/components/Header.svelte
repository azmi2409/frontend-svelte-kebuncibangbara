<script context="module">
	import { page } from '$app/stores';
</script>

<script>
	import { goto } from '$app/navigation';

	let path;
	$: ({ path } = $page.url.pathname);
</script>

<header class="navbar navbar-expand flex-column flex-md-row sticky-top p-0 my-0 px-lg-5">
	<a class="navbar navbar-brand mr-0 mr-md-2" href="/">
		<img class="d-block" id="logo" alt="logo" src="/logo.png" />
	</a>
	<div class="navbar-nav-sroll ml-0">
		<ul class="navbar-nav flex-row">
			<li class="nav-item">
				<a class="nav-link active" href="/">Home</a>
			</li>
		</ul>
	</div>
</header>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
	header {
		background: rgb(211, 222, 220, 0.8);
		border: 3px solid rgba(211, 222, 220, 0.8);
		backdrop-filter: blur(4px);
		font-family: 'Roboto Mono', serif;
	}
	#logo {
		max-height: 100px;
		width: auto;
		cursor: pointer;
	}
	.nav-link {
		color: #21325E;
	}
</style>
