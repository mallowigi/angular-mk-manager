# All of the below are mimosa defaults and only need to be uncommented in the event you want
# to override them.
#
# IMPORTANT: Be sure to comment out all of the nodes from the base to the option you want to
# override. If you want to turn change the source directory you would need to uncomment watch
# and sourceDir. Also be sure to respect coffeescript indentation rules.  2 spaces per level
# please!

exports.config = {

	modules: ['jshint','server', 'require', 'live-reload', 'minify', 'bower']

	watch:
		sourceDir: "public"
		compiledDir: "web"
		javascriptDir: "js"
		exclude: [/[/\\](\.|~)[^/\\]+$/]

	vendor:
		javascripts: "lib"
		stylesheets: "lib/css"

	coffeescript:
		sourceMap: true
		sourceMapDynamic: true
		sourceMapExclude: [/\/specs?\//, /_spec.js$/]
		bare: true

	copy:
		extensions: [
			"js", "css", "png", "jpg", "jpeg", "gif", "html", "eot", "svg", "ttf", "woff", "otf", "yaml", "kml", "ico", "htc", "htm", "json",
			"txt", "xml", "xsd", "map", "md"]

	server:
		path: 'server.js'
		port: 3000
		views:
			compileWith: 'jade'
			extension: 'jade'
			path: 'app/views'

	minify:
		exclude: [/\.min\./]
	lint:
		compiled:
			javascript: true
			css: true
		copied:
			javascript: true
			css: true
		vendor:
			javascript: false
			css: false
		rules:
			jshintrc: ".jshintrc"

	liveReload:
		enabled: true

	require:
		commonConfig: "main"
		exclude: [/(Spec|Scenario)/]
		tracking:
			enabled: true
		verify:
			enabled: true
		optimize:
			inferConfig: true

	bower:
		watch: true
		bowerDir:
			path: ".mimosa/bower_components"
			clean: true

		copy:
			enabled: true
			trackChanges: true
			unknownMainFullCopy: true
			mainOverrides:
				"requirejs-domready": ['domReady.js']
				"lodash": ['dist/lodash.js']
				"i18next": ["release/i18next.amd-1.7.1.min.js"]

			strategy: "vendorRoot"

	karma:
		configFile: 'karma.conf.js'
}
