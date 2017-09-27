var dataService = (() => {
    function getMenu() {
        return new Promise((resolve, reject) => {
            const dbRefMenu = firebase.database().ref().child('menu');
            let menuItems;
            dbRefMenu.on('value', snap => {
                menuItems = snap.val();
                resolve(menuItems);
            })
        })
    }
    return {
        getMenu,
    };
})();

export { dataService };
