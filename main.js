const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let window
let appIsQuitted = false

const createWindow = () => {
	window = new BrowserWindow({
		height: 800,
		width:1280
	})

	window.loadURL('http://localhost:3999')

	window.openDevTools()

	if(process.env.NODE_ENV === 'development') {
	 	const electronHot = require('electron-hot-loader');
	    electronHot.install();
	    electronHot.watchJsx(['src/main.jsx']);
	    electronHot.watchCss(['src/**/*.css']);
	}

	/*
	 * make action if the window is closed
	 * @param  {[type]} 'close' [description]
	 * @param  {[type]} (       [description]
	 * @return {[type]}         [description]
	 * */
	window.on('close', (e) => {
		if(!appIsQuitted) {
			window = null
		} else {
			e.preventDefault()
			window.hide()
		}
	})
}
app.on('ready', createWindow)