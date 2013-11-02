/**
 * Created by Elior on 01/11/13.
 */

define(['require'
	, 'managerModule/controllers/CharacterController'
	, 'managerModule/managerModule'
	, 'angularMocks'
	, 'mocks/RosterMock'
], function(require, CharacterController) {
	"use strict";
	var $rootScope, $controller, characterCtrlScope, characterCtrl,
		$routeParams,
		loggerMock = jasmine.createSpyObj('$logger', ['debug', 'info']),
		rosterMock = require('mocks/RosterMock');

	var routeParamsMocks = {
		'normal': { selected: 'Mario' },
		'nothing': {},
		'wrong': { selected: 'Ness' }
	};

	describe('CharacterController Tests: ', function() {

		describe('Testing CharacterController function: ', function() {

			describe('When there are no routeParams:', function() {

				beforeEach(function() {
					$routeParams = routeParamsMocks.nothing;
					characterCtrlScope = {};
					characterCtrl = new CharacterController(characterCtrlScope, $routeParams, loggerMock, rosterMock);
				});

				it('should give an error since there\'s no character in routeParams', function() {
					expect(characterCtrlScope.error).toBe('No character selected');
				});
			});

			describe('When there is an unknown character selected:', function() {
				beforeEach(function() {
					$routeParams = routeParamsMocks.wrong;
					characterCtrlScope = {};
					characterCtrl = new CharacterController(characterCtrlScope, $routeParams, loggerMock, rosterMock);
				});

				it('should give an error since there\'s no character in routeParams', function() {
					expect(characterCtrlScope.error).toContain('Cannot find the character');
				});

			});
		});

		describe('Testing CharacterController Angular integration:', function() {

			beforeEach(module('mk.managerModule'));

			beforeEach(inject(['$rootScope', '$controller', function(_$rootScope_, _$controller_) {
				$rootScope = _$rootScope_;
				$controller = _$controller_;
				$routeParams = {selected: 'Luigi'};

				characterCtrlScope = $rootScope.$new();
				characterCtrl = $controller('CharacterController', {
					$scope: characterCtrlScope,
					$routeParams: $routeParams,
					$logger: jasmine.createSpyObj('$logger', ['debug', 'info', 'error', 'warn']),
					Roster: rosterMock
				});
			}]));

			it('should be defined', function() {
				expect(characterCtrl).toBeDefined();
			});

		});

	});
});