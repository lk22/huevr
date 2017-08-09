import Axios from 'axios'
const storage = window.localStorage

/**
 * wrapper around console.log
 * @param  {Array}  logs [description]
 * @return {[type]}      [description]
 */
export const log = (logs = []) => {
	logs.forEach((log) => {
		console.log(log)
	})
}

/**
 * get every item in local storage
 * @param  {Array}  items [description]
 * @return {[type]}       [description]
 */
export const getStorageItems = (items = []) => {
	items.forEach((item) => {
		window.localStorage.getItem(item)
	})
}


/**
 * Make custom request
 * @param  {[type]} method [description]
 * @param  {[type]} url    [description]
 * @param  {Object} data   [description]
 * @return {[type]}        [description]
 */
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

/**
 * Authenticate to the bridge
 * @return {[type]} [description]
 */
export const authenticate = () => {
	return makeRequest('POST', 'http://' + storage.getItem('ipaddress') + '/api', {
		"devicetype" : "new_huevr"
	}).then((response) => {
		console.log(response)
		const username = response.data[0].success.username
		storage.setItem('username', username)
		console.log(storage.getItem('username'))
	}).catch((err) => {
		if( err.description === 'link button not pressed' ) {
			alert (err.description)
		}
	})
}

/**
 * Fetch the bridge information
 * @return {[type]} [description]
 */
export const fetchBridge = () => {
	return makeRequest('GET', 'https://www.meethue.com/api/nupnp')
}

/**
 * get every light bounded to the bridge
 * @return {[type]} [description]
 */
export const fetchLights = () => {
	const ip = storage.getItem('ipaddress')
	const username = storage.getItem('username')
	return makeRequest('GET', 'http://' + ip + '/api/' + username + '/lights')
}

export const fetchLight = (light) => {
	const ip = storage.getItem('ipaddress')
	const username = storage.getItem('username')
	return makeRequest('GET', 'http://' + ip + '/api/' + username + '/lights/' + light)
}

export const updateBrightness = (brightness, light) => {
	const ip = storage.getItem('ipaddress')
	const username = storage.getItem('username')
	return makeRequest('PUT', 'http://' + ip + '/api/' + username + '/lights/state', {
		"bri": brightness
	})
}