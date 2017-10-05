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
                $('#home-btn').addClass('hide');

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
                const htmlH4 = '<a class="level1" href="" >Home</a> <span>>></span> <a class="level2" href="" >Location</a>';
                $h4.html(htmlH4);
                $('.info-left').html('');
                $('.info-left').append($h4);
                $('.level1').attr('href', '#/home');
                $('.level2').attr('href', '#/location');

                const $input = $('<input>');
                $input.attr('placeholder', 'Search this website');
                $input.addClass('form-control search-right');
                const $searchButton = $('<button>');
                $searchButton.text('Search');
                $searchButton.addClass('btn btn-success search-right');

                $('#search-right').html('');
                $('#slogan').text('');
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
    getComments() {
        Promise.all([this.templateLoader.get('before-comments'), this.dataService.getNComments(5)])
            .then(([template, comments]) => {
                const $container = $('#before-col2');
                const $container2 = $('#before-col3');


                // Before footer - start
                $('#before-container').removeClass('hide');



                // Before footer - end

                const html = template(comments);
                $container.html(html);
                $container2.html(html);

            })
            .then(() => {
                const $h3 = $('<h3>');
                $h3.addClass('location-title text-center');
                $h3.text('Recent Posts');
                const $h33 = $('<h3>');
                $h33.addClass('location-title text-center');
                $h33.text('Recent Comments');

                $('#before-col2').prepend($h33);
                $('#before-col3').prepend($h3);
            })
    }
}

export { LocationController };
