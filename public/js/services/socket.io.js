/* global io */
define(['angular'], function(angular) {
	"use strict";
	// io should be loaded as part of node_modules?
	return angular.module('ngSocket', [])
		.factory('$socket', function($rootScope) {
			var socket = io.connect('/api'); //namespace
			return {
				on: function(eventName, callback) {
					socket.on(eventName, function() {
						var args = arguments;
						$rootScope.$apply(function() {
							callback.apply(socket, args);
						});
					});
				},
				emit: function(eventName, data, callback) {
					socket.emit(eventName, data, function() {
						var args = arguments;
						$rootScope.$apply(function() {
							if (callback) {
								callback.apply(socket, args);
							}
						});
					});
				}
			};
		});
});