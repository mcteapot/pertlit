//http://github.com/mcteapot/pertlit
//load the config first
require(['./config'], 
	//load the dom and exicute 
	function (config) {
		require(['domReady',
				'app/main'
		], 
			//once the dom is ready, execuite the app
			function  (domReady, app) {
				domReady(function  (argument) {
					// app launch
					console.log("DOM READY");
					app();
			});
	});	
});