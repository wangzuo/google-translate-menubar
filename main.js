var menubar = require('menubar');
var ipc = require('ipc');

// create menubar
var mb = menubar({
	dir: __dirname,
	width: 380,
	height: 660,
	icon: __dirname + '/icons/icon22.png'
});

// handle quit signal
ipc.on('quit', function() {
	mb.app.quit();
});
