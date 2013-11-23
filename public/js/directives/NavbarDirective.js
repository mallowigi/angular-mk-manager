/**
 * Created by eliorb on 23/11/13.
 */
/* global define */
define([], function() {
	"use strict";

	/**
	 * Returns a navbar component
	 */
	return function NavbarDirective ($logger) {
		$logger.debug("Loading navbarDirective");
		return {
			restrict: 'E',
			templateUrl: 'views/header.html',
			replace: true
		};

	};
});
