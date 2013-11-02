/**
 * Created by Elior on 30/10/13.
 */
define(['managerModule/services/Roster'
	, 'angularMocks'
	, 'managerModule/managerModule'
], function(Roster) {
	"use strict";
	var roster;

	describe('RosterService Tests:', function() {
		var loggerMock = jasmine.createSpyObj('$logger', ['debug', 'info', 'warn', 'error']);

		describe('Testing the Roster service:', function() {
			beforeEach(function() {
				roster = new Roster(loggerMock);
			});

			it('should be defined', function() {
				expect(roster).toBeDefined();
			});

			it('should be a map object', function() {
				expect(_.isPlainObject(roster)).toBeTruthy();
			});

			it('should return a list of 10 characters', function() {
				expect(_.keys(roster).length).toBe(10);
			});

			it('should have a character "Wario"', function() {
				var wario = {
					name: 'Wario',
					weight: 'heavy',
					speed: 'fast',
					accel: 'slow'
				};
				expect(roster.Wario).toEqual(wario);
			});
		});

		describe('Testing integration with Angular:', function() {

			beforeEach(module('mk.managerModule'));

			beforeEach(inject(['Roster', function(Roster) {
				roster = Roster;
			}]));

			it('should have a Roster Service declared', function() {
				expect(roster).toBeDefined();
			});

			it('should have 10 characters in it', function(){
				expect(_.keys(roster).length).toEqual(10);
			});
		});
	});
});