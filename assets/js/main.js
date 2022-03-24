// Criando a função base para a construção da calculadora
function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    // Chamando as factory functions para disponibilizar o uso de teclas específicas
    inicia() {
      this.cliqueBotoes();
      this.pressionaBackspace();
      this.pressionaEnter();
    },
    // Criando a função para uso de Backspace para limpar a caixa de texto
    pressionaBackSpace() {
      this.display.addEventListener("keydown", (e) => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.clearDisplay();
        }
      });
    },
    // Criando a função para uso da tecla Enter pra realizar a conta
    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keycode === 13) {
          this.realizaConta();
        }
      });
    },
    // Criando a função para realizar as contas da calculadora
    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta inválida");
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },
    // Criando a função para limpar a caixa de texto
    clearDisplay() {
      this.display.value = "";
    },
    // Criando a função para apagar item por item
    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },
    // Criando a função para disponibilizar o clique nos botões numerais
    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }

        this.display.focus();
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

// É importante ressaltar que o This varia de acordo com que chama
// em arrow function, teremos o this sempre travado a quem criou o elemento

// Criando a variável para executar a função
const calculadora = criaCalculadora();
calculadora.inicia();
