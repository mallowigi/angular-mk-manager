/**
 * Created by eliorb on 22/11/13.
 */
/* global define */
define(['require'
	, 'angular'
	, 'log'
	, './TournamentsController'
], function(require, angular, log, TournamentsController) {
	"use strict";
	log.debug("Loading the Tournaments Module Controllers");

	return angular.module('mk.tournamentsModule.controllers', ['mk.tournamentsModule.services'])
		.controller('TournamentsController', ['$scope', '$logger', '$routeParams', '$location', 'User', 'Tournament', TournamentsController])
		;
});
