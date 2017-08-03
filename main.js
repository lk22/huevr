const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let window

const createWindow = () => {
	window = new BrowserWindow({
		height: 800,
		width:1280
	})

	window.loadURL('http://localhost:3999')
}

app.on('ready', createWindow)