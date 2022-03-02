<script>
	let y;

</script>

<svelte:window bind:scrollY={y} />

<header id={y > 101? 'sticky' : 'header'} class="navbar navbar-expand justify-content-between flex-column flex-md-row p-0 my-0 {y > 101? 'sticky-top' : ''}">
	<a class="navbar navbar-brand" href="/">
		<img class="d-block align-self-auto" id={y > 101? 'logo-sticky' : 'logo'} alt="logo" src={y > 101? '/logo.png' : '/logo-big.png'} >
	</a>
	<div class="navbar-nav-sroll">
		<ul class="navbar-nav flex-row">
			<li class="nav-item">
				<a class="nav-link active" href="/">Home</a>
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
		background: rgb(211, 222, 220,0.4);
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

	.nav-link {
		color: #434343;
	}
	.nav-link:hover{
		color: #F05454;
	}
</style>
