const dataService = (() => {

    function getMenuById(key) {
        return new Promise((resolve, reject) => {
            const dbRefMenu = firebase.database().ref()
                .child('menu');
            let item;
            dbRefMenu.on('value', snapshot => {
                snapshot.forEach((data) => {
                    if (data.key === key.id) {
                        item = {
                            key: data.key, //this is to get the ID
                            Title: data.val().Title,
                            Description: data.val().Description,
                            Price: data.val().Price,
                            img: data.val().img,
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
                        key: data.key, //this is to get the ID
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
        initMap,
        getMenuById
    };
})();

export { dataService };
