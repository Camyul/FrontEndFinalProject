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
                $('#home-btn').addClass('hide');

                //Header info - start
                const $title = $('<h1>');
                $title.text('Profile');
                const $h5 = $('<h5>');
                $h5.text('Neapolitan pizza and grandmother\'s kitchen.');
                $('.header-info').html('');
                $('.header-info').append($title);
                $('.header-info').append($h5);
                //Header info - end

                // After header bar - start
                const $h4 = $('<h4>');
                const htmlH4 = '<a class="level1" href="" >Home</a> <span>>></span> <a class="level2" href="" >Contact</a>';
                $h4.html(htmlH4);
                $('.info-left').html('');
                $('.info-left').append($h4);
                $('.level1').attr('href', '#/home');
                $('.level2').attr('href', '#/profile');

                const $input = $('<input>');
                $input.attr('placeholder', 'Search this website');
                $input.addClass('form-control search-right');
                const $searchButton = $('<button>');
                $searchButton.text('Search');
                $searchButton.addClass('btn btn-success search-right');

                $('#search-right').html('');
                $('#slogan').text('');
                $('.slogan').addClass('hide');
                $('#slogan2').text('');
                $('#search-right').append($input);
                $('#search-right').append($searchButton);
                // After header bar - end

                const html = template(data);
                $container.html(html);
            })
    }

}

export { ProfileController };
