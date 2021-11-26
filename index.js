function render () {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();

}

let CATALOG = [];


fetch('http://myjson.dit.upm.es/api/bins/4fvv')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error);
    })