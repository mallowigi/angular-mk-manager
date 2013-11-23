/**
 * Created by eliorb on 22/11/13.
 */
define(['require', 'angular'
	, 'log'
	, 'services/logger'
	, './controllers/TournamentsModuleControllers'
	, './services/TournamentsModuleServices'
], function(require, angular, log) {
	"use strict";
	var module;
	log.debug('Loading Tournaments module...');

	// Registers module a la symfony.
	// Load also outside modules such as ngLogger to be testable standalone
	module = angular.module('mk.tournamentsModule', [
		'ngLogger',
		'mk.tournamentsModule.services',
		'mk.managerModule.controllers'
	]);

	return module;
});
