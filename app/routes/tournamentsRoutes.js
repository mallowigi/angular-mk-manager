/**
 * Created by Elior on 09/11/13.
 */
var passport = require('passport');

module.exports = function(app, auth) {
    "use strict";
    var tournaments = require('../controllers/TournamentAPI');

    app.get('/tournaments', tournaments.getAllTournaments);
    app.post('/tournaments', passport.authenticate('basic', { session: false }),
        auth.requiresLogin, tournaments.createTournament);
    app.get('/tournaments/:id', passport.authenticate('basic', { session: false }),
        auth.requiresLogin, tournaments.showTournament);
    app.put('/tournaments/:id', passport.authenticate('basic', { session: false }),
        auth.requiresLogin, tournaments.updateTournament);
    app.del('/tournaments/:id', passport.authenticate('basic', { session: false }),
        auth.requiresLogin, tournaments.deleteTournament);

    // Every time it needs to provide :id, it executes this callback
    app.param('id', tournaments.findTournament);
};
