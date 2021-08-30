let cadeias = [
  100, 25, 25, 25, 25, 100, 50, 50, 100, 100, 25, 50, 25, 50, 25, 25, 100,
];
let cadeiaGerada = [];
const AFD = {
  estado: 0,
  transacoes: {
    0: {
      25: function () {
        console.log("Estado atual:", this.estado);
        this.mudarEstado(25);
        cadeiaGerada.push(0);
      },
      50: function () {
        console.log("Estado atual:", this.estado);
        this.mudarEstado(50);
        cadeiaGerada.push(0);
      },
      100: function () {
        console.log("Estado atual:", this.estado);
        this.mudarEstado(100);
        cadeiaGerada.push(1);
      },
    },
    25: {
      25: function () {
        console.log("Estado atual:", this.estado);
        this.mudarEstado(50);
        cadeiaGerada.push(0);
      },
      50: function () {
        console.log("Estado atual:", this.estado);
        this.mudarEstado(75);
        cadeiaGerada.push(0);
      },
      100: function () {
        console.log("Estado atual:", this.estado);
        this.mudarEstado(25);
        cadeiaGerada.push(1);
      },
    },
    50: {
      25: function () {
        console.log("Estado atual:", this.estado);
        this.mudarEstado(75);
        cadeiaGerada.push(0);
      },
      50: function () {
        console.log("Estado atual:", this.estado);
        this.mudarEstado(100);
        cadeiaGerada.push(1);
      },
      100: function () {
        console.log("Estado atual:", this.estado);
        this.mudarEstado(50);
        cadeiaGerada.push(1);
      },
    },
    75: {
      25: function () {
        console.log("Estado atual:", this.estado);
        this.mudarEstado(100);
        cadeiaGerada.push(1);
      },
      50: function () {
        console.log("Estado atual:", this.estado);
        this.mudarEstado(25);
        cadeiaGerada.push(1);
      },
      100: function () {
        console.log("Estado atual:", this.estado);
        this.mudarEstado(75);
        cadeiaGerada.push(1);
      },
    },
    100: {
      25: function () {
        console.log("Estado atual:", this.estado);
        this.mudarEstado(25);
        cadeiaGerada.push(0);
      },
      50: function () {
        console.log("Estado atual:", this.estado);
        this.mudarEstado(50);
        cadeiaGerada.push(0);
      },
      100: function () {
        console.log("Estado atual:", this.estado);
        this.mudarEstado(100);
        cadeiaGerada.push(1);
      },
    },
  },
  enviaValor(valor) {
    const funcao = this.transacoes[this.estado][valor];

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

cadeias.forEach((valor) => {
  AFDTeste.enviaValor(valor);
  console.log("Entrou: " + valor);
});
console.log(cadeias);
console.log(cadeiaGerada);
