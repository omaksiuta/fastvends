function findProduct(code) {
    var product = {
        productId: "0000912",
        productName:"Cocktail Party Short Slim Dress",
        productImageUrl: "images/productForDemo.JPG",
        currencyCode: "UAH",
        originalShopPrice: 200.00,
        minShopPrice: 170.35,
        countOfItemsToGetOneFree: 10
    };
    return product;
}


function saveToSessionStorage(key, value) {
    if (stringContains(key, 'lang')) {
        sessionStorage.lang = value;
    }
    else if (stringContains(key, 'product')) {
        sessionStorage.productId = value.productId;
        sessionStorage.productName = value.productName;
        sessionStorage.productImageUrl = value.productImageUrl;
        sessionStorage.currencyCode = value.currencyCode;
        sessionStorage.originalShopPrice = value.originalShopPrice.toFixed(2);
        sessionStorage.minShopPrice = value.minShopPrice.toFixed(2);
        sessionStorage.countOfItemsToGetOneFree = value.countOfItemsToGetOneFree;
    }
    else if (stringContains(key, 'page')) {
        sessionStorage.page = value;
    }
//    else if (stringContains(key, 'finalShopPrice')) {
//        sessionStorage.finalShopPrice = value;
//    }
    else { }
}

function getFromSessionStorage(key) {

    if (stringContains(key, 'product')) {

    }
    return sessionStorage.getItem(key);
}

function storeDefaultParams() {
    if (typeof (sessionStorage.showPage) == "undefined") {
        saveToSessionStorage("page", "home.html");
    }
    if (typeof (sessionStorage.lang) == "undefined") {
        saveToSessionStorage("lang", "en");
    }
    if (typeof (sessionStorage.priceOriginal) == "undefined") {
        saveToSessionStorage("priceOriginal", "0");
    }
    if (typeof (sessionStorage.priceFinal) == "undefined") {
        saveToSessionStorage("priceFinal", "0");
    }
}


