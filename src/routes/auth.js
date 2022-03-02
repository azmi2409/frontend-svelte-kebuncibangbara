import { variables } from '$lib/variables';
import { parse } from 'cookie';
export async function post(event) {
	const url = `${variables.targetUrl}session/refresh`;
	const cookies = parse(event.request.headers.get('cookie') || '')
	const res = await fetch(url, {
		method: 'post',
		headers: {
			cookie: `sIdRefreshToken=${cookies.sIdRefreshToken}; sRefreshToken=${cookies.sRefreshToken}`,
			rid: 'session'
		}
	});
	return {
		status: res.status,
		headers: res.headers
	};
}
