import { writable } from "svelte/store";

export const listLogs = writable([]);

export async function getLog(params) {
	try {
		const res = await fetch(`http://localhost:4000/logs/${params}`);
        const data = await fetch.json();
		console.log(params);
        return listLogs.push(data);
	} catch (error) {
		console.log('500:', error);
	}
}

