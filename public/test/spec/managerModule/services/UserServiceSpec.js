define(['managerModule/services/User'
	, 'angularMocks'
	, 'managerModule/managerModule'
], function(User) {
	"use strict";
	var user;

	describe('UserService Tests:', function() {
		"use strict";

		describe('Testing User Service:', function() {
			var windowMock = {user: 'Mario'};

			beforeEach(function() {
				user = new User(windowMock);
			});

			it('should have a getUserName function', function() {
				expect(user.getUser).toBeDefined();
			});

			it('should have a isAuthenticated function', function() {
				expect(user.isAuthenticated).toBeDefined();
			});

			it('getUserName should return the window user property', function() {
				expect(user.getUser()).toEqual(windowMock.user);
			});

			it('isAuthenticated should return true when window.name is defined', function(){
				expect(user.isAuthenticated()).toBe(true);
			});
		});

		describe('Testing UserService Angular integration:', function() {
			"use strict";
			beforeEach(module('mk.managerModule.services'));

			it('should have a User declared', inject(['User', function(User) {
				expect(User).toBeDefined();
			}]));

			describe('Testing methods:', function() {

				beforeEach(inject(['User', function(User) {
					user = User;
				}]));

				describe('Tests before authentication:', function() {
					it('should return undefined when no user is logged', function() {
						expect(user.getUser()).toBeNull();
					});

					it('should return false to isAuthenticated', function() {
						expect(user.isAuthenticated()).toBeFalsy();
					});
				});

				describe('Tests after authentication:', function() {
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
})

