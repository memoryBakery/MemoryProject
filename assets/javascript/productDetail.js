function Check1(a) {
    if (a == "" || a==0) {
        alert("Mời bạn nhập số lượng");
    }
    document.getElementById("quantity1").value =1;
}
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