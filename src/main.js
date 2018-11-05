const electron = require('electron');
const ipc = electron.ipcMain
const countdown = require('./countdown');

const app = electron.app
const BrowserWindow = electron.BrowserWindow

const windows = [];

app.on('ready', _ => {
    let win = new BrowserWindow({
        height: 400,
        width: 400
    });
    
    win.loadURL(`file://${__dirname}/countdown.html`);

    win.on('closed', _ => {
        console.log('closed');
        win = null;
    });

    windows.push(win);
});

ipc.on('countdown-start', _ => {
    countdown(count => {
        mainWindow.webContents.send('countdown', count);
    });
})