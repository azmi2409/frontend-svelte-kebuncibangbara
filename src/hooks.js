import { parse } from 'cookie';

export const handle = async ({ event, resolve }) => {
	const cookies = parse(event.request.headers.get("cookie") || '');
	event.locals.user = cookies
	event.locals.cookie = event.request.headers.get("cookie")
	const response = await resolve(event);

	return response;
};

export const getSession = async (event) => {
    return event.locals.user
        ? {
                user: {
                    authenticated: true,
                    cookie: event.locals.user,
					oriCookie: event.locals.cookie
                }
          }
        : {};
};