import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import { format as formatUrl } from 'url';

const isDevelopment = process.env.NODE_ENV !== 'production';

let mainWindow;

function createMainWindow() {
  const windowConfig = {
    backgroundColor: '#141414',
    fullscreen: false,
    height: 430,
    icon: 'build/icon.ico',
    maximizable: false,
    resizable: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true
    },
    width: 389
  };

  if (isDevelopment) {
    windowConfig.resizable = true;
  }

  const window = new BrowserWindow(windowConfig);

  if (isDevelopment) {
    window.webContents.openDevTools();
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
  }

  if (!isDevelopment) {
    window.loadURL(formatUrl({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    }));
  }

  window.on('closed', () => {
    mainWindow = null;
  });

  window.webContents.on('devtools-opened', () => {
    window.focus();
    setImmediate(() => {
      window.focus();
    });
  });

  return window;
}

app.on('window-all-closed', () => {
  // On macOS, apps typically stay open until the user quits from the menu
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS, recreate the window if it no longer exists
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});

app.on('ready', () => {
  mainWindow = createMainWindow();
});

if (module.hot) {
  module.hot.accept();
}