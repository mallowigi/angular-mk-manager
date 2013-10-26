describe('Testing Services', function() {
	"use strict";

	describe('Testing User', function() {
		"use strict";
		beforeEach(module('mk.services'));

		it('should have a User declared', inject(['User', function(User) {
			expect(User).toBeDefined();
		}]));

		describe('Testing getUserName', function() {
			var user;
			beforeEach(inject(['User', function(User) {
				user = User;
			}]));

			it('should have a getUserName function', function() {
				expect(user.getUser).toBeDefined();
			});

			it('should have a isAuthenticated function', function() {
				expect(user.isAuthenticated).toBeDefined();
			});

			describe('Tests before authentication', function() {
				it('should return undefined when no user is logged', function() {
					expect(user.getUser()).toBeNull();
				});

				it('should return false to isAuthenticated', function() {
					expect(user.isAuthenticated()).toBeFalsy();
				});
			});

			describe('Tests after authentication', function() {
				"use strict";
				var oldUser;

				beforeEach(inject(['$window', function($window) {
					// save a ref to the old buddy
					oldUser = $window.user;
					$window.user = 'Mike';
				}]));

				it('should return an username when logged', function() {
					expect(user.getUser()).toEqual('Mike');
				});

				it('should return authenticated when there is a user', function() {
					expect(user.isAuthenticated()).toBeTruthy();
				});

				afterEach(inject(['$window', function($window) {
					$window.user = oldUser;
				}]));

			});
		});

	});
});