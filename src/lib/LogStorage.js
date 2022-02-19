import { writable } from "svelte/store";

export const listLogs = writable([]);

export async function getLog(params) {
	try {
		const res = await fetch(`https://cbr-node.herokuapp.com/logs/${params}`);
        const data = await fetch.json();
        return listLogs.push(data);
	} catch (error) {
		console.log('500:', error);
	}
}

