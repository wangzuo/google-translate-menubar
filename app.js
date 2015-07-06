var ipc = require('ipc');

function quit() {
  ipc.send('quit');
}

var btn = document.getElementById('quit-btn');
btn.addEventListener('click', quit, false);
