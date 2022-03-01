import { variables } from '$lib/variables';
export async function post({request}){
    const url = `${variables.targetUrl}auth/signin`;
    const body = await request.body;
    const res = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    });
    
    //const res = await fetch(url,event.request.body)
    return res;
}