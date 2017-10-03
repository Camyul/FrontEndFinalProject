class MenuController {
    constructor(dataService, templateLoader) {
        this.dataService = dataService;
        this.templateLoader = templateLoader;
    }

    getMenuById(id) {
        Promise.all([this.templateLoader.get('menu-details'), this.dataService.getMenuById(id)])
            .then(([template, data]) => {
                const $container = $('#app-container');
                $('#logo2').addClass('hide');

                //Header info - start
                const $title = $('<h1>');
                $title.text('Dinner Menu');
                const $h5 = $('<h5>');
                $h5.text('Neapolitan pizza and grandmother\'s kitchen.');
                $('.header-info').html('');
                $('.header-info').append($title);
                $('.header-info').append($h5);
                //Header info - end

                // After header bar - start
                const $h4 = $('<h4>');
                $h4.text(`Home >> Menu >> ${data.Title}`);
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

                const html = template(data);
                $container.html(html);
            })
    }

    getMenu() {
        Promise.all([this.templateLoader.get('menu'), this.dataService.getMenu()])
            .then(([template, data]) => {
                const $container = $('#app-container');
                // console.log('menu controller');
                // console.log(data);

                $('#logo2').addClass('hide');

                //Header info - start
                const $title = $('<h1>');
                $title.text('Dinner Menu');
                const $h5 = $('<h5>');
                $h5.text('Neapolitan pizza and grandmother\'s kitchen.');
                $('.header-info').html('');
                $('.header-info').append($title);
                $('.header-info').append($h5);
                //Header info - end

                // After header bar - start
                const $h4 = $('<h4>');
                $h4.text('Home >> Menu');
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

                const html = template(data);
                $container.html(html);
            })
    }

    //addAutocomplete("cuisine", "cuisine", data, true); // From input 
    /* function addAutocomplete(property, field, data, isInArray) {
        isInArray = isInArray || false;
        let options = [];
        if (isInArray) {
            data.map(r => r[property])
                .forEach((array) => {
                    options.push(...array);
                });
            options = options.filter(function(elem, index, self) {
                return index == self.indexOf(elem);
            });
        } else {
            options = data.map(r => r[property]).filter(function(elem, index, self) {
                return index == self.indexOf(elem);
            });
        }
        $(`#${field}`).autocomplete({ source: options });
    } */

}

export { MenuController };
