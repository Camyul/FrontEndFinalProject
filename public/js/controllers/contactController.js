class ContactController {
    constructor(dataService, templateLoader) {
        this.dataService = dataService;
        this.templateLoader = templateLoader;
    }

    getContacts() {
        Promise.all([this.templateLoader.get('contact'), this.dataService.getMenu()])
            .then(([template, data]) => {
                const $container = $('#app-container');
                // console.log('menu controller');
                // console.log(data);

                $('#logo2').addClass('hide');
                $('#home-btn').addClass('hide');
                $('#before-container').addClass('hide');

                //Header info - start
                const $title = $('<h1>');
                $title.text('Contact');
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
                $('.level2').attr('href', '#/contact');

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

                const html = template(data);
                $container.html(html);

                $('#subsc-email').submit((ev) => {
                    ev.preventDefault();
                    $('#subsc1-email').val('');
                    toastr.success('You are successfull subscribed!');
                });

                $('#message-email').submit((ev) => {
                    ev.preventDefault();
                    $('#name').val('');
                    $('#email').val('');
                    $('#number').val('');
                    $('#message').val('');
                    toastr.success('You are message sended successfull!');
                })
            })
    }
}

export { ContactController };
