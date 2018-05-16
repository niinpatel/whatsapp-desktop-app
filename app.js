const electron = require('electron');
const { app, BrowserWindow } = electron;

app.on('ready', () => {
    window = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: false
        }
    });
    window.loadURL('https://web.whatsapp.com');
});
