var testHelper = {};

/**
 * Created by Elior on 24/10/13.
 */
testHelper.login = function(email, password) {
    "use strict";
    // todo put this in its own class
    input('email').enter(email);
    input('password').enter(password);
    element(':button').click();
};
