function showIFramePage(iframeId) {
    //document.getElementById(iframeIds[i]).src = getFromSessionStorage('page');
    //document.getElementById(iframeIds[i]).contentWindow.location.reload();
    var iframe = document.getElementById(iframeId);

    return iframe.src.split('/').pop();
}

function refreshIFramePage(iframeId) {
    //document.getElementById(iframeIds[i]).src = getFromSessionStorage('page');
    //document.getElementById(iframeIds[i]).contentWindow.location.reload();
    var iframe = document.getElementById(iframeId);
    iframe.src = getFromSessionStorage('page');
}

function redirectToPage(page) {
    window.location = page;
}

function stringContains(inputString, stringToFind) {
    return (inputString.indexOf(stringToFind) != -1);
}

function showHideElement(element) {
    if ($(element).is(":visible")) {
        $(element).hide();   // Hide button
    }
    else {
        $(element).show();
    }
}

function translate(tagIdsToTranslate) {

    //storeDefaultParams();

    //saveToSessionStorage('page', window.location.pathname.split('/').pop());

    var lang = getFromSessionStorage("lang");

    if (lang != "") {
        //Load jSON
        var json = translations;
        //var obj = jQuery.parseJSON(json);

        //Loop thgrue all varuiable that need to be translated
        var len = tagIdsToTranslate.length;
        for (var i = 0; i < len; ++i) {
            tagId = tagIdsToTranslate[i];
            //console.log(tagId);

            //Find proper translation in jSon
            jQuery.each(json, function (oKey, oRow) {
                if (stringContains(oKey, tagId)) {
                    //console.log(oKey);
                    jQuery.each(oRow, function (oKeyKey, oKeyValue) {
                        if (stringContains(oKeyKey, lang)) {
                            // console.log(oKeyKey);
                            //console.log(oKeyValue);

                            //document.getElementById(tagId).innerText = oKeyValue;
                            $('#' + tagId).text(oKeyValue);
                        }
                    });
                }
            });
        }
    }
}

function getParameterValue(parameter, returnValueOnly) {
    parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + parameter + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else {
        if (returnValueOnly) {
            return results[1];
        }
        else {
            return results[0];
        }
    }
}


var opts = {
    lines: 13, // The number of lines to draw
    length: 17, // The length of each line
    width: 10, // The line thickness
    radius: 100, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 58, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: 'red', // #rgb or #rrggbb or array of colors
    speed: 0.9, // Rounds per second
    trail: 100, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: '50%', // Top position relative to parent
    left: '50%' // Left position relative to parent
};

function runSpinnerWithNothing(elementId) {
    var target = document.getElementById(elementId);
    var spinner = new Spinner(opts).spin(target);
    setTimeout(function () {
        spinner.stop();
    }, 500);
};

function runSpinnerWithPageReload(elementId) {
    var target = document.getElementById(elementId);
    var spinner = new Spinner(opts).spin(target);
    setTimeout(function () {
        spinner.stop();
        location.reload();
    }, 500);
};

function runSpinnerWithRedirect(elementId, page) {
    var target = document.getElementById(elementId);
    var spinner = new Spinner(opts).spin(target);
    setTimeout(function () {
        spinner.stop();
        redirectToPage(page);
    }, 500);
};
