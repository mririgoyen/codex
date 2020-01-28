import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import { format as formatUrl } from 'url';

const isDevelopment = process.env.NODE_ENV !== 'production';
const minHeight = 300;
const minWidth = 340;

let mainWindow;

function createMainWindow() {
  const windowConfig = {
    backgroundColor: '#141414',
    fullscreen: false,
    height: minHeight,
    icon: 'build/icon.ico',
    maximizable: false,
    minHeight,
    minWidth,
    resizable: false,
    titleBarStyle: 'hidden',
    useContentSize: true,
    webPreferences: {
      nodeIntegration: true
    },
    width: minWidth
  };

  const window = new BrowserWindow(windowConfig);
  window.setMenuBarVisibility(false);

  if (isDevelopment) {
    window.webContents.openDevTools({ mode: 'detach' });
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

  ipcMain.on('resize-window', (e, arg = {}) => {
    const { height = minHeight, width = minWidth } = arg;
    window.setContentSize(Math.max(width, minWidth), Math.max(height, minHeight), true);
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