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

	window.openDevTools()
	if(process.env.NODE_ENV === 'development') {
		 	const electronHot = require('electron-hot-loader');
		    electronHot.install();
		    electronHot.watchJsx(['src/main.jsx']);
		    electronHot.watchCss(['src/**/*.css']);
	}
}
console.log()

app.on('ready', createWindow)

app.on('will-quit', () => {
	window.localStorage.clear()
})