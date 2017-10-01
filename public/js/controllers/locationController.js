class LocationController {
    constructor(dataService, templateLoader) {
        this.dataService = dataService;
        this.templateLoader = templateLoader;
    }

    getLocation() {
        Promise.all([this.templateLoader.get('location')])
            .then(([template]) => {
                const $container = $('#app-container');
                // console.log('location controller');
                // console.log(data); // TODO: да сменя getMenu() с or remove dataService
                $('#logo2').addClass('hide');
                const html = template();
                $container.html(html);
            })
            .then(() => {
                this.dataService.initMap();
            })
    }
}

export { LocationController };
