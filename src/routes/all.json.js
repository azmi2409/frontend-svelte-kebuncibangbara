const base = 'http://localhost:4000/trees';

export async function api(request, resource, data) {

    const res = await fetch(`${base}`, {
        method: 'GET'
    })

    return {
		status: res.status,
		body: await res.json()
	};
}