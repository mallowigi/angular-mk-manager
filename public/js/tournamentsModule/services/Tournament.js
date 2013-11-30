/* global define */
define([
], function() {
	"use strict";

	/**
	 * Service for the tournament resource in the backend
	 */
	return function Tournament ($logger, $resource) {
		$logger.debug('Loading resource Tournament');

		// Use ngResource to send to "tournaments/:id"
		return $resource('tournaments/:tournamentId',
			{
				// Param defaults: set the tournamentId from the _id of the resource returned
				tournamentId: '@_id'
			},
			{
				// Override the update method to use PUT instead
				update: {method: 'PUT'}
			}
		);
	};
});
