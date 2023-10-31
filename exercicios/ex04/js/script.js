function multiplica() {
    var num = document.getElementById('num')
    var tab = document.getElementById('tabuada')

    if (num.value.length == 0) {
        alert("Por Favor Digite um número!")

    } else {
        var num = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            tab.appendChild(item)
            c++
        }
    }
}