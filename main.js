const { ipcMain } = require('electron');
const menubar = require('./menubar');

const mb = menubar({
  dir: __dirname,
  width: 380,
  height: 660,
  icon: __dirname + '/icons/icon22.png'
});

ipcMain.on('quit', function() {
  mb.app.quit();
});
