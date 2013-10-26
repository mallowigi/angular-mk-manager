define(['domReady', 'angular', 'app', 'config'], function(domReady, angular, App) {
	"use strict";

	// hey Angular, we're bootstrapping manually!
//	window.name = "NG_DEFER_BOOTSTRAP!";

	domReady(function() {
		console.log('Bootstrapping Angular...');
		//Fixing facebook bug with redirect
		if (window.location.hash == "#_=_") {
			window.location.hash = "";
		}

		// Adding ng-app
		angular.element('body').attr('ng-app', App.name);
		angular.bootstrap(document, [App.name]);
	});
})