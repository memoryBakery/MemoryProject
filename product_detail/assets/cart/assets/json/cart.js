function increaseValue1(a) {
    var value = parseInt(a, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('quantity1').value = value;
}

function decreaseValue1(a) {
    var value = parseInt(a, 10);
    value = isNaN(value) ? 0 : value;
    value < 2 ? value = 2 : '';
    value--;
    document.getElementById('quantity1').value = value;
}
function increaseValue2(a) {
    var value = parseInt(a, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('quantity2').value = value;
}

function decreaseValue2(a) {
    var value = parseInt(a, 10);
    value = isNaN(value) ? 0 : value;
    value < 2 ? value = 2 : '';
    value--;
    document.getElementById('quantity2').value = value;
}
function increaseValue3(a) {
    var value = parseInt(a, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('quantity3').value = value;
}

function decreaseValue3(a) {
    var value = parseInt(a, 10);
    value = isNaN(value) ? 0 : value;
    value < 2 ? value = 2 : '';
    value--;
    document.getElementById('quantity3').value = value;
}

function changeState() {
    var val = document.getElementById('input-voucher').value;
    if (val.length > 0) {
        document.getElementById('apply').disabled = '';
    } else {
        document.getElementById('apply').disabled = 'disabled';
    }
}