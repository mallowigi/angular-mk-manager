/**
 * Created by eliorb on 22/11/13.
 */
/* global define */
define(['require'
	, 'angular'
	, 'log'
	, './Tournament'

], function(require, angular, log, Tournament) {
	"use strict";
	log.debug('Loading Tournaments Module Services');

	return angular.module('mk.tournamentsModule.services', [])
		.factory('Tournament', ['$logger', '$ngResource', Tournament])
	;

});
