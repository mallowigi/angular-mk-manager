define(['domReady', 'angular', 'app', 'config'], function(domReady, angular, App) {
	"use strict";

	domReady(function() {
		//Fixing facebook bug with redirect
		if (window.location.hash === "#_=_") {
			window.location.hash = "";
		}

		// Adding ng-app
		angular.element('body').attr('ng-app', App.name);
		angular.bootstrap(document, [App.name]);
	});
});
