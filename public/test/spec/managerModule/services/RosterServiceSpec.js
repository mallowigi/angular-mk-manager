/**
 * Created by Elior on 30/10/13.
 */
define(['angularMocks', 'managerModule/managerModule'], function(ngMocks, ManagerModule) {
	"use strict";
	var roster;

	describe('Testing Services', function() {

		beforeEach(module('mk.managerModule.services'));

		beforeEach(inject(['Roster', function(Roster){
			roster = Roster;
		}]))

		it('should have a Roster Service declared', function() {
			expect(roster).toBeDefined();
		});

		it('should return a list of 10 characters', function() {

			expect(_.keys(roster).length).toBe(10);
		});

		it('should have a character "Wario"', function(){
			expect(roster['Wario']).toBeDefined();
			expect(roster['Wario'].name).toBe('Wario');
			expect(roster['Wario'].weight).toBe('heavy');
			expect(roster['Wario'].speed).toBe('fast');
			expect(roster['Wario'].accel).toBe('slow');
		});
	})
})