/**
 * Created by eliorb on 30/11/13.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , autoIncrement = require('mongoose-auto-increment')
    ;

/**
 * Schema for Tracks
 * @type {Schema}
 */
var TrackSchema = new Schema({
    tournament: {type: Schema.ObjectId, ref: 'Tournament'},
    name: String,
    date: {type: Date, default: Date.now()},
    time: Number,
    character: String
});

// Autoincrement plugin
TrackSchema.plugin(autoIncrement.plugin, 'Track');

// Find and populate track with db data
TrackSchema.statics.load = function(id, done) {
    "use strict";
    this.findOne({'_id': id}).populate('tournament').exec(done);
};

mongoose.model('Track', TrackSchema);

