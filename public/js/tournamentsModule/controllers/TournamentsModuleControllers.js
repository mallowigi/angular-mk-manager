/**
 * Created by eliorb on 22/11/13.
 */
/* global define */
define(['require'
	, 'angular'
	, 'log'
	, './TournamentsController'
	, './TournamentController'
], function(require, angular, log, TournamentsController, TournamentController) {
	"use strict";
	log.debug("Loading the Tournaments Module Controllers");

	return angular.module('mk.tournamentsModule.controllers', ['mk.tournamentsModule.services'])
		.controller('TournamentsController', ['$scope', '$logger', '$routeParams', '$location', 'User', 'Tournament', TournamentsController])
		.controller('TournamentController', ['$scope', '$logger', '$routeParams', '$location', 'User', 'Tournament', TournamentController])
		;
});
