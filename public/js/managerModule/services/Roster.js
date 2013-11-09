/**
 * Created by Elior on 30/10/13.
 */
define([], function() {
	"use strict";

	function Character(name, options) {
		options = options || {};
		this.name = name;
		this.speed = options.speed || 'average';
		this.accel = options.accel || 'average';
		this.weight = options.weight || 'medium';
	}

	return function Roster($logger) {
		var roster;
		$logger.debug('Creating a Roster');

		roster = {
			'Mario': new Character('Mario'),
			'Luigi': new Character('Luigi'),
			'Peach': new Character('Peach', {'speed': 'average', 'accel': 'fast', 'weight': 'light'}),
			'Daisy': new Character('Daisy', {'speed': 'slow', 'accel': 'fast', 'weight': 'light'}),
			'Bowser': new Character('Bowser', {'speed': 'fast', 'accel': 'slow', 'weight': 'heavy'}),
			'DK': new Character('DK', {'speed': 'fast', 'accel': 'average', 'weight': 'heavy'}),
			'Wario': new Character('Wario', {'speed': 'fast', 'accel': 'slow', 'weight': 'heavy'}),
			'Waluigi': new Character('Waluigi', {'speed': 'average', 'accel': 'fast', 'weight': 'light'}),
			'Toad': new Character('Toad', {'speed': 'fast', 'accel': 'fast', 'weight': 'light'}),
			'Yoshi': new Character('Yoshi', {'speed': 'fast', 'accel': 'average', 'weight': 'light'})
		};
		return roster;
	};

});
