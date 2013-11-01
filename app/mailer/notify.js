/**
 * Module dependencies.
 */

var Notifier = require('notifier')
	, env = process.env.NODE_ENV || 'development'
	, config = require('../../config/config')[env];

/**
 * Notification methods
 */

var Notify = {

	/**
	 * Comment notification
	 *
	 * @param {Object} options
	 * @param {Function} cb
	 * @api public
	 */

	comment: function(options, cb) {
		'use strict';
		var article = options.article,
			author = article.user,
			user = options.currentUser,
			notifier = new Notifier(config.notifier);

		var obj = {
			to: author.email,
			from: 'your@product.com',
			subject: user.name + ' added a comment on your article ' + article.title,
			alert: user.name + ' says: "' + options.comment,
			locals: {
				to: author.name,
				from: user.name,
				body: options.comment,
				article: article.name
			}
		};

		// for apple push notifications
		notifier.use({
			APN: true,
			parseChannels: ['USER_' + author._id.toString()]
		});

		notifier.send('comment', obj, cb);
	}
};

/**
 * Expose
 */

module.exports = Notify;
