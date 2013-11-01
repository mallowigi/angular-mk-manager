/**
 * Created by Elior on 30/10/13.
 */
define(['angularMocks', 'managerModule/managerModule', 'managerModule/services/Roster'], function(ngMocks, ManagerModule, Roster) {
	"use strict";
	var roster;

	describe('Testing services', function() {

		describe('Testing the Roster service:', function() {
			beforeEach(function() {
				roster = new Roster();
			});

			it('should be defined', function() {
				expect(roster).toBeDefined();
			});

			it('should be a map object', function() {
				expect(_.isPlainObject(roster)).toBeTruthy();
			})

			it('should return a list of 10 characters', function() {
				expect(_.keys(roster).length).toBe(10);
			});

			it('should have a character "Wario"', function() {
				expect(roster['Wario']).toBeDefined();
				expect(roster['Wario'].name).toBe('Wario');
				expect(roster['Wario'].weight).toBe('heavy');
				expect(roster['Wario'].speed).toBe('fast');
				expect(roster['Wario'].accel).toBe('slow');
			});
		});

		describe('Testing integration with Angular:', function() {

			beforeEach(module('mk.managerModule.services'));

			beforeEach(inject(['Roster', function(_Roster_) {
				roster = _Roster_;
			}]))

			it('should have a Roster Service declared', function() {
				expect(roster).toBeDefined();
			});

		});
	});
})