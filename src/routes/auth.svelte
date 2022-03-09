<script context="module">
	let a = 0;
</script>

<script>
	import { session } from '$app/stores';
	import { onMount } from 'svelte';
	import Supertokens from 'supertokens-website';
	import { browser } from '$app/env';

	let data = {
		formFields: [
			{
				id: 'email',
				value: ''
			},
			{
				id: 'password',
				value: ''
			}
		]
	};

	if (browser) {
		Supertokens.init({
			apiDomain: 'https://cbr-node.herokuapp.com',
			apiBasePath: '/'
		});
	}

	const handleSubmit = async () => {
		// SSR NOT WORKING
		try {
			const body = JSON.stringify(data);
			const post = await fetch('/signin', {
				method: 'POST',
				body: body
			});
			const res = await post.json();
			if(post.status == 200){
				$session.user.authenticated = true
			}
		} catch (e) {
			console.log(e);
		}

		/*if (browser) {
			const post = await fetch('https://cbr-node.herokuapp.com/signin', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: body
			});
			const res = await post.json();
			const check = await doesSessionExist();
		}*/
	};

	const doesSessionExist = async () => {
		if (await Supertokens.doesSessionExist()) {
			$session.user.authenticated = true;
			return true;
		}
		$session.user.authenticated = false;
		return false;
	};

	const handleLogout = async () => {
		/*const post = await fetch('/signout', { method: 'post' });
		const res = await post.json();*/
		if (browser) {
			await Supertokens.signOut();
		}
		const log = await doesSessionExist();
		console.log(log);
	};

	onMount(async () => {
		await doesSessionExist();
	});
</script>

<svelte:head>
	<title>Login Form</title>
</svelte:head>
<div class="d-flex justify-content-center align-items-center flex-column" style="height: 70vh;">
	<span class="m-5"><h2>Login Form</h2></span>
	<form on:submit|preventDefault={handleSubmit}>
		<div class="mb-3">
			<input
				type="email"
				class="form-control"
				id="email"
				aria-describedby="emailHelp"
				placeholder="User Name"
				bind:value={data.formFields[0].value}
			/>
		</div>
		<div class="mb-3">
			<input
				bind:value={data.formFields[1].value}
				type="password"
				class="form-control"
				id="password"
				placeholder="password"
			/>
		</div>
		<div class="text-center">
			<button type="submit" class="btn btn-primary px-5 mb-5 w-100">Login</button>
		</div>
	</form>
	{#if $session.user.authenticated}
		<h1>Logged in</h1>
		<div class="d-flex">
			<button on:click={handleLogout} class="btn btn-primary btn-lg">Logout</button>
		</div>
		<div class="d-flex">
			<button on:click={doesSessionExist} class="btn btn-primary btn-lg">Check Session</button>
		</div>
	{/if}
</div>
