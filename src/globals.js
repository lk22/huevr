import Axios from 'axios'
// const {remote} = require('electron')

// const dialog = remote.require('fs')

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
		return window.localStorage.getItem(item)
	})
}

/**
 * clear the storage
 * @return {[type]} [description]
 */
export const clearStorage = () => {
	return window.localStorage.clear()
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
export const authorize = () => {
	log(["ip address " + storage.getItem('ipaddress')])

	// make post request to the bridge api
	return makeRequest('POST', 'http://' + storage.getItem('ipaddress') + '/api', {

		// with following authorization parameters
		// "devicetype"
		// name of the application => new_huevr
		"devicetype" : "new_huevr"
	}).then((response) => {

		// log the response
		console.log(response)

		// if the username is returned
		if( response.data[0].success.username ) {

			// save the username 
			const username = response.data[0].success.username

			// store the username to store
			storage.setItem('username', username)

			// log the username 
			log([storage.getItem('username')])
		} 
	}).catch((err) => {

		// if the error appears 
		if( err.description === 'link button not pressed' ) {

			// alert the user with the error
			alert (err.description)
		}
	})
}

/**
 * Fetch the bridge information
 * @return {[type]} [description]
 */
export const fetchBridge = () => {

	// create GET request to www.meethue.com/api/nupnp to fetch information about bridge
	return makeRequest('GET', 'https://www.meethue.com/api/nupnp')
}

export const fetchBridgeConfig = () => {

	// get the ip address
	const ip = storage.getItem('ipaddress')

	// get the authorized username
	const username = storage.getItem('username')
	
	// create GET request to http://<ipaddress>/api/<username>/config
	return makeRequest('GET', 'http://' + ip + '/api/' + username + '/config')

}

/**
 * get every light bounded to the bridge
 * @return {[type]} [description]
 */
export const fetchLights = () => {

	// get the ip address of the bridge
	const ip = storage.getItem('ipaddress')

	// get the username of the bridge
	const username = storage.getItem('username')

	// make call to lights home API
	return makeRequest('GET', 'http://' + ip + '/api/' + username + '/lights')
}

/**
 * fetch single light bulb 
 * @param  {[type]} light [description]
 * @return {[type]}       [description]
 */
export const fetchLight = (light) => {

	// get the ip address of the bridge
	const ip = storage.getItem('ipaddress')

	// get the username of the authorized user
	const username = storage.getItem('username')

	// make call to lights api to fetch a single light bulb 
	return makeRequest('GET', 'http://' + ip + '/api/' + username + '/lights/' + light)
}

/**
 * updating brightness state on a lightbulb
 * @param  {[type]} light [description]
 * @param  {[type]} bri   [description]
 * @return {[type]}       [description]
 */
export const updateBrightness = (light, bri) => {
	return makeRequest('PUT', 'http://' + storage.getItem('ipaddress') + '/api/' + storage.getItem('username') + '/lights/' + light + '/state', {
		"bri": bri
	})
}

/**
 * updating contrast state on a lightbulb
 * @param  {[type]} light [description]
 * @param  {[type]} ct    [description]
 * @return {[type]}       [description]
 */
export const updateContrast = (light, ct) => {
	return makeRequest('PUT', 'http://' + storage.getItem('ipaddress') + '/api/' + storage.getItem('username') + '/lights/' + light + '/state', {
		"ct": ct
	})
}

/**
 * updating hue state on a lightbulb
 * @param  {[type]} light [description]
 * @param  {[type]} hue   [description]
 * @return {[type]}       [description]
 */
export const updateHue = (light, hue) => {
	return makeRequest('PUT', 'http://' + storage.getItem('ipaddress') + '/api/' + storage.getItem('username') + '/lights/' + light + '/state', {
		"hue": hue
	})
}

/**
 * [description]
 * @param  {[type]} light      [description]
 * @param  {[type]} brightness [description]
 * @return {[type]}            [description]
 */
export const updateLight = (light, state, value) => {

	switch (state) {
		case "brightness":
			return updateBrightness(light, value)
			break;

		case "brightness":
			return updateContrast(light, value)
			break;

		case "brightness":
			return updateHue(light, value)
			break;
	}
}