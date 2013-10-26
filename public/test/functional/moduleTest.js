describe('Testing modules', function() {
	"use strict";
	var appModule = angular.module('mk');
	it('should be registered', function() {
		expect(appModule).not.toBeNull();
	});

	describe('Dependencies', function() {

		var deps;
		beforeEach(function() {
			deps = appModule.requires;
		});

		it('should have the services module as a dependency', function() {
			// What to test
			expect(deps.indexOf('mk.services') >= 0).toEqual(true);
		});

		it('should have the controllers module as a dependency', function() {
			expect(deps.indexOf('mk.controllers') >= 0).toEqual(true);
		});

	});

});