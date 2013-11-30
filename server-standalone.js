/**
 * Created by eliorb on 30/11/13.
 */

/**
 * Runs the server as a standalone, without needing mimosa.
 */
'use strict';
var mimosaConfig = require('./mimosa-config').config,
    startServer = require('./startServer');

startServer(mimosaConfig);
