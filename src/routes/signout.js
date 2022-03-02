import { variables } from '$lib/variables';
export async function post(event) {
	const url = `${variables.targetUrl}signout`;
	const res = await fetch(url, {
		method: 'post',
		headers: {
			cookie: event.request.headers.get('cookie'),
			rid: 'session'
		}
	});
	return res;
}
