function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || (fano.value) > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
        if ( idade >=0 && idade < 10 ){
            img.setAttribute('src' , 'foto.criança mas.jpeg')
            genero = 'Criança'
        } else if ( idade < 21 ){
            img.setAttribute('src', 'foto.jovem.jpeg')
            genero = 'Jovem'
        } else if ( idade < 50 ){
            img.setAttribute('src','foto.homem.jpeg')
            genero = 'Adulto'
        } else {
            img.setAttribute('src', 'foto.senhor.jpeg')
            genero = 'Idoso'
        }
        } else if (fsex[1].checked) {
        if ( idade >=0 && idade < 10 ){
            img.setAttribute('src', 'foto.criança fem.jpeg')
            genero = 'Criança' 
        } else if ( idade < 21 ){
            img.setAttribute('src', 'foto.jovem fem.jpeg')
            genero = 'Jovem'
        } else if ( idade < 50 ){
            img.setAttribute('src', 'foto.muler.jpeg')
            genero = 'Adulto'  
        } else {
            img.setAttribute('src', 'foto.senhora.jpeg')
            genero = 'Idoso'
        }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero}(a) com ${idade} anos. `
        res.appendChild(img)
    }
}
