import { router } from 'router';

const logoutController = (() => $('#logout').click(() => {
    firebase.auth().signOut()
        .then(() => {
            // Sign-out successful.
            //document.location = '/';
            router.navigate('#/home');

        })
        .catch((error) => {
            // An error happened.
        });
}))()

export { logoutController }
