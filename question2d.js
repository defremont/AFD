let cadeias = ["ac", "bac", "a", "aabbac", "abc", "bc"];
cadeias.forEach((cadeia) => {
  const AFD = {
    estado: "q0",
    transacoes: {
      q0: {
        a: function () {
          console.log("Estado atual:", this.estado);
          this.mudarEstado("q1");
        },
        b: function () {
          console.log("Estado atual:", this.estado);
          this.mudarEstado("q2");
        },
      },
      q1: {
        a: function () {
          console.log("Estado atual:", this.estado);
          this.mudarEstado("q1");
        },
        b: function () {
          console.log("Estado atual:", this.estado);
          this.mudarEstado("q2");
        },
        c: function () {
          console.log("Estado atual:", this.estado);
          this.mudarEstado("q3");
        },
      },
      q3: {
        c: function () {
          console.log("Estado atual:", this.estado);
          this.mudarEstado("q3");
        },
      },
      q2: {
        a: function () {
          console.log("Estado atual:", this.estado);
          this.mudarEstado("q3");
        },
        b: function () {
          console.log("Estado atual:", this.estado);
          this.mudarEstado("q2");
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
  if (
    (AFDTeste.estado === "q3") | (AFDTeste.estado === "q1") &&
    !AFDTeste.error
  ) {
    console.log("Estado atual: " + AFDTeste.estado);
    console.log("Cadeia aceita");
    console.log("==fim==");
  } else {
    console.log("Estado atual: " + AFDTeste.estado);
    console.log("Cadeia rejeitada");
    if (AFDTeste.error) {
      console.log("A Cadeia não pertence a linguagem");
    } else {
      console.log("A Cadeia não segue as regras da linguagem");
    }
    console.log("==fim==");
  }
});
