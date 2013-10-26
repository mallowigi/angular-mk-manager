var helper = testHelper;

/**
 * Created by Elior on 04/10/13.
 */
describe('Header Bar:', function() {
	"use strict";
	// Keep the angular injector since we don't use angular-mocks here

	beforeEach(function() {
		browser().navigateTo('/');
	});

	it('should have loaded the header template', function() {
		expect(element('#navBar').count()).toBeGreaterThan(0);
	});

	it('should have a brand named \'Mario Kart Manager\'', function() {
		var brand = element('.brand:visible');
		expect(brand.count()).toBeGreaterThan(0);
		expect(brand.text()).toMatch('Mario Kart Manager');
	});

	describe('Menu:', function() {
		var navBarScope;
		beforeEach(function() {
			navBarScope = using('#navBar');
		});

		afterEach(function(){
			browser().navigateTo('/signout');
		})

		describe('Before authenticating user:', function() {
			"use strict";

			it('should not detect other views', function() {
				expect(navBarScope.element('#main').count()).toBe(0);
			});

			it('should see the unlogged menu', function() {
				expect(element('#unlogged-menu:visible').count()).toBe(1);
				expect(element('#logged-menu:visible').count()).toBe(0);
			});

			it('should see the buttons signin and signup', function() {
				//				expect(navBarScope.element('#signin-btn').count()).toBe(1);
				//				expect(navBarScope.element('#signup-btn').count()).toBe(1);
				expect(element('#signin-btn').count()).toBe(1);
				expect(element('#signup-btn').count()).toBe(1);
			});

			it('should redirect to signin when clicking signin button', function(){
				navBarScope.element('#signin-btn', 'Sign in').click();
				expect(browser().window().path()).toBe('/signin');
			});

		});

		describe('After authenticating user:', function() {
			"use strict";

			beforeEach(function() {
				navBarScope.element('#signin-btn', 'Sign in').click();
				helpers.login('mariosmilax@gmail.com', 'picsou22');
			});


			it('should signin', function() {
				expect(element('#signin-btn:visible').count()).toBe(0);
				expect(element('#signout-btn').count()).toBe(1);
			});

			it('should be to home page after signin', function() {
				expect(browser().window().hash()).not().toEqual('/signin');
			});

		});

	});

});