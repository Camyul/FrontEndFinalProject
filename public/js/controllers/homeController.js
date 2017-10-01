class HomeController {
    constructor(dataService, templateLoader) {
        this.dataService = dataService;
        this.templateLoader = templateLoader;
    }

    home() {
        Promise.all([this.templateLoader.get('home'), this.dataService.getMenu()])
            .then(([template, data]) => {
                const $container = $('#app-container');
                // console.log('home controller');
                console.log(data);
                //:TODO да сменя getMenu() с постове
                $('#logo2').removeClass('hide');
                const html = template(data);
                $container.html(html);
            })
    }

}

export { HomeController };
