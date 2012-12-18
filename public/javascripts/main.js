//http://github.com/mcteapot/pertlit
// main.js
// ----------------
//load the config first
require(['./config'], 
	//load the dom and exicute 
	function (config) {
		require(['domReady','app/app'], 
			//once the dom is ready, execuite the app
			function  (domReady, app) {
				domReady(function  (argument) {
					// app launch
					console.log('DOM READY'); //DEBUG
					app();
			});
	});	
});