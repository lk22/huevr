import Axios from 'axios'
const storage = window.localStorage
console.log(storage.getItem('switcher'))
export const log = (logs = []) => {
	logs.forEach((log) => {
		console.log(log)
	})
}

export const getStorageItems = (items = []) => {
	items.forEach((item) => {
		return window.localStorage.getItem(item)
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
	return makeRequest('GET', 'https://www.meethue.com/api/nupnp')
}

export const authenticate = () => {
	const ip = getStorageItems(['ipaddress'])
	return makeRequest('POST', 'http://' + window.localStorage.getItem('ipaddress') + '/api', {
		"devicetype" : "new_huevr"
	}).then((response) => {
		console.log(response)
		window.localStorage.setItem('username', response.data.username)
	})
}

export const fetchLights = () => {
	const ip = getStorageItems(['ipaddress'])
	return makeRequest('GET', 'http://' + ip + '/api')
}

