define(['angular'], function(angular) {
	"use strict";
	return angular.module('ng.i18next', [])
		.factory('$t', function() {
			return jQuery.t;
		});
});