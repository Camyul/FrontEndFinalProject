class MenuController {
    constructor(dataService, templateLoader) {
        this.dataService = dataService;
        this.templateLoader = templateLoader;
    }

    getMenu() {
        Promise.all([this.templateLoader.get('menu'), this.dataService.getMenu()])
            .then(([template, data]) => {
                const $container = $('#app-container');
                // console.log('menu controller');
                // console.log(data); // TODO: create getMenuItemById()
                const html = template(data);
                $container.html(html);
            })
    }

}

export { MenuController };
