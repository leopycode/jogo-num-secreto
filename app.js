num_secreto = gerar_jogo()
let tentativas = 0
let chutados = []

function gerar_jogo() {
    let num_secreto = parseInt(Math.random() * 100 + 1)
    
    return num_secreto
}

function exibir(id, texto) {
    let campo = document.getElementById(id)
    campo.innerHTML = texto
}

function chutar() {
    chute = document.getElementById('chute').value
    chutados.push(chute)
    tentativas += 1
    console.log(num_secreto)
    if (chute == num_secreto) {
        qtd_tent = tentativas > 1 ? 'tentativas' : 'tentativa'
        exibir('bemvindo', 'Acertou!! Parabéns!!')
        exibir('paragrafo', `Você descobriu o número secreto com ${tentativas} ${qtd_tent}!`)
        document.getElementById('novo').removeAttribute('disabled')
    } else {
        if (chute > num_secreto) {
            exibir('paragrafo', `O número secreto é menor que ${chute}`)
        } else {
            exibir('paragrafo', `O número secreto é maior que ${chute}`)
        }
        document.getElementById('chute').value = ''
    }
    texto = 'Números chutados: '
    for (i = 0; i < chutados.length; i++) {
        exibir('num_chutados', texto += `${chutados[i]} `)
    }
}

function novo() {
    tentativas = 0
    chutados = []
    num_secreto = gerar_jogo()
    exibir('bemvindo', 'Bem vindo ao jogo')
    exibir('paragrafo', 'Escolha um número entre 1 e 100')
    exibir('num_chutados', '')
    document.getElementById('chute').value = ''
    document.getElementById('novo').setAttribute('disabled', true)
}