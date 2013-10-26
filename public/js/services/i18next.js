define(['angular'], function(angular) {
	"use strict";
	return angular.module('ng.i18next', [])
		.factory('$t', function($rootScope) {
			return jQuery.t;
		});
});