import { router } from './routing';


router.init();

let handleSignedInUser;
let handleSignedOutUser;
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        handleSignedInUser(user);
    } else {
        handleSignedOutUser();
    }
});

// Displays the UI for a signed in user.

handleSignedInUser = function(user) {
    $('#login').addClass('hide');
    $('#logout').removeClass('hide');
    $('#profile').removeClass('hide');
    $('#profile').text(user.displayName.split(' ')[0]);
};

// Displays the UI for a signed out user.

handleSignedOutUser = function() {
    $('#logout').addClass('hide');
    $('#profile').addClass('hide');
    $('#login').removeClass('hide');
    // console.log('Logout successful');
};

// Caroucel event

//End Caroucel
