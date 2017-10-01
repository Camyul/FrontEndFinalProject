const logoutController = (() => $('#logout').click(() => {
    firebase.auth().signOut()
        .then(() => {
            // Sign-out successful.

            document.location = '/';

        })
        .catch((error) => {
            // An error happened.
        });
}))()

export { logoutController }
