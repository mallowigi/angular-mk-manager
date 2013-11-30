/**
 * Created by Elior on 09/11/13.
 */

module.exports = function(app, auth) {
	"use strict";
	var tournaments = require('../controllers/TournamentAPI');

	app.get('/tournaments', tournaments.getAllTournaments);
	app.post('/tournaments', auth.requiresLogin, tournaments.createTournament);
	app.get('/tournaments/:id', auth.requiresLogin, tournaments.showTournament);
	app.put('/tournaments/:id', auth.requiresLogin, tournaments.updateTournament);
	app.del('/tournaments/:id', auth.requiresLogin, tournaments.deleteTournament);

	// Every time it needs to provide :id, it executes this callback
	app.param('id', tournaments.findTournament);
};
