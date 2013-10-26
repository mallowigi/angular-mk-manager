/**
 * Created by Elior on 30/09/13.
 */

// I put the manageRModule since it loads all that's required for the different module parts (controllers, services...)
define(['angularMocks', 'managerModule/managerModule'], function(ngMocks, ManagerModule) {
	"use strict";
	describe('Testing Controllers:', function() {
		"use strict";

		beforeEach(module('mk.managerModule.controllers'));

		var $rootScope, $controller;

		beforeEach(inject(['$rootScope', '$controller', function(_$rootScope_, _$controller_) {
			$rootScope = _$rootScope_;
			$controller = _$controller_;
		}]));

		describe('HeaderCtrl:', function() {
			var headerCtrl, headerCtrlScope;
			beforeEach(function() {
				headerCtrlScope = $rootScope.$new();
				headerCtrl = $controller('HeaderController', {
					$scope: headerCtrlScope
				});
			});

			it('should be defined', function() {
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

		});

	});
})
