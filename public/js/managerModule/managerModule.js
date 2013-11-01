/**
 * Created by Elior on 24/10/13.
 */
define(['require', 'angular'
	, 'log'
	, './controllers/ManagerModuleControllers'
	, './services/ManagerModuleServices'
], function(require, angular, log) {
	"use strict";
	log.debug('Loading Manager module...');

	// Registers module a la symfony
	return angular.module('mk.managerModule', [
		'mk.managerModule.services',
		'mk.managerModule.controllers'
	]);
});