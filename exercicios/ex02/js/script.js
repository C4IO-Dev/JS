function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById("resultado")

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = ''

        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            if (idade >= 0 && idade < 14) {
                img.setAttribute('src', 'imagens/criancam-redonda.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemm-redonda.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem-redonda.png')
            } else {
                img.setAttribute('src', 'imagens/idoso-redonda.png')
            }
        } else if (fsex[1].checked) {
            if (idade >= 0 && idade < 14) {
                img.setAttribute('src', 'imagens/criancaf-redonda.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemf-redonda.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher-redonda.png')
            } else {
                img.setAttribute('src', 'imagens/idosa-redonda.png')
            }
        }

        res.appendChild(img)
    }
}
