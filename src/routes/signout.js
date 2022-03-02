import { variables } from '$lib/variables';
import {parse} from 'cookie';
export async function post(event) {
	const url = `${variables.targetUrl}auth/signout`;
    const cookies = parse(event.request.headers.get("cookie") || '');
	const res = await fetch(url, {
		method: 'post',
		cookie: event.request.headers.get("cookie")
	});
	return res;
}
