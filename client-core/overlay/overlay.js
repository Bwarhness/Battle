module.exports.startOverlay = socket => {
  const electron = require("electron");
  const path = require('path')
  const { readdirSync } = require('fs')
  const { app, BrowserWindow } = require("electron");
  const { ipcMain: overlay } = require("electron");

  function createWindow() {
    console.log("did it just start twice?")
    // Create the browser window.
    var screenElectron = electron.screen;
    var mainScreen = screenElectron.getPrimaryDisplay();
    var dimensions = mainScreen.size;
    let win = new BrowserWindow({
      width: dimensions.width,
      height: dimensions.height,
      fullscreen: true,
      frame: false,
      skipTaskbar: true,
      resizable: false,
      alwaysOnTop: true,
      transparent: true,

      webPreferences: {
        nodeIntegration: true
      }
    });
    win.setAlwaysOnTop(true, "screen-saver", 10);
    // and load the index.html of the app.
    win.loadURL(`file://${__dirname}/overlay.html`);
  }
  overlay.on("attack", (event, arg) => {
    console.log("got command from html, and now sending attack to server", arg); 
    socket.emit("attack", arg);
  });
  overlay.on("updateMenu", (event, arg) => {

    const getDirectories = source =>
    readdirSync(path.join(source), { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    console.log(getDirectories(process.cwd() + '/client-features'));
    console.log("Getting menu from overlay"); // 
    event.reply('updateAttacks', ['pølse', 'sheep-farm', 'burn', 'doom-mode', 'flash-bang', 'anders', 'key'])
  });
  app.whenReady().then(createWindow);
};
