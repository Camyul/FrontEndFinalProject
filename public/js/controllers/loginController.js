const loginController = (() => $('#login').click(() => {
    const provider = new firebase.auth.FacebookAuthProvider();

    provider.setCustomParameters({
        'display': 'popup'
    });

    firebase.auth().signInWithPopup(provider).then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        $('#login').addClass('hide');
        $('#logout').removeClass('hide');
        $('#profile').removeClass('hide');
        $('#profile').text(user.displayName.split(' ')[0]);
        document.location = '#/profile';

    }).catch(function(error) {
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}))()

export { loginController }
