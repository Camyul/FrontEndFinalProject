import { loginController } from 'loginController';
import { logoutController } from 'logoutController';
import { HomeController } from 'homeController';
import { MenuController } from 'menuController';
import { ContactController } from 'contactController';
import { LocationController } from 'locationController';
import { ProfileController } from 'profileController'

import { templateLoader } from 'template-loader';
import { dataService } from 'dataService';


var router = (() => {
    let navigo;

    function init() {
        navigo = new Navigo(null, false);

        navigo.on('home', () => {
                const homeController = new HomeController(dataService, templateLoader);
                homeController.home();
            }).on('menu/:id', (params) => {
                const menuController = new MenuController(dataService, templateLoader);
                // menuController.getById();

                // console.log('menu router');
                // console.log(`menu ${JSON.stringify(params)}`);
            }).on('menu', () => {
                const menuController = new MenuController(dataService, templateLoader);
                menuController.getMenu();
                // console.log('menu router');
            }).on('contact', () => {
                const contactController = new ContactController(dataService, templateLoader);
                contactController.getContacts();
                // console.log('contact router');
            }).on('location', () => {
                const locationController = new LocationController(dataService, templateLoader);
                locationController.getLocation();
                // console.log('location router');
            }).on('login', () => {
                loginController
            }).on('logout', () => {
                logoutController
            }).on('profile', () => {
                const profileController = new ProfileController(dataService, templateLoader);
                profileController.getProfile();
                // console.log('profile router');
            }).on('/', () => {
                document.location = '#/home';
            })
            .resolve();
    }

    return {
        init,
    };
})();

export { router };
