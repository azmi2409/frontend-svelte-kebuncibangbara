export async function postLog(data) {
	try {
        const postData = JSON.stringify(data)
		const res = await fetch('https://cbr-node.herokuapp.com/logs', {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
			body: postData
		});
		const post = await res.json();
        return post
	} catch (error) {
		console.log('500:', err);
	}
}