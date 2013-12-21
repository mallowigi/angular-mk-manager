/**
 * Created by eliorb on 20/12/13.
 */
var mongoose = require('mongoose'),
    TournamentModel = mongoose.model('Tournament'),
    TrackModel = mongoose.model('Track')
    ;

exports.createTrack = function() {
    "use strict";

};

exports.getTracks = function(req, res, next) {
    "use strict";

    var tournament = req.tournament;
    if (!tournament) {
        return next("No tournament found with this id");
    }
    TrackModel.find().populate('tournament').exec(function(err, tracks) {
        if (err) {
            return next(err);
        }
        return res.jsonp(tracks);
    });
};
