const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let window

// require('electron-reload')(__dirname, {
//   electron: require('electron-prebuilt')
// });

const createWindow = () => {
	window = new BrowserWindow({
		height: 800,
		width:1280
	})

	window.loadURL('http://localhost:3999')

	if (process.env.NODE_ENV === 'development') {
	    const electronHot = require('electron-hot-loader');
	    electronHot.install();
	    electronHot.watchJsx(['src/main.jsx']);
	    electronHot.watchCss(['src/**/*.css']);
	}
}

app.on('ready', createWindow)