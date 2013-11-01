/**
 * Created by Elior on 30/10/13.
 */
define(['require'
	, 'managerModule/controllers/RosterController'
	, 'managerModule/managerModule'
	, 'angularMocks'
	, 'mocks/UserMock'
], function(require, RosterController) {
	"use strict";
	var $rootScope, $controller, rosterCtrlScope, rosterCtrl;
	describe('Testing controllers', function() {

		beforeEach(module('mk.managerModule.controllers'));

		beforeEach(inject(['$rootScope', '$controller', function(_$rootScope_, _$controller_) {
			$rootScope = _$rootScope_;
			$controller = _$controller_;
		}]))

		describe('Testing RosterController: ', function() {
			var routeParamsMock, userMock, rosterMock;

			beforeEach(function() {
				routeParamsMock = jasmine.createSpy('$routeParams');
				userMock = require('mocks/UserMock');

				rosterCtrlScope = $rootScope.$new();

				rosterCtrl = new RosterController(rosterCtrlScope);

			});

			it('should be defined', function() {
				expect(rosterCtrl).toBeDefined();
			});

		})

		describe('Testing RosterController integration:', function() {
			beforeEach(function() {
				rosterCtrlScope = $rootScope.$new();
				rosterCtrl = $controller('RosterController', {
					$scope: rosterCtrlScope
				});
			});

			it('should be defined', function() {
				expect(rosterCtrl).toBeDefined();
			});

			it('should have a reference to the User', function() {
				expect(rosterCtrlScope.user).toBeDefined();
			});

			it('should have a reference to the Roster', function() {
				expect(rosterCtrlScope.characters).toBeDefined();
				expect(_.isPlainObject(rosterCtrlScope.characters)).toBeTruthy();
			});

		});

	})
})