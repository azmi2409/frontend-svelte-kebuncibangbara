import { parse } from 'cookie';

export const handle = async ({ event, resolve }) => {
	const cookies = parse(event.request.headers.get("cookie") || '');
	event.locals.user = cookies
	event.locals.cookie = event.request.headers.get("cookie")
    if(cookies.sRefreshToken){
        event.locals.refresh = cookies.sRefreshToken
    }
    if(cookies.sAccessToken){
        event.locals.authenticated = true;
    }else {event.locals.authenticated = false}

	const response = await resolve(event);

	return response;
};

export const getSession = async (event) => {
    return event.locals.user
        ? {
                user: {
                    authenticated: event.locals.authenticated,
                    cookie: event.locals.user,
					oriCookie: event.locals.cookie,
                    refresh: event.locals.refresh
                }
          }
        : {};
};