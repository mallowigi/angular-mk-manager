/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
	, Schema = mongoose.Schema
	, crypto = require('crypto')
	, authTypes = ['github', 'twitter', 'facebook', 'google'];

/**
 * User Schema
 */

var UserSchema = new Schema({
	name: String,
	email: String,
	username: String,
	provider: String,
	hashedPassword: String,
	salt: String,
	facebook: {},
	twitter: {},
	github: {},
	google: {}
});

/**
 * Virtuals
 */

UserSchema
	.virtual('password')
	.set(function(password) {
		'use strict';
		this._password = password;
		this.salt = this.makeSalt();
		this.hashedPassword = this.encryptPassword(password);
	})
	.get(function() {
		'use strict';
		return this._password;
	});

/**
 * Validations
 */

var validatePresenceOf = function(value) {
	'use strict';
	return value && value.length;
};

// the below 4 validations only apply if you are signing up traditionally

UserSchema.path('name').validate(function(name) {
	'use strict';
	// if you are authenticating by any of the oauth strategies, don't validate
	if (authTypes.indexOf(this.provider) !== -1) {
		return true;
	}
	return name.length;
}, 'Name cannot be blank');

UserSchema.path('email').validate(function(email) {
	'use strict';
	// if you are authenticating by any of the oauth strategies, don't validate
	if (authTypes.indexOf(this.provider) !== -1) {
		return true;
	}
	return email.length;
}, 'Email cannot be blank');

UserSchema.path('username').validate(function(username) {
	'use strict';
	// if you are authenticating by any of the oauth strategies, don't validate
	if (authTypes.indexOf(this.provider) !== -1) {
		return true;
	}
	return username.length;
}, 'Username cannot be blank');

UserSchema.path('hashedPassword').validate(function(password) {
	'use strict';
	// if you are authenticating by any of the oauth strategies, don't validate
	if (authTypes.indexOf(this.provider) !== -1) {
		return true;
	}
	return password.length;
}, 'Password cannot be blank');

/**
 * Pre-save hook
 */

UserSchema.pre('save', function(next) {
	'use strict';
	if (!this.isNew) {
		return next();
	}

	if (!validatePresenceOf(this.password) && authTypes.indexOf(this.provider) === -1) {
		next(new Error('Invalid password'));
	}
	else {
		next();
	}
});

/**
 * Methods
 */

UserSchema.methods = {

	/**
	 * Authenticate - check if the passwords are the same
	 *
	 * @param {String} plainText
	 * @return {Boolean}
	 * @api public
	 */

	authenticate: function(plainText) {
		'use strict';
		return this.encryptPassword(plainText) === this.hashedPassword;
	},

	/**
	 * Make salt
	 *
	 * @return {String}
	 * @api public
	 */

	makeSalt: function() {
		'use strict';
		return Math.round((new Date().valueOf() * Math.random())) + '';
	},

	/**
	 * Encrypt password
	 *
	 * @param {String} password
	 * @return {String}
	 * @api public
	 */

	encryptPassword: function(password) {
		'use strict';
		if (!password) {
			return '';
		}
		return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
	}
};

mongoose.model('User', UserSchema);
