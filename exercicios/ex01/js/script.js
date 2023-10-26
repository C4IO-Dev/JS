function carregar() {
    var msg = document.getElementById('hora')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`

    if (hora >= 0 && hora < 12) {
        imagem.src = 'imagens/manha-menor.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        imagem.src = 'imagens/tarde-menor.png'
        document.body.style.background = '#b98463'
    } else {
        imagem.src = 'imagens/noite-menor.png'
        document.body.style.background = '#515154'
    }
}

