import { variables } from '$lib/variables';
import { parse } from 'cookie';

export async function post({ request }) {
	const url = `${variables.targetUrl}auth/session/refresh`;
	const cookies = parse(request.headers.get('cookie') || '');
	const res = await fetch(url, {
		method: 'post',
		headers: {
			cookie: request.headers.get("cookie")
		}
	});
	const message = await res.json();
	console.log(res.status)
	return {
		status: res.status
	}
}
