# Sorteador de Números

Um simples sorteador de números desenvolvido em HTML e JavaScript. Este projeto gera um número aleatório dentro de um intervalo definido e exibe o resultado para o usuário.

## Visão Geral

Este projeto consiste em uma página web interativa onde o usuário pode gerar um número aleatório dentro de um intervalo especificado. Ideal para sorteios, simulações, e como uma ferramenta de aprendizado para principiantes em programação web.

## Funcionalidades

- Geração de um número aleatório dentro de um intervalo definido.
- Interface interativa com HTML e JavaScript.
- Exibição do número sorteado na tela.
- Mensagens para informar o usuário sobre o sorteio.

## Tecnologias Utilizadas

- HTML
- JavaScript
- CSS

## Como Usar

1. Clone o repositório para sua máquina local:

    ```bash
    git clone https://github.com/AndressaTurchetto/sorteador-de-numeros-alura.git
    ```

2. Navegue para o diretório do projeto:

    ```bash
    cd sorteador-de-numeros
    ```

3. Abra o arquivo `index.html` em um navegador da web para executar o sorteador.

## Exemplo de Uso

1. Acesse a página no navegador.
2. Insira os valores mínimo e máximo no intervalo de números desejado.
3. Clique no botão para gerar um número aleatório.
4. O número sorteado será exibido na tela.

## Captura de Tela

![Exemplo de Interface](img/solicita-info.png)
![Exemplo de Interface](img/tela-inicial.pngg)
![Exemplo de Interface](img/numero-correto.png)
![Exemplo de Interface](img/numero-errado.png)

## Código

Aqui está um exemplo do código JavaScript utilizado no projeto:

```javascript
function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('botaoSorteio').addEventListener('click', function() {
    let min = parseInt(document.getElementById('inputMin').value);
    let max = parseInt(document.getElementById('inputMax').value);
    let resultado = sortearNumero(min, max);
    document.getElementById('resultado').textContent = `Número sorteado: ${resultado}`;
});
