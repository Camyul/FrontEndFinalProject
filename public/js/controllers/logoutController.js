const logoutController = (() => $('#logout').click(() => {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        $('#logout').addClass('hide');
        $('#profile').addClass('hide');
        $('#login').removeClass('hide');
        console.log('Logout successful');
        document.location = '/';

    }).catch(function(error) {
        // An error happened.
    });
}))()

export { logoutController }
