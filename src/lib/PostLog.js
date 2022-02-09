export async function postLog(data) {
	try {
        const postData = JSON.stringify(data)
		const res = await fetch('http://localhost:4000/logs', {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
			body: postData
		});
        console.log(postData)
		const post = await res.json();
        return post
	} catch (error) {
		console.log('500:', err);
	}
}