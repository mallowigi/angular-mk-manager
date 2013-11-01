
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates')
  , notifier = {
      APN: false,
      email: false, // true
      actions: ['comment'],
      tplPath: templatePath,
      postmarkKey: 'POSTMARK_KEY',
      parseAppId: 'PARSE_APP_ID',
      parseApiKey: 'PARSE_MASTER_KEY'
    };

module.exports = {
  development: {
    db: 'mongodb://localhost/mk-manager',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'Mario Kart Manager'
    },
    facebook: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
      clientID: "CONSUMER_KEY",
      clientSecret: "CONSUMER_SECRET",
      callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    i18n: {
      ns: "translation",
      lng: "en",
      detectLngQS: "locale",
      cookieName: "locale",
      supportedLngs: ['en'],
      fallbackLng: "en",
      preload: "en",
      load: "current",
      sendMissing: false,
      debug: true,
      ignoreRoutes: ['/css', '/img', 'js', 'lib', 'views'],
      resGetPath: './app/locales/__lng__/__ns__.json'
    },
    socket: {
      ns: "/api"
    }
  },
  test: {
    db: 'mongodb://localhost/mean-test',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'Mario Kart Manager - Test'
    },
    facebook: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
      clientID: "CONSUMER_KEY",
      clientSecret: "CONSUMER_SECRET",
      callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    i18n: {
      ns: "translation",
      lng: "en",
      detectLngQS: "locale",
      cookieName: "locale",
      supportedLngs: ['en'],
      fallbackLng: "en",
      preload: "en",
      load: "current",
      sendMissing: false,
      debug: true,
      ignoreRoutes: ['/css', '/img', 'js', 'lib', 'views'],
      resGetPath: './app/locales/__lng__/__ns__.json'
    },
    socket: {
      ns: "/api"
    }
  },
  production: {
    db: 'mongodb://localhost/mean',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'MEAN - A Modern Stack - Production'
    },
    facebook: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
      clientID: "CONSUMER_KEY",
      clientSecret: "CONSUMER_SECRET",
      callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    i18n: {
      ns: "translation",
      lng: "en",
      detectLngQS: "locale",
      cookieName: "locale",
      supportedLngs: ['en'],
      fallbackLng: "en",
      preload: "en",
      load: "current",
      sendMissing: false,
      debug: true,
      ignoreRoutes: ['/css', '/img', 'js', 'lib', 'views'],
      resGetPath: './app/locales/__lng__/__ns__.json'
    },
    socket: {
      ns: "/api"
    }
  }
};
