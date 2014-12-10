function generateNewShopPrice(minShopPrice, currentShopPrice, clientPrice, countOfItemsToGetOneFree) {
    var newShopprice;//by default it equals to currentShopPrice

    if (clientPrice < currentShopPrice && clientPrice >= minShopPrice) {
        newShopprice = minShopPrice + ((currentShopPrice - minShopPrice) * (clientPrice / currentShopPrice));
    }
    else if (clientPrice < (currentShopPrice - minShopPrice)) {
//        alert("Wanna get it free? \nBuy " + countOfItemsToGetOneFree + " items and get 1 free!");
        newShopprice = currentShopPrice - ((currentShopPrice - minShopPrice) / 10);
    }
    else if (clientPrice <= 0) {
        newShopprice = currentShopPrice;
    }
    else {
        newShopprice = currentShopPrice;
    }
    return newShopprice;
}

function generateNewShopPriceWithMinimumChange(minShopPrice, currentShopPrice, clientPrice) {
    var newShopprice;//by default it equals to currentShopPrice

    if (clientPrice < currentShopPrice && clientPrice >= minShopPrice) {
        newShopprice = minShopPrice + ((currentShopPrice - minShopPrice) * (clientPrice / currentShopPrice));
    }
    else if (clientPrice < (currentShopPrice - minShopPrice)) {
        newShopprice = currentShopPrice - ((currentShopPrice - minShopPrice) / 10);
    }
    else if (clientPrice <= 0) {
        newShopprice = currentShopPrice;
    }
    else {
        newShopprice = currentShopPrice;
    }
    return newShopprice;
}




function genRandomDiscount(minShopPrice, originalShopPrice) {

    var result = (Math.random() * (originalShopPrice - minShopPrice)) + 1;

    result = Math.floor(result);

    result = (result * 1.01);

    result = result.toFixed(2);

    result = result.split(".")[0] + '.' + result.split(".")[1].substring(0, 2);

    return result;
}

//function buyForDisplayedShopPrice(shopPrice, originalShopPrice, currencyCode) {
//    //alert("You've agreed to buy for price " + shopPrice + " " + currencyCode);
//    transferToBuy(shopPrice, originalShopPrice, currencyCode);
//}

//function transferToBuy(agreedPrice, originalShopPrice, currencyCode) {
//    var transferUrl = "007payNow.htm?dbm=gbo"
//        + "&agreedPrice=" + agreedPrice
//        + "&originalShopPrice=" + originalShopPrice
//        + "&currencyCode=" + currencyCode;
//    window.location.href = transferUrl;
//}

//function getParametersFromCurrentUrl(qs) {
//    qs = qs.split("+").join(" ");

//    var params = {}, tokens,
//        re = /[?&]?([^=]+)=([^&]*)/g;

//    while (tokens = re.exec(qs)) {
//        params[decodeURIComponent(tokens[1])]
//            = decodeURIComponent(tokens[2]);
//    }

//    return params;
//}
