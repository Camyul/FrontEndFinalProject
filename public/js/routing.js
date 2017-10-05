import { ContactController } from 'contactController';
import { HomeController } from 'homeController';
import { LocationController } from 'locationController';
import { MenuController } from 'menuController';
import { ProfileController } from 'profileController';
import { dataService } from 'dataService';
import { loginController } from 'loginController';
import { logoutController } from 'logoutController';

import { templateLoader } from 'template-loader';


const router = (() => {
    let navigo;

    function init() {
        navigo = new Navigo(null, false);

        navigo.on('home', () => {
                const homeController = new HomeController(dataService, templateLoader);
                homeController.home();
            }).on('menu/:id', (params) => {
                const menuController = new MenuController(dataService, templateLoader);
                menuController.getMenuById(params);
                //menuController.getCommentsForItem(params);

                /*                 const menuController = new MenuController(dataService, templateLoader);
                                return new Promise((res, req) => {
                                    res(menuController.getMenuById(params));
                                }).then(() => {
                                    menuController.getCommentsForItem(params);
                                }); */
            })
            .on('menu', () => {
                const menuController = new MenuController(dataService, templateLoader);
                menuController.getMenu();
                menuController.getComments();
                // console.log('menu router');
            })
            .on('contact', () => {
                const contactController = new ContactController(dataService, templateLoader);
                contactController.getContacts();
                // console.log('contact router');
            })
            .on('location', () => {
                const locationController = new LocationController(dataService, templateLoader);
                locationController.getLocation();
                locationController.getComments();
                // console.log('location router');
            })
            .on('login', () => {
                loginController
            })
            .on('logout', () => {
                logoutController,
                document.location.href = '#/home';
            })
            .on('profile', () => {
                const profileController = new ProfileController(dataService, templateLoader);
                profileController.getProfile();
                // console.log('profile router');
            })
            .on('/', () => {
                document.location.href = '#/home';
                router.init();
            })
            .resolve();
    }

    return {
        init,
    };
})();

export { router };
