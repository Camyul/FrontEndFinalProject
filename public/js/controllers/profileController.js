class ProfileController {
    constructor(dataService, templateLoader) {
        this.dataService = dataService;
        this.templateLoader = templateLoader;
    }

    getProfile() {
        Promise.all([this.templateLoader.get('profile'), this.dataService.getMenu()])
            .then(([template, data]) => {
                const $container = $('#app-container');
                // console.log('location controller');
                // console.log(data); // TODO: да сменя getMenu() с getProfileData()
                $('#logo2').addClass('hide');
                const html = template(data);
                $container.html(html);
            })
    }

}

export { ProfileController };
