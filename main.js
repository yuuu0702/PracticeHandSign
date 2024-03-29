const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {

  // ブラウザ(Chromium)の起動, 初期画面のロード
  mainWindow = new BrowserWindow({width: 900, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/html/title.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
