class ContactController {
    constructor(dataService, templateLoader) {
        this.dataService = dataService;
        this.templateLoader = templateLoader;
    }

    getContacts() {
        Promise.all([this.templateLoader.get('contact'), this.dataService.getMenu()])
            .then(([template, data]) => {
                const $container = $('#app-container');
                // console.log('contact controller');
                // console.log(data); // TODO: да сменя getMenu() or remove dataService
                const html = template(data);
                $container.html(html);
            })
    }
}

export { ContactController };
