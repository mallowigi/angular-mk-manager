/**
 * Created by Elior on 24/10/13.
 */
define(['require', 'angular'
	, './controllers/ManagerModuleControllers'
	, './services/ManagerModuleServices'
], function(require, angular, ControllersModule, ServicesModule) {
	"use strict";
	console.log('Loading Manager module...');

	// Registers module a la symfony
	return angular.module('mk.managerModule', [
		'mk.managerModule.services',
		'mk.managerModule.controllers'
	]);
});