function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.style.width = '250px'
        img.style.height = '250px'
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'f-menino.png')
            } else if (idade <= 21) {
                // jovem
                img.setAttribute('src', 'f-jovem-h.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'f-homem.png')
                // adulto
            } else {
                img.setAttribute('src', 'f-idoso.png')
                //idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'f-menina.png')
                // criança
            } else if (idade <= 21) {
                img.setAttribute('src', 'f-jovem-m.png')
                // jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'f-mulher.png')
                // adulto
            } else {
                img.setAttribute('src', 'f-idosa.png')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}