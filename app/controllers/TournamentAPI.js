/**
 * Created by Elior on 09/11/13.
 */
var mongoose = require('mongoose'),
    TournamentModel = mongoose.model('Tournament'),
    _ = require('lodash');

/**
 * Create a tournament and return it in the response in JSON format
 * @param req the request containing the tournament data
 * @param res a response containing the tournament created in JSON format
 */
exports.createTournament = function(req, res) {
    "use strict";
    // Tournaments are being passed by the client when submitting and user is part of the request itself
    var tournament = new TournamentModel(req.body);
    tournament.player = req.user;
    // persist into the db
    tournament.save(function(err, savedTournament) {
        if (err) {
            return res.jsonp(500, err);
        }
        // return the response with wrapping the tournament in jsonp
        return res.jsonp(savedTournament);
    });
};

/**
 * Show the current tournament.
 * @param req The request containing the current tournament.
 * @param res The response containing the tournament in JSON
 */
exports.showTournament = function(req, res) {
    "use strict";
    // Tournament is part of the request here (RESTFUL)
    res.jsonp(req.tournament);
};

/**
 * Find for a specific tournament and load it to the request, then pass it to the next middleware
 * @param req the request
 * @param res the response
 * @param next a pointer to the next middleware registered
 * @param id the id of the tournament to get
 */
exports.findTournament = function(req, res, next, id) {
    "use strict";
    // Call the static find method
    TournamentModel.load(id, function(error, tournament) {
        // If error with the request
        if (error) {
            return next(error);
        }
        if (!tournament) {
            return next(new Error('Cannot find the requested tournament'));
        }
        // Attach the tournament to the request
        req.tournament = tournament;
        return next();
    });
};

/**
 * Fetch all tournaments and put it on the response in JSON Format
 * @param req the request
 * @param res the response
 */
exports.getAllTournaments = function(req, res) {
    "use strict";
    // Get all tournaments in the db
    TournamentModel.find().populate('player').exec(function(err, tournaments) {
        // If error in the database
        if (err) {
            res.render('error', {status: 500});
        }
        else {
            res.jsonp(tournaments);
        }
    });
};

/**
 * Update the current tournament with the contents of the request body.
 * @param req the request containing the tournament to update
 * @param res the response with the updated tournament
 */
exports.updateTournament = function(req, res) {
    "use strict";
    // tournament is the current value of the tournament, that we update with the contents of the body
    var tournament = req.tournament,
        newTournament = req.body;

    // We use lodash's extend
    tournament = _.extend(tournament, newTournament);
    // save and return the result
    tournament.save(function() {
        res.jsonp(tournament);
    });
};

exports.deleteTournament = function(req, res) {
    "use strict";
    var tournament = req.tournament;
    tournament.remove(function(err) {
        if (err) {
            res.render(err, {status: 500});
        }
        else {
            res.jsonp({});
        }
    });
};
