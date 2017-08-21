import Axios from 'axios'
const electron = require('electron')
const {dialog} = require('electron').remote
const Notify = require('node-notifier')

// local storage wrapper
export const Storage = window.localStorage
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

		export const clearStorageItems = (items = []) => {
			items.forEach((item) => {
				return window.localStorage.removeItem(item)
			})
		}

	/**
	 * show notifications on specific circumstances
	 * @param  {[type]} title [description]
	 * @param  {Object} body  [description]
	 * @return {[type]}       [description]
	 */

		export const notifyWith = (title, body = {}) => {

			// get new notification instance
			const notification = new Notification(title, body)

			// if the notification API is supported
			if(notification.isSupported) {

				// return the specified notification instance
				return notification
			}
		}

	/**
	 * Show electron's dialog
	 * @param  {[type]} title [description]
	 * @param  {[type]} body  [description]
	 * @return {[type]}       [description]
	 */

		export const showDialog = (title, body) => {
			dialog.showErrorBox(title, body)
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

				// if the username is returned
				if( response.data[0].success ) {

					// save the username
					const username = response.data[0].success.username

					// store the username to store
					storage.setItem('username', username)

					// log the username
					log([storage.getItem('username')])

					return notifyWith('Authorization Succeeded', {
						body: 'You authorized to your bridge with success username: ' + storage.getItem('username')
					})

					// // reload page
					// window.location.reload()
				} else {

					// if the username is not found in response

					// notify authorization error
					return notifyWith('Auth error occured', {
						body: 'could not get access to your bridge, "click the link button" and try again'
					})

				}

			}).catch((err) => {


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

	/**
	 * Get Bridge configurations
	 */

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
			return makeRequest('PUT', 'http://' + storage.getItem('ipaddress') + '/api/' + storage.getItem('username') + '/lights/' + light + '/state', JSON.stringify({
				"bri": JSON.parse(bri)
			}))
		}

	/**
	 * updating contrast state on a lightbulb
	 * @param  {[type]} light [description]
	 * @param  {[type]} ct    [description]
	 * @return {[type]}       [description]
	 */

		export const updateContrast = (light, ct) => {
			return makeRequest('PUT', 'http://' + storage.getItem('ipaddress') + '/api/' + storage.getItem('username') + '/lights/' + light + '/state', JSON.stringify({
				"ct": JSON.parse(ct)
			}))
		}

	/**
	 * updating hue state on a lightbulb
	 * @param  {[type]} light [description]
	 * @param  {[type]} hue   [description]
	 * @return {[type]}       [description]
	 */

		export const updateHue = (light, hue) => {
			return makeRequest('PUT', 'http://' + storage.getItem('ipaddress') + '/api/' + storage.getItem('username') + '/lights/' + light + '/state', JSON.stringify({
				"hue": JSON.parse(hue)
			}))
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

				case "contrast":
					return updateContrast(light, value)
					break;

				case "hue":
					return updateHue(light, value)
					break;
			}
		}

		export const searchForNewLights = () => {
			return makeRequest('')
		}