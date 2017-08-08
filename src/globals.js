import Axios from 'axios'
const storage = window.localStorage

export const log = (logs = []) => {
	logs.forEach((log) => {
		console.log(log)
	})
}

export const getStorageItems = (items = []) => {
	items.forEach((item) => {
		console.log(window.localStorage.getItem(item))
	})
}

const makeRequest = (method, url, data = {}) => {
	let request
	switch (method) {
		case 'GET':
			request = Axios.get(url)
			break;

		case 'POST':
			request = Axios.post(url, data)
			break;

		case 'PUT':
			request = Axios.put(url, data)
			break;

		case 'DELETE':
			request = Axios.delete(url, data)
			break;
	}

	return request
}

export const fetchBridge = () => {
	return Axios.get('https://www.meethue.com/api/nupnp')
}

