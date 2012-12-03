define([
	'jquery',
	"backbone", 
	'app/routers/desktoprouter'
	],function ($, Backbone, DesktopRouter) {
	
	var appRouter;
	function app() {
		console.log("APP LOADED");
		function loadSite() {
			console.log("SITE LOADED");
		}
		function initialize() {
			appRouter = new DesktopRouter();
		}
		initialize();
		return appRouter;
	}

	return app;

});