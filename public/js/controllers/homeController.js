class HomeController {
    constructor(dataService, templateLoader) {
        this.dataService = dataService;
        this.templateLoader = templateLoader;
    }

    home() {
        Promise.all([this.templateLoader.get('home'), this.dataService.getNItemsFromMenu(3)])
            .then(([template, data]) => {
                const $container = $('#app-container');
                // console.log('menu controller');
                // console.log(data);

                $('#logo2').removeClass('hide');
                $('#home-btn').removeClass('hide');
                $('#before-container').addClass('hide');

                //Header info - start
                const $title = $('<h1>');
                $title.text('Red Tomato House');
                const $h5 = $('<h5>');
                const $button = $('<button>');
                $button.addClass('search-right btn btn-success home-page-btn');
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
                $('#slogan').text('Rossopomodoro has restaurants around the world. Wherever you are, you are never far from a true Neapolitan experience.');
                $('.slogan').removeClass('hide');
                $('#slogan2').text('unc elementum lacus in gravida pellentesque urna dolor eleifend');

                // After header bar - end

                $('#home-btn').click(() => {
                    document.location.href = '#/menu';
                });

                const html = template(data);
                $container.html(html);
            })
            .then(() => {
                this.dataService.initMap();
            });
    }


    getPost() {
        Promise.all([this.templateLoader.get('home-post'), this.dataService.getPost()])
            .then(([template, post]) => {
                const $container = $('#home-item3');

                // console.log(post);
                const html = template(post);
                $container.html(html);

            });
    }


}

export { HomeController };
