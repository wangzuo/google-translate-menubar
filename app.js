const { ipcRenderer } = require('electron');

function quit() {
  ipcRenderer.send('quit');
}

var btn = document.getElementById('quit-btn');
btn.addEventListener('click', quit, false);
