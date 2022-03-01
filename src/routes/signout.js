import { variables } from '$lib/variables';
export async function post({request}) {
    const url = `${variables.targetUrl}auth/signout`;
    const res = await fetch(url, {
        method: 'post',
        headers: request.headers
    });
    console.log(res)
    /*if(status.status == 'OK'){
        return {
            status : 200,
            headers: {
                'Set-Cookie': remove
            }
        }
    }*/
    
    //const res = await fetch(url,event.request.body)
    return res;
}