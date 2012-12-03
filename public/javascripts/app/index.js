define([
	'jquery',
	"backbone", 
	'app/routers/desktoprouter'
	],function ($, Backbone, DesktopRouter) {
	
	var appRouter;
	function app () {
		function loadSite () {
			console.log("APP LOADED"); //DEBUG
		}
		function initialize () {
			appRouter = new DesktopRouter();
		}
		$.when(loadSite(), initialize()).then(function () {
			console.log("APP RUNNING"); //DEBUG
			return appRouter;
		})
		//initialize();

	}

	return app;

});