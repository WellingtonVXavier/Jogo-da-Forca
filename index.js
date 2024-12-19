let palavraArray;
let vidas = 6;
let letraDigitadas = [];
let letraDigitadaFiltro = [];

let body = document.querySelector("body");
let divConteiner = document.querySelector("div");
body.appendChild(divConteiner);

function iniciarJogo() {
  let modal = document.getElementById("modal");
  modal.style.display = "block";

  let btnConfirmar = document.getElementById("btnConfirmar");
  let closeModal = document.getElementById("closeModal");

  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  btnConfirmar.onclick = function () {
    let palavra = document.getElementById("inputPalavra").value;
    if (palavra) {
      console.log("Palavra digitada: ", palavra);
      desenharTela(palavra);
      modal.style.display = "none";
    } else {
      alert("Digite uma palavra!");
    }
  };
}

function desenharTela(palavra) {
  let campos = palavra.split("");
  console.log(campos);
  palavraArray = campos;
  desenharCampos(palavraArray);
  retirarBotaoTela();
  desenharInputPegaLetra();
  desenharVidas(vidas);
  desenharCampoLetras();
}

function desenharCampos(campos) {
  let divConteiner = document.querySelector("#game1");
  divConteiner.innerHTML = "";

  campos.forEach((campo, i) => {
    let p = document.createElement("p");
    p.setAttribute("id", `p${i}`);
    if (campo === " ") {
      p.innerHTML = "-";
    } else {
      p.innerHTML = "_";
    }
    divConteiner.appendChild(p);
  });
}

function retirarBotaoTela() {
  let btnStart = document.querySelector("#start");
  btnStart.parentNode.removeChild(btnStart);
}

function restartJogo() {
  document.location.reload(true);
}

function desenharInputPegaLetra() {
  let divLetra = document.querySelector("#divLetra");

  let input = document.createElement("input");
  input.setAttribute("maxlength", "1");
  input.setAttribute("placeholder", "Digite uma letra");
  input.setAttribute("id", "letraInput");
  input.classList.add("form-control", "form-control-lg", "rounded", "w-100");

  divLetra.appendChild(input);

  desenharBotao();
}

function desenharBotao() {
  let divLetra = document.querySelector("#divLetra");

  let btnVerificar = document.querySelector("#btnVerificar");
  if (!btnVerificar) {
    btnVerificar = document.createElement("button");
    btnVerificar.setAttribute("id", "btnVerificar");
    btnVerificar.classList.add("btn", "btn-warning", "mt-3");
    btnVerificar.innerHTML = "Verificar";
    btnVerificar.setAttribute("onClick", "verificarLetra()");
    divLetra.appendChild(btnVerificar);
  }
}

function desenharBotao() {
  let btnVerificar = document.createElement("button");
  btnVerificar.innerHTML = "Verificar";
  btnVerificar.setAttribute("class", "btn btn-warning mt-3");
  btnVerificar.setAttribute("id", "btnVerificar");
  divLetra.appendChild(btnVerificar);
  btnVerificar.setAttribute("onClick", "verificarLetra()");
}

function verificarLetra() {
  let letraValor = document.querySelector("#letraInput").value;
  letraDigitadas.push(letraValor);
  filtrarArrayLetras(letraDigitadas);
  desenharLetrasDigitadas();
  if (letraValor && !letraValor == "") {
    existeLetra(palavraArray, letraValor);
    trocarLetra(palavraArray, letraValor);
    verificarVidas(vidas);
    let letraValor1 = (document.querySelector("#letraInput").value = "");
    verificarPalavraCompleta();
  }
}

function desenharVidas(vidas) {
  for (let i = 0; i < vidas; i++) {
    let heart = document.createElement("i");
    heart.setAttribute("class", "fa-solid fa-heart");
    divjogo = document.querySelector("#game2");
    divjogo.appendChild(heart);
  }
}

function deletarVida(vidas) {
  let heart = document.querySelector("i");
  heart.parentNode.removeChild(heart);
}

function resetarJogo() {
  document.location.reload(true);
}

function desenharCampoLetras() {
  let letra = document.createElement("p");
  letra.setAttribute("id", "l1");
  letra.classList.add("letra-maior");
  divjogo = document.querySelector("#game3");
  divjogo.appendChild(letra);
}

function desenharLetrasDigitadas() {
  let letra2 = document.querySelector("#l1");
  letra2.innerHTML = `${letraDigitadasFiltro}`;
}

function retirarBotaoTela() {
  let btnStart = document.querySelector("#start");
  btnStart.parentNode.removeChild(btnStart);
}

function trocarLetra(palavraArray, letraValor) {
  palavraArray.forEach((letra, i) => {
    if (letra.toUpperCase() === letraValor.toUpperCase()) {
      let p = document.querySelector(`#p${i}`);
      p.innerHTML = letra;
    }
  });
}

function existeLetra(palavraArray, letraValue) {
  let existe = palavraArray.some((l) => l == letraValue);
  if (!existe) {
    vidas--;
    deletarVida();
  }
}

function verificarVidas(vidas) {
  if (vidas <= 0) {
    let btnVerificar = document.querySelector("#btnVerificar");
    btnVerificar.setAttribute("disabled", "disabled");

    let modalGameOver = document.getElementById("gameOverModal");
    modalGameOver.style.display = "block";

    let closeModal = document.querySelector("#closeModal");
    closeModal.onclick = function () {
      modalGameOver.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modalGameOver) {
        modalGameOver.style.display = "none";
      }
    };

    let btnRestart = document.querySelector("#btnRestart");
    btnRestart.addEventListener("click", function () {
      restartJogo();
    });
  }
}

function filtrarArrayLetras(letraDigitadas) {
  letraDigitadas.sort();
  letraDigitadasFiltro = letraDigitadas.filter((letra, index, self) => {
    return index === self.indexOf(letra);
  });
}

function verificarPalavraCompleta() {
  const palavraCompleta = palavraArray.every((letra, i) => {
    let p = document.querySelector(`#p${i}`);
    return p.innerHTML === letra;
  });

  if (palavraCompleta) {
    let ganhouModal = document.getElementById("ganhouModal");
    ganhouModal.style.display = "block";

    let closeModal = document.querySelector("#closeGanhouModal");
    closeModal.onclick = function () {
      ganhouModal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === ganhouModal) {
        ganhouModal.style.display = "none";
      }
    };

    let btnReiniciar = document.querySelector("#btnReiniciar");
    btnReiniciar.addEventListener("click", function () {
      restartJogo();
    });
  }
}
