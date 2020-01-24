const { app, BrowserWindow } = require('electron');

let win = null;

function createWindow() {
  win = new BrowserWindow({
    backgroundColor: '#141414',
    fullscreen: false,
    height: 430,
    icon: 'assets/codex-icon.ico',
    maximizable: false,
    resizable: false,
    titleBarStyle: 'hidden',
    width: 389
  });
  win.loadURL('http://localhost:12820');

  win.on('closed', () => {
    win = null;
  });
}

app.dock.setIcon('assets/codex-icon.png');

app.on('ready', () => {
  createWindow();
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  app.quit();
});
