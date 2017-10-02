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
                const $title = $('<h1>');
                $title.text('store location');
                const $h5 = $('<h5>');
                $h5.text('Neapolitan pizza and grandmother\'s kitchen.');
                $('.header-info').append($title);
                $('.header-info').append($h5);

                const $h4 = $('<h4>');
                $h4.text('Home >> Localization');
                $('.info-left').append($h4);

                // After header bar - start
                const $input = $('<input>');
                $input.attr('placeholder', 'Search this website');
                $input.addClass('form-control search-right');
                const $searchButton = $('<button>');
                $searchButton.text('Search');
                $searchButton.addClass('btn btn-success search-right');

                $('#search-right').append($input);
                $('#search-right').append($searchButton);
                // After header bar - end

                const html = template();
                $container.html(html);
            })
            .then(() => {
                this.dataService.initMap();
            })
    }
}

export { LocationController };
