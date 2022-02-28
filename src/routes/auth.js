export async function post({request}) {
    const data = await request;
    return {status: 500,error: data};
}