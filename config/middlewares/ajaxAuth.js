/**
 * Created by eliorb on 27/11/13.
 */

exports.requiresLogin = function(req, res, next) {
    'use strict';
    if (!req.isAuthenticated()) {
        return res.send(401, {
            message: 'You must be authenticated first',
            redirect: '/signin'
        });
    }
    return next();
};
