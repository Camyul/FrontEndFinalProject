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
                $('#home-btn').addClass('hide');

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
                const htmlH4 = '<a class="level1" href="" >Home</a> <span>>></span> <a class="level2" href="" >Menu</a> <span>>></span> <a class="level3" href="" >Some</a>';
                $h4.html(htmlH4);
                $('.info-left').html('');
                $('.info-left').append($h4);
                $('.level1').attr('href', '#/home');
                $('.level2').attr('href', '#/menu');
                $('.level3').attr('href', `#/${data.Title}`);
                $('.level3').text(`${data.Title}`);

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

                // console.log(data);
                const html = template(data);
                $container.html(html);

                //Entire Form (handler)
                $('#newComment').submit((e) => {
                    e.preventDefault();

                    const $form = $(this);

                    //disable submit button
                    $form.find('#saveForm').prop('disabled', true);

                    // Check for auth
                    const user = firebase.auth().currentUser;
                    const commentarToSend = $('#comment').val()
                        .trim();
                    if (user) {
                        //get values to send to Firebaseconsole.log(user.photoURL);
                        $('#comment').val('');
                        if (commentarToSend.length < 50) {
                            toastr.warning('Comment must be min 50 simbols');
                            return false;
                        } else {
                            toastr.success('You are comment successful');
                        }
                        //const utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
                        const utc = new Date().toJSON()
                            .slice(0, 10);
                        // console.log(user);
                        const newActivity = {
                            "description": commentarToSend,
                            "authorPhoto": user.photoURL,
                            "authorName": user.displayName,
                            "CreatedOn": utc,
                            "IsDeleted": false
                        }

                        //console.log(newActivity);
                        const menuItemId = $('#menu-details').attr('data');
                        this.dataService.addCommentToDb(newActivity, menuItemId);
                    } else {
                        toastr.error('Must be logged to comment');
                        return false;
                    }

                    return false;
                })
            })
    }

    getMenu() {
        Promise.all([this.templateLoader.get('menu'), this.dataService.getMenu()])
            .then(([template, data]) => {
                const $container = $('#app-container');
                // console.log('menu controller');
                // console.log(data);

                $('#logo2').addClass('hide');
                $('#home-btn').addClass('hide');

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
                const htmlH4 = '<a class="level1" href="" >Home</a> <span>>></span> <a class="level2" href="" >Menu</a>';
                $h4.html(htmlH4);
                $('.info-left').html('');
                $('.info-left').append($h4);
                $('.level1').attr('href', '#/home');
                $('.level2').attr('href', '#/menu');

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
