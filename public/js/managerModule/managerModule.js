/**
 * Created by Elior on 24/10/13.
 */
define(['require', 'angular'
	, 'log'
	, 'services/logger'
	, './controllers/ManagerModuleControllers'
	, './services/ManagerModuleServices'
], function(require, angular, log) {
	"use strict";
	var module;
	log.debug('Loading Manager module...');

	// Registers module a la symfony.
	// Load also outside modules such as ngLogger to be testable standalone
	module = angular.module('mk.managerModule', [
		'ngLogger',
		'mk.managerModule.services',
		'mk.managerModule.controllers'
	]);

	return module;
});
