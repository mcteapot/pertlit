// app.js
// ----------------
define(['jquery','underscore','backbone','app/routers/desktoprouter'],

	function ($, _, Backbone, DesktopRouter) {
	
		var appRouter;
		function app () {
			function loadSite () {
				console.log('APP LOADED'); //DEBUG
				setBackground();
			}
			function initialize () {
				//setBackground();
				appRouter = new DesktopRouter();
			}
			function setBackground () {

				var backgroundNum  = (_.random(0, 4)).toString();
				console.log('SET BACKGROUND bg' + backgroundNum); //DEBUG
				$('div.main-container').addClass('bg' + backgroundNum);
			}
			$.when(loadSite(), initialize()).then(function () {
				console.log('APP RUNNING'); //DEBUG
				return appRouter;
			})
			//initialize();

		}

		return app;

});