/**
 * Created by eliorb on 20/12/13.
 */
var passport = require('passport');

module.exports = function(app, ajaxAuth) {
    "use strict";
    var trackAPI = require('../controllers/TrackAPI'),
        tournamentAPI = require('../controllers/TournamentAPI');

    app.get('/tournament/:id/tracks', passport.authenticate('basic', { session: false }),
        ajaxAuth.requiresLogin, trackAPI.getTracks);

    app.param('id', tournamentAPI.findTournament);
};
