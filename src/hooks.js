import { parse } from 'cookie';

export const handle = async ({ event, resolve }) => {
	const cookies = parse(event.request.headers.cookie || '');
	event.locals.user = cookies;
	const response = await resolve(event);

	return response;
};
