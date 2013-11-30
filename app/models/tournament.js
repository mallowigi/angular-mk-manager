/**
 * Created by Elior on 09/11/13.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , autoIncrement = require('mongoose-auto-increment')
    , env = process.env.NODE_ENV || 'development'
    , config = require('../../config/config')[env];

var TournamentSchema = new Schema({
	name: String,
	tracks: Number,
	playerID: {type: Schema.ObjectId, ref: 'User' }
});

// Add autoIncrement plugin to Tournament
TournamentSchema.plugin(autoIncrement.plugin, 'Tournament');

// Static methods
TournamentSchema.statics.load = function(id, done) {
	"use strict";
	// Find one tournament with this id left join with User table with player ID
	this.findOne({_id: id}).populate('playerID').exec(done);
};

// Associate the schema with the entity "Tournament"
mongoose.model('Tournament', TournamentSchema);
