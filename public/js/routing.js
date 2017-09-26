// import { data } from './data.js';
// import { templateLoader as tl } from './template-loader.js'

var router = (() => {
    let navigo;
    let $container = $('#app-container');

    function init() {
        navigo = new Navigo(null, false);

        navigo.on('/', (params) => { console.log('home'); })
            .on('login', () => { console.log('Login') })
            // .on('', () => {})
            .resolve();
    }

    return {
        init
    }

})();

export { router };
