import { templateLoader } from 'template-loader';
import { dataService } from 'dataService';

const homeController = (() => $('#login').click(() => Promise.all([templateLoader.get('home'), dataService.getMenu()])
    .then(([template, data]) => {
        const $container = $('#app-container');
        // console.log('home');
        // console.log(data);           TODO: да сменя getMenu() с постове
        const html = template(data);
        $container.html(html);
    })))()

export { homeController }
