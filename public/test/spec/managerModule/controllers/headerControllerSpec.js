/**
 * Created by Elior on 30/09/13.
 */

	// I put the manageRModule since it loads all that's required for the different module parts (controllers, services...)
define(['require'
	, 'managerModule/controllers/HeaderController'
	, 'angularMocks'
	, 'managerModule/managerModule'
	, 'mocks/UserMock'
], function(require, HeaderController) {
	"use strict";
	var $rootScope, $controller, headerCtrlScope, headerCtrl,
		locationMock = jasmine.createSpy('$location'),
		loggerMock = jasmine.createSpyObj('$logger', ['debug', 'info', 'error', 'warn']),
		userMock = require('mocks/UserMock');

	describe('HeaderController Tests:', function() {

		describe('Testing HeaderController function:', function() {
			// Mocks
			var headerCtrlScope = {};

			beforeEach(function() {
				headerCtrl = new HeaderController(headerCtrlScope, locationMock, loggerMock, userMock);
			});

			it('should be initialized', function() {
				expect(headerCtrl).toBeDefined();
			});

			it('should have a User attached', function() {
				expect(headerCtrlScope.user).toBeDefined();
			});

			it('should have the user defined as Mario', function() {
				expect(headerCtrlScope.user).toBe('Mario');
			});

			it('should have the user authenticated', function() {
				expect(headerCtrlScope.isAuth).toBe(true);
			});

		});

		describe('Testing HeaderController Angular integration:', function() {

			// Load the controllers module
			beforeEach(module('mk.managerModule'));

			// Retrieve angular services
			beforeEach(inject(['$rootScope', '$controller', function(_$rootScope_, _$controller_) {
				$rootScope = _$rootScope_;
				$controller = _$controller_;

				headerCtrlScope = $rootScope.$new();
				headerCtrl = $controller('HeaderController', {
					$scope: headerCtrlScope
				});

			}]));

			it('should be defined', function() {
				expect(headerCtrl).toBeDefined();
			});

			it('should have the user null', function() {
				expect(headerCtrlScope.user).toBeNull();
			});

			it('should have user not authenticated', function() {
				expect(headerCtrlScope.isAuth).toBe(false);
			});

		});
	});

});