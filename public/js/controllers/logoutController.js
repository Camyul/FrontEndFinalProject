const logoutController = (() => $('#logout').click(() => {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.

        document.location = '/';

    }).catch(function(error) {
        // An error happened.
    });
}))()

export { logoutController }
