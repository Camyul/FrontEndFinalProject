class HomeController {
    constructor(dataService, templateLoader) {
        this.dataService = dataService;
        this.templateLoader = templateLoader;
    }

    home() {
        Promise.all([this.templateLoader.get('home'), this.dataService.getMenu()])
            .then(([template, data]) => {
                const $container = $('#app-container');
                // console.log('menu controller');
                // console.log(data);

                $('#logo2').addClass('hide');

                //Header info - start
                const $title = $('<h1>');
                $title.text('Red Tomato House');
                const $h5 = $('<h5>');
                const $button = $('<button>');
                $button.addClass('search-right btn btn-success');
                $button.text('See all Reviews');
                $h5.text('Here is The Italian Pizza.');
                $('.header-info').html('');
                $('.header-info').append($title);
                $('.header-info').append($h5);
                $('.header-info').append($button);
                //Header info - end

                // After header bar - start
                $('.info-left').html('');
                $('#search-right').html('');
                $('#slogan').text('"Rossopomodoro has restaurants in countries around the world. Wherever you are, you are never far from a true Neapolitan experience."');

                // After header bar - end

                const html = template(data);
                $container.html(html);
            })
    }

}

export { HomeController };
