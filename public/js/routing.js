import { loginController } from 'loginController';
import { logoutController } from 'logoutController';
import { homeController } from 'homeController';


var router = (() => {
    let navigo;

    function init() {
        navigo = new Navigo(null, false);

        navigo.on('home', () => {
                homeController
            })
            .on('menu/:id', (params) => {
                // menuController
                console.log(`menu ${JSON.stringify(params)}`);
            })
            .on('menu', () => {
                // menuController
                console.log('menu');
            })
            .on('contact', () => {
                // menuController
                console.log('contact');
            })
            .on('location', () => {
                // menuController
                console.log('location');
            })
            .on('login', () => {
                loginController
            })
            .on('logout', () => {
                logoutController
            })
            .on('profile', () => {
                console.log('Router in profile');
            })
            .on('/', () => {
                document.location = '#/home';
            })

        .resolve();
    }

    return {
        init,
    };
})();

export { router };
