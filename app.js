const electron = require('electron');
const { shell, app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    window = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: false
        }
    });
    window.loadURL('https://web.whatsapp.com');

    window.on('closed', () => {
        window = null;
    });
});
