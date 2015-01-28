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


function setProductInfo() {
    var product = getFromSessionStorage('product');

    var newShopPrice = document.getElementById('finalShopPrice').innerText;
    if (newShopPrice.length == 0) {
        document.getElementById('finalShopPrice').innerText = getFromSessionStorage('originalShopPrice');
    }
    document.getElementById('currencyCodeNewPrice').innerText = getFromSessionStorage('currencyCode');
}

function validateSuggestedPrice(minShopPrice, newShopPrice, clientPrice, countOfItemsToGetOneFree) {
    if (clientPrice >= newShopPrice || (clientPrice / minShopPrice) > 1.3) {
        //alert("We are agree with Your Offer! \nSell price is " + clientPrice + " " + currencyCode);
        saveToSessionStorage('priceFinal', clientPrice);
        runSpinnerWithRedirect('spinnerPlace', 'thankYou.html');
    }
    else {
        var newOfferPrice = generateNewShopPrice(minShopPrice, newShopPrice, clientPrice, countOfItemsToGetOneFree);
        document.getElementById('finalShopPrice').innerText = newOfferPrice.toFixed(2);
        document.getElementById('clientPriceTxt').value = "";
        saveToSessionStorage('priceFinal', newOfferPrice);
        //alert("We've just provided Best Offer. \nClick [Buy Now!] to agree or suggest your price!");
    }
}
