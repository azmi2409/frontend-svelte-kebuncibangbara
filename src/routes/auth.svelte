<script>
	import { session } from '$app/stores';
	import { onMount } from 'svelte';

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
	const handleSubmit = async () => {
		const post = await fetch('/signin', {
			method: 'POST',
			body: JSON.stringify(data)
		});
		const res = await post.json();
	};

	const doesSessionExist = async () => {
		const post = await fetch('/auth', {
			method: 'post'
		});
		const res = await post.json();
	}

	const handleLogout = async () => {
		const post = await fetch('/signout', { method: 'post'});
		const res = await post.json();
	};

</script>

<svelte:head>
	<title>Login Form</title>
</svelte:head>
<div class="d-flex justify-content-center align-items-center flex-column" style="height: 70vh;">
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
	{/if}
</div>
