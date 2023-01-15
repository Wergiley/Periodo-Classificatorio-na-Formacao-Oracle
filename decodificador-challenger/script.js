var button = document

function criptografarMensagem() {
  let mensagem = document.querySelector('textarea').value.split('')
  if (mensagem.join()) {
    let caracteresParaAlterar = [
      'a',
      'e',
      'i',
      'o',
      'u',
      'A',
      'E',
      'I',
      'O',
      'U'
    ]
    for (let i = 0; i < mensagem.length; i++) {
      for (let j = 0; j < caracteresParaAlterar.length; j++) {
        if (mensagem[i] == caracteresParaAlterar[j])
          if (
            caracteresParaAlterar[j] == 'a' ||
            caracteresParaAlterar[j] == 'A'
          )
            mensagem[i] = 'ai'
          else if (
            caracteresParaAlterar[j] == 'e' ||
            caracteresParaAlterar[j] == 'E'
          )
            mensagem[i] = 'enter'
          else if (
            caracteresParaAlterar[j] == 'i' ||
            caracteresParaAlterar[j] == 'I'
          )
            mensagem[i] = 'imes'
          else if (
            caracteresParaAlterar[j] == 'o' ||
            caracteresParaAlterar[j] == 'O'
          )
            mensagem[i] = 'ober'
          else if (
            caracteresParaAlterar[j] == 'u' ||
            caracteresParaAlterar[j] == 'U'
          )
            mensagem[i] = 'ufat'
      }
    }
    mensagem = mensagem.join('')
    let imagem = document.getElementsByClassName('img-criptografia')[0]
    let informacoes = document.getElementsByTagName('p')

    imagem.style.display = 'none'
    for (let i = 2; i < informacoes.length - 2; i++) {
      informacoes[i].style.display = 'none'
      informacoes[i + 1].style.display = 'none'
    }
    let campoMensagem = document.getElementsByClassName('mensagem-criada')[0]
    campoMensagem.style.display = 'block'
    campoMensagem.innerHTML = mensagem
    let botaoCopiar = (document.querySelector('.copiar').style.display =
      'block')
  }
}

function descriptografarMensagem() {
  let mensagem = document
    .querySelector('textarea')
    .value.replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u')
  if (mensagem) {
    let imagem = document.getElementsByClassName('img-criptografia')[0]
    let informacoes = document.getElementsByTagName('p')

    imagem.style.display = 'none'
    for (let i = 2; i < informacoes.length - 2; i++) {
      informacoes[i].style.display = 'none'
      informacoes[i + 1].style.display = 'none'
    }
    let campoMensagem = document.getElementsByClassName('mensagem-criada')[0]
    campoMensagem.style.display = 'block'
    campoMensagem.innerHTML = mensagem
    let botaoCopiar = (document.querySelector('.copiar').style.display =
      'block')
  }
}
var auxImagem = false
function alterarTelaCriptografia() {
  let imagem = document.getElementsByClassName('img-criptografia')[0]
  let informacoes = document.getElementsByTagName('p')
  if (document.querySelector('textarea').value.trim().length > 0) {
    imagem.src = 'images/engrenagem.gif'

    for (let i = 2; i < informacoes.length - 2; i++) {
      informacoes[i].innerHTML = '...............'
      informacoes[i + 1].innerHTML = ''
    }
  } else {
    imagem.src = ''
    auxImagem = false
    for (let i = 2; i < informacoes.length - 2; i++) {
      informacoes[i].innerHTML = 'Nenhuma mensagem encontrada'
      informacoes[i + 1].innerHTML =
        'Digite o texto que você deseja criptografar ou descriptografar'
    }
  }
}

function copiar() {
  let texto = document.querySelector('.mensagem-criada').textContent
  navigator.clipboard.writeText(texto)
  alert('Mensagem copiada')
}
