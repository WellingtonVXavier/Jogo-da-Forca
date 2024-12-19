# Jogo da Forca

## Descrição
O **Jogo da Forca** é um jogo clássico de adivinhação de palavras. O objetivo é descobrir uma palavra secreta, uma letra por vez. O jogador tem um número limitado de tentativas (vidas) para acertar as letras, caso contrário, o jogo termina em "Game Over". Ao acertar todas as letras da palavra secreta, o jogador vence o jogo.

## Como Funciona

1. **Iniciar o Jogo**: O jogo começa com uma tela onde o jogador pode digitar a palavra secreta.
2. **Adivinhação de Letras**: O jogador tenta adivinhar as letras da palavra digitando uma letra de cada vez.
3. **Vidas**: O jogador tem um número limitado de vidas. Cada letra errada reduz o número de vidas.
4. **Ganhando o Jogo**: O jogador vence quando todas as letras da palavra secreta são acertadas.
5. **Game Over**: O jogo termina quando o número de vidas chega a zero.

## Funcionalidades

- **Entrada de Palavra**: O jogador pode digitar a palavra secreta no início do jogo.
- **Input de Letras**: O jogador pode digitar uma letra por vez para tentar adivinhar a palavra.
- **Feedback Visual**: O jogo exibe as letras acertadas e as restantes como underscores (`_`).
- **Contagem de Vidas**: As tentativas erradas diminuem as vidas do jogador.
- **Modais de Feedback**: O jogo exibe modais de "Game Over" ou "Você Ganhou!" quando apropriado.

## Como Jogar

1. Ao iniciar o jogo, você será solicitado a digitar uma palavra secreta.
2. Depois, você precisará adivinhar a palavra, letra por letra.
3. Digite uma letra no campo de entrada e clique no botão "Verificar".
4. O jogo mostrará as letras corretas que você adivinhou e as que ainda faltam.
5. Continue jogando até adivinhar toda a palavra ou até perder todas as suas vidas.

## Como Rodar o Projeto

### Requisitos
- **Navegador Web**: O jogo é jogado diretamente no navegador.

### Instruções

1. Clone este repositório para sua máquina local:
    ```bash
    git clone https://github.com/seu-usuario/jogo-da-forca.git
    ```
2. Abra o arquivo `index.html` no seu navegador para jogar o jogo.

## Tecnologias Usadas

- **HTML/CSS**: Para a estrutura e o estilo da página.
- **JavaScript**: Para a lógica do jogo e interatividade.
- **Bootstrap**: Para design responsivo e componentes de interface.

## Contribuição

1. Fork o repositório.
2. Crie uma branch para a sua feature (`git checkout -b minha-feature`).
3. Faça as modificações necessárias e envie um commit (`git commit -am 'Adicionando uma nova feature'`).
4. Envie para o branch original (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença

Este projeto é licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
