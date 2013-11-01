/**
 * Created by Elior on 01/11/13.
 */
module.exports = function(app, passport, auth){
	"use strict";
	var articles = require('../controllers/articles');

	app.get('/articles', articles.all);
	app.post('/articles', auth.requiresLogin, articles.create);
	app.get('/articles/:articleId', articles.show);
	app.put('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.update);
	app.del('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.destroy);
	app.param('articleId', articles.article);
}