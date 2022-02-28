<script>
	import { variables } from '$lib/variables';
	import SuperTokens from 'supertokens-website';
	import { onMount } from 'svelte';

	let session2 = false;
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
		const url = `${variables.targetUrl}auth/signin`;
		const post = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const res = await post.json();
		if (res.status == 'OK') {
			session2 = true;
            return {
                status: res.status,
                headers: res.headers
            }
		}
	};

	async function doesSessionExist() {
		if (await SuperTokens.doesSessionExist()) {
			session2 = true;
		} else {
			// user has not logged in yet
			session2 = false;
		}
	}

	const handleLogout = async () => {
		//const res = await SuperTokens.signOut();
		const url = `${variables.targetUrl}auth/signout`;
		const post = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
		});
		const res = await post.json();
        console.log(res);
        if(res.status == 'OK'){
            session2 = false;
        }
	};

	onMount(() => {
		SuperTokens.init({
			apiDomain: `${variables.targetUrl}`,
			apiBasePath: '/auth'
		});
		doesSessionExist();
	});
</script>

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
	{#if session2}
		<h1>Logged in</h1>
		<div class="d-flex">
			<button on:click={handleLogout} class="btn btn-primary btn-lg">Logout</button>
		</div>
	{/if}
</div>
