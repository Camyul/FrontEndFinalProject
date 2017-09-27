// import { data } from './data.js';
import { loginController } from 'loginController';
import { logoutController } from 'logoutController';
import { templateLoader as tl } from 'template-loader';


var router = (() => {
    let navigo;
    const $container = $('#app-container');

    function init() {
        navigo = new Navigo(null, false);

        navigo.on('/', (params) => {
                Promise.all([tl.get('home')])
                    .then(([template]) => {
                        const html = template(); // TODO: Here Add data
                        $container.html(html);
                        console.log('Router in home');
                    });
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
            .resolve();
    }

    return {
        init,
    };
})();

export { router };
