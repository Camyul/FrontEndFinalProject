class LocationController {
    constructor(dataService, templateLoader) {
        this.dataService = dataService;
        this.templateLoader = templateLoader;
    }

    getLocation() {
        Promise.all([this.templateLoader.get('location')])
            .then(([template]) => {
                const $container = $('#app-container');
                // console.log(data);
                $('#logo2').addClass('hide');

                //Header info - start
                const $title = $('<h1>');
                $title.text('store location');
                const $h5 = $('<h5>');
                $h5.text('Neapolitan pizza and grandmother\'s kitchen.');
                $('.header-info').html('');
                $('.header-info').append($title);
                $('.header-info').append($h5);
                //Header info - end

                // After header bar - start
                const $h4 = $('<h4>');
                $h4.text('Home >> Localization');
                $('.info-left').html('');
                $('.info-left').append($h4);

                const $input = $('<input>');
                $input.attr('placeholder', 'Search this website');
                $input.addClass('form-control search-right');
                const $searchButton = $('<button>');
                $searchButton.text('Search');
                $searchButton.addClass('btn btn-success search-right');

                $('#search-right').html('');
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
