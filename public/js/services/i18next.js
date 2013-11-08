define(['angular','i18n'], function(angular, i18n) {
	"use strict";
	return angular.module('ng.i18next', [])
		.factory('$t', function() {
			return i18n.t;
		});
});
