/**
 * Created by Elior on 30/09/13.
 */

	// I put the manageRModule since it loads all that's required for the different module parts (controllers, services...)
define(['angularMocks', 'managerModule/managerModule'
	, 'managerModule/controllers/HeaderController'
], function(ngMocks, ManagerModule, HeaderController) {
	"use strict";
	// Mock User
	// Todo put in its own class
	var mockUser = {
		getUser: function() { return 'Mario'; },
		isAuthenticated: function() { return true;}
	}

	describe('Testing Controllers:', function() {
		"use strict";
		var $rootScope, $controller, headerCtrlScope, headerCtrl;

		// Load the controllers module
		beforeEach(module('mk.managerModule.controllers'));

		// Retrieve angular services
		beforeEach(inject(['$rootScope', '$controller', function(_$rootScope_, _$controller_) {
			$rootScope = _$rootScope_;
			$controller = _$controller_;
		}]));

		describe('Testing HeaderController: ', function() {

			beforeEach(inject(['$location', 'User', function($location, User) {
				headerCtrlScope = $rootScope.$new();
				headerCtrl = new HeaderController(headerCtrlScope, $location, User);
			}]));

			it('should be initialized', function() {
				expect(headerCtrl).toBeDefined();
			});

			it('should have a user model', function() {
				expect(headerCtrlScope.user).toBeDefined();
				expect(headerCtrlScope.user).toBeNull();
			});

			it('should have a isAuth property default to false', function() {
				expect(headerCtrlScope.isAuth).toBeDefined();
				expect(headerCtrlScope.isAuth).toBeFalsy();
			})
		})

		describe('Testing HeaderController integration:', function() {
			beforeEach(function() {
				headerCtrlScope = $rootScope.$new();
				headerCtrl = $controller('HeaderController', {
					$scope: headerCtrlScope
				});
			});

			it('should be defined', function() {
				expect(headerCtrl).toBeDefined();
			});

			it('should have the user null', function() {
				expect(headerCtrlScope.user).toBeNull();
			});

			it('should have user not authenticated', function() {
				expect(headerCtrlScope.isAuth).toBe(false);
			});

			describe('Creating a Mock User', function() {
				beforeEach(function() {
					headerCtrl = $controller('HeaderController', {
						$scope: headerCtrlScope,
						User: mockUser
					});
				});

				it('should be defined', function() {
					expect(headerCtrl).toBeDefined();
				});

				it('should have the user defined as Mario', function() {
					expect(headerCtrlScope.user).toBe('Mario');
				});

				it('should have the user authenticated', function() {
					expect(headerCtrlScope.isAuth).toBe(true);
				})
			})
		});

	});
})
