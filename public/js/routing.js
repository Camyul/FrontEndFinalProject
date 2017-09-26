// import { data } from './data.js';
import { templateLoader as tl } from 'template-loader'

var router = (() => {
    let navigo;
    let $container = $('#app-container');

    function init() {
        navigo = new Navigo(null, false);

        navigo.on('/', (params) => {
                Promise.all([tl.get('home')])
                    .then(([template]) => {
                        const html = template();
                        $container.html(html);
                    }) // Here Add data
            })
            .on('login', () => { console.log('Login') })
            // .on('', () => {})
            .resolve();
    }

    return {
        init
    }

})();

export { router };
