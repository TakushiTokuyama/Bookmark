const { app, Menu, Tray, BrowserWindow } = require('electron')

let tray = null

function createWindow () {
    const win = new BrowserWindow({
      width: 400,
      height: 300,
      webPreferences: {
        nodeIntegration: true,
      }
    })
  
    win.loadFile('view/index.html')

    // タスクバー表示画像を設定
    win.setIcon('img/bookmark.png')

    console.log('createWindow');

    win.webContents.openDevTools()
  }

function createTray(){
    // Trayを作成
    tray = new Tray('img/bookmark.png')

    const contextMenu = Menu.buildFromTemplate([
      { label: 'Item1', type: 'radio' },
      { label: 'Item2', type: 'radio' },
      { label: 'Item3', type: 'radio', checked: true },
      { label: 'Item4', type: 'radio' }
    ])

    tray.setToolTip('bookmark')
    tray.setContextMenu(contextMenu)

    console.log('createTray');
  }

function closeAllWindow () {
    console.log("closed");
}
  
// Electron初期化後の処理
app.whenReady().then(createWindow)

// アプリケーション初期化後の処理
app.on('ready', createTray);

// 全てのWindowをが閉じられた場合の処理
app.on('window-all-closed',closeAllWindow);