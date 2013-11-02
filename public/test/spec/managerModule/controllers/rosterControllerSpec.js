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
	var $rootScope, $controller, rosterCtrlScope, rosterCtrl,
		$routeParams;

	describe('RosterController Tests: ', function() {

		describe('Testing RosterController function: ', function() {
			// Mocks
			var routeParamsMock = jasmine.createSpy('$routeParams'),
				loggerMock = jasmine.createSpyObj('$logger', ['debug', 'info', 'error', 'warn']),
				userMock = require('mocks/UserMock'),
				rosterMock = {
					'Mario': {name: 'Mario'},
					'Wario': {name: 'Wario'}
				};

			beforeEach(function() {
				rosterCtrlScope = {};
				rosterCtrl = new RosterController(rosterCtrlScope, routeParamsMock, loggerMock, rosterMock, userMock);
			});

			it('should be defined', function() {
				expect(rosterCtrl).toBeDefined();
			});

			it('should have a reference to the User "Mario"', function() {
				expect(rosterCtrlScope.user.getUser()).toEqual('Mario');
			});

			it('should have the user authenticated', function() {
				expect(rosterCtrlScope.user.isAuthenticated()).toBe(true);
			});

			it('should have a roster model attached', function() {
				expect(rosterCtrlScope.characters).toBeDefined();
			});

			it('should have a roster with at least two characters', function() {
				expect(_.keys(rosterCtrlScope.characters).length).toBeGreaterThan(1);
			});

			it('should have a default selected character', function() {
				expect(rosterCtrlScope.selected).toBeDefined();
			});

			it('should have "Mario" as the default selected character', function() {
				var selected = rosterCtrlScope.selected;
				expect(selected.name).toEqual('Mario');
			});
		});

		describe('Testing RosterController Angular integration:', function() {

			beforeEach(module('mk.managerModule'));

			beforeEach(inject(['$rootScope', '$controller', function(_$rootScope_, _$controller_) {
				$rootScope = _$rootScope_;
				$controller = _$controller_;
				$routeParams = {selected: 'Luigi'};

				rosterCtrlScope = $rootScope.$new();
				rosterCtrl = $controller('RosterController', {
					$scope: rosterCtrlScope,
					$routeParams: $routeParams
				});
			}]));

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

			it('should have a roster of at least 8 characters', function() {
				expect(_.keys(rosterCtrlScope.characters).length).toBeGreaterThan(8);
			});

			it('should have a character of name "Wario"', function() {
				expect(rosterCtrlScope.characters.Wario).toBeDefined();
			});

			it('should have the selected character according to routeParams', function() {
				expect(rosterCtrlScope.selected.name).toBe('Luigi');
			});

		});

	});
});