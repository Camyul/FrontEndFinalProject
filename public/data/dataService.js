const dataService = (() => {
    function getMenu() {
        return new Promise((resolve, reject) => {
            const dbRefMenu = firebase.database().ref()
                .child('menu');
            let menuItems;
            dbRefMenu.on('value', snap => {
                menuItems = snap.val();
                resolve(menuItems);
            })
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
        initMap
    };
})();

export { dataService };
