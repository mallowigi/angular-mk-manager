//Articles service used for articles REST endpoint
MarioKartManagerApp.factory("Articles", function($resource){
	return $resource('articles/:articleId', {articleId:'@_id'}, {update: {method: 'PUT'}});
});