/**
 * Created by Elior on 02/11/13.
 */
define(['angular', 'log'], function(angular, log){
	"use strict";
	var module = angular.module('ngLogger', []);

	/**
	 * Registers the loglevel logger inside the module
	 */
	module.provider('$logger', function() {
		this.enableAll = function() {
			log.enableAll();
		};

		this.disableAll = function() {
			log.disableAll();
		};

		this.setLevel = function(level) {
			log.setLevel(level);
		};

		this.$get = function() {
			return {
				trace: log.trace,
				error: log.error,
				info: log.info,
				log: log.debug,
				debug: log.debug,
				warn: log.warn,
				critical: function(message) {
					log.error("!!!Critical error!!!");
					log.error(message);
				},
				errorWarn: function(error, warn) {
					log.error(error);
					log.warn(warn);
				}
			};
		};
	});

	/*
	 Configures the angular log level here
	 */
	module.config(['$loggerProvider', function($loggerProvider) {
		$loggerProvider.setLevel('trace');
	}]);

	return module;
});
