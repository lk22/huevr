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
 * Fetch the bridge information
 * @return {[type]} [description]
 */
export const fetchBridge = () => {
	return makeRequest('GET', 'https://www.meethue.com/api/nupnp')
}

/**
 * Authenticate to the bridge
 * @return {[type]} [description]
 */
export const authenticate = () => {
	return makeRequest('POST', 'http://' + storage.getItem('ipaddress') + '/api', {
		"devicetype" : "new_huevr"
	}).then((response) => {
		if(response.data[0].error.length < 1){
			console.log(response.data[0])
			window.localStorage.setItem('username', response.data.username)
		} else {
			alert(response.data[0].error.message) 
		}
		
	}).catch((err) => {
		if( err.message === 'link button not pressed' ) {
			alert (err.message)
		}
	})
}

/**
 * get every light bounded to the bridge
 * @return {[type]} [description]
 */
export const fetchLights = () => {
	const ip = storage.getItem('ipaddress')
	return makeRequest('GET', 'http://' + ip + '/api')
}