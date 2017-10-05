const dataService = (() => {

    function addCommentToDb(comment, menuItemId) {
        return new Promise((resolve, reject) => {
            // Add comment in table with all comments
            const dbRefComment = firebase.database().ref()
                .child('comments');
            dbRefComment.push(comment);

            // Add comment to current menuItem list of comments
            const dbRefMenu = firebase.database().ref()
                .child('menu');
            const dbRefMenuItem = dbRefMenu.child(menuItemId);
            dbRefMenuItem.child('comments').push(comment);
        })
    }

    function getMenuById(key) {
        return new Promise((resolve, reject) => {
            const dbRefMenu = firebase.database().ref()
                .child('menu');
            let item;
            dbRefMenu.on('value', snapshot => {
                snapshot.forEach((data) => {
                    if (data.key === key.id) {
                        item = {
                            key: data.key,
                            Title: data.val().Title,
                            Description: data.val().Description,
                            Price: data.val().Price,
                            img: data.val().img,
                            comments: data.val().comments
                        }
                        resolve(item);
                    }
                });
            });
        })
    }

    function getMenu() {
        return new Promise((resolve, reject) => {
            const dbRefMenu = firebase.database().ref()
                .child('menu');
            dbRefMenu.on('value', snapshot => {
                const list = new Array();
                snapshot.forEach((data) => {
                    const item = {
                        key: data.key,
                        Title: data.val().Title,
                        Description: data.val().Description,
                        Price: data.val().Price,
                        img: data.val().img,
                    }
                    list.push(item);
                });
                resolve(list);
            });
        })
    }

    function getNItemsFromMenu(n) {
        return new Promise((resolve, reject) => {
            const dbRefMenu = firebase.database().ref()
                .child('menu');
            dbRefMenu.on('value', snapshot => {
                const list = new Array();
                snapshot.forEach((data) => {
                    const item = {
                        key: data.key,
                        Title: data.val().Title,
                        Description: data.val().Description,
                        Price: data.val().Price,
                        img: data.val().img,
                    }
                    list.push(item);
                });
                const result = list.slice(0, n);
                resolve(result);
            });
        })
    }

    function initMap() {
        let uluru = { lat: 45.45103, lng: 9.200786 };
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: uluru
        });
        let marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
    return {
        getMenu,
        getNItemsFromMenu,
        getMenuById,
        initMap,
        addCommentToDb
    };
})();

export { dataService };
