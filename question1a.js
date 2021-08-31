let cadeias = ["0", "0100", "100", "1", "1001", "010", "0001"];
cadeias.forEach((cadeia) => {
  const AFD = {
    estado: "q1",
    transacoes: {
      q1: {
        0: function () {
          console.log("Estado atual:", this.estado);
          // console.log("Leu o caractere 0");
          this.mudarEstado("q1");
        },
        1: function () {
          console.log("Estado atual:", this.estado);
          // console.log("Leu o caractere 1");
          this.mudarEstado("q2");
        },
      },
      q2: {
        0: function () {
          console.log("Estado atual:", this.estado);
          // console.log("Leu o caractere 0");
          this.mudarEstado("q3");
        },
      },
      q3: {
        0: function () {
          console.log("Estado atual:", this.estado);
          // console.log("Leu o caractere 0");
          this.mudarEstado("q1");
        },
      },
    },
    enviaChar(caractere) {
      const funcao = this.transacoes[this.estado][caractere];

      if (funcao) {
        funcao.apply(AFD);
      } else {
        console.log("Estado de máquina inválido");
        AFDTeste.error = true;
      }
    },
    mudarEstado(novoEstado) {
      this.estado = novoEstado;
    },
  };

  let AFDTeste = Object.create(AFD, {
    name: {
      value: "AFDTeste",
    },
  });

  console.log("==início==");
  console.log(cadeia);
  cadeia = cadeia.split("");
  cadeia.forEach((caractere) => {
    AFDTeste.enviaChar(caractere);
  });
  if (AFDTeste.estado === "q1" && !AFDTeste.error) {
    console.log("Estado atual: " + AFDTeste.estado);
    console.log("Cadeia aceita");
    console.log("==fim==");
  } else {
    console.log("Estado atual: " + AFDTeste.estado);
    console.log("Cadeia rejeitada");
    console.log("==fim==");
    if (AFDTeste.error) {
      console.log(
        "A Cadeia não pertence a linguagem ou não segue as regras da linguagem"
      );
    }
  }
});
