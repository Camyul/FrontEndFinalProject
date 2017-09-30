import { router } from './routing';


router.init();

firebase.auth().onAuthStateChanged(function(user) {

    user ? handleSignedInUser(user) : handleSignedOutUser();
});

/**
 * Displays the UI for a signed in user.
 * @param {!firebase.User} user
 */
var handleSignedInUser = function(user) {
    $('#login').addClass('hide');
    $('#logout').removeClass('hide');
    $('#profile').removeClass('hide');
    $('#profile').text(user.displayName.split(' ')[0]);
};


/**
 * Displays the UI for a signed out user.
 */
var handleSignedOutUser = function() {
    $('#logout').addClass('hide');
    $('#profile').addClass('hide');
    $('#login').removeClass('hide');
    // console.log('Logout successful');
};
