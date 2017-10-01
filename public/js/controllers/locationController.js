class LocationController {
    constructor(dataService, templateLoader) {
        this.dataService = dataService;
        this.templateLoader = templateLoader;
    }

    getLocation() {
        Promise.all([this.templateLoader.get('location'), this.dataService.getMenu()])
            .then(([template, data]) => {
                const $container = $('#app-container');
                // console.log('location controller');
                // console.log(data); // TODO: да сменя getMenu() с or remove dataService
                const html = template(data);
                $container.html(html);
            })
    }

}

export { LocationController };
