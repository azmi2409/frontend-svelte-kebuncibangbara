import { variables } from '$lib/variables';

export async function post({ request }) {
	const url = `${variables.targetUrl}signin`;
	const body = await request.body;
	const res = await fetch(url, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: body
	});

	return {
		status: 200,
		headers: res.headers
	}
}
