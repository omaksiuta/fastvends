function keyPadInput(txtFiledId, message, maxLen) {

    var txtFiled = document.getElementById(txtFiledId);

    if (message == 'deleteEndRightSymbol') {
        if (txtFiled.innerHTML.length > 0) {
            txtFiled.innerHTML = txtFiled.innerHTML.substring(0, txtFiled.innerHTML.length - 1);
        }
    }
    else if (message == 'clear') {
        txtFiled.innerHTML = '';
    }
    else {
        if (txtFiled.innerHTML.length > 0) {
            if (maxLen.length > 0) {
                if (maxLen > txtFiled.innerHTML.length) {
                    txtFiled.innerHTML = txtFiled.innerHTML + message;
                }
            }
            else {
                txtFiled.innerHTML = txtFiled.innerHTML + message;
            }
        }
        else {
            txtFiled.innerHTML = txtFiled.innerHTML + message;
        }
    }

    event.stopPropagation();
}
