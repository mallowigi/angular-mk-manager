/**
 * Created by Elior on 01/11/13.
 */
/**
 * Mock an authenticated user
 */
define([], function() {
	"use strict";
	return {
		getUser: function() { return 'Mario'; },
		isAuthenticated: function() { return true;}
	};
});