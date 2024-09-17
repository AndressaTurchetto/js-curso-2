let numeroSecreto;
let tentativas;
let inputNumero = document.getElementById('inputNumero');
let mensagemResultado = document.getElementById('mensagemResultado');
let tentativasContador = document.getElementById('tentativasContador');
let botaoReiniciar = document.getElementById('reiniciar');

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1; 
    tentativas = 0;
    mensagemResultado.textContent = '';
    tentativasContador.textContent = '';
    botaoReiniciar.disabled = true; 
}

function verificarChute() {
    let chute = parseInt(inputNumero.value);
    
    if (isNaN(chute) || chute < 1 || chute > 10) {
        mensagemResultado.textContent = 'Por favor, escolha um número entre 1 e 10.';
        return;
    }

    tentativas++;
    
    if (chute === numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let resultadoMensagem = `Parabéns! O número secreto era ${numeroSecreto}. Você acertou com ${tentativas} ${palavraTentativa}!`;
        alert(resultadoMensagem);
        mensagemResultado.textContent = resultadoMensagem;
        botaoReiniciar.disabled = false;
        inputNumero.value = ''; 
    } else {
        if (chute > numeroSecreto) {
            mensagemResultado.textContent = 'O número secreto é menor.';
        } else {
            mensagemResultado.textContent = 'O número secreto é maior.';
        }
        inputNumero.value = ''; 
    }

    tentativasContador.textContent = `Tentativas: ${tentativas}`;
}

function reiniciarJogo() {
    iniciarJogo();
    inputNumero.value = '';
}

window.onload = iniciarJogo;
