let texto =
  "O computador é uma máquina capaz de variados tipos de tratamento automático de informações ou processamento de dados. Entende-se por computador um sistema físico que realiza algum tipo de computação. Assumiu-se que os computadores pessoais e laptops são ícones da era da informação. O primeiro computador eletromecânico foi construído por Konrad Zuse (1910–1995). Atualmente, um microcomputador é também chamado computador pessoal ou ainda computador doméstico.".split(
    ""
  );
let alfabeto = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  ",",
  "(",
  "-",
  "–",
  ")",
  " ",
  "é",
  "á",
  "í",
  "â",
  "ç",
  "ã",
  "õ",
];

// let alfabeto = ['a','b','c']
let padrao = " computador ".split("");
reconhecedor(padrao, texto);

function reconhecedor(padrao, texto) {
  let estadoFinal = padrao.length;
  let tamanhoTexto = texto.length;
  //cria matriz de zeros com tamanho do padrão x tamanho de caracteres do alfabeto
  let afd = new Array(estadoFinal + 1);
  for (let estado = 0; estado < estadoFinal + 1; estado++) {
    //tamanho do array de estado é a quantidade de caracteres do alfabeto
    afd[estado] = new Array(alfabeto.length);
    for (
      let codigoCaractere = 0;
      codigoCaractere < afd[estado].length;
      codigoCaractere++
    ) {
      afd[estado][codigoCaractere] = 0;
    }
  }

  let estado, codigoCaractere;
  // insere cada (estado,codigoCaractere) da matriz um estado
  for (estado = 0; estado <= estadoFinal; ++estado) {
    for (
      codigoCaractere = 0;
      codigoCaractere < afd[estado].length;
      ++codigoCaractere
    ) {
      afd[estado][codigoCaractere] = calculaEstado(
        padrao,
        estadoFinal,
        estado,
        codigoCaractere
      );
    }
  }
  estado = 0;
  let j = 0;
  for (j = 0; j < tamanhoTexto; j++) {
    estado = afd[estado][alfabeto.indexOf(texto[j])];
    if (estado == estadoFinal) {
      console.log("Padrão encontrado no index " + (j - estadoFinal + 1 + 1)); //normalização por conta do caractere vazio
    }
  }
}

function calculaEstado(padrao, estadoFinal, estado, codigoCaractere) {
  // se o estado atual não for terminal e o caractere atual for igual ao caractere esperado pelo padrao, incrementa um estado.
  if (
    estado < estadoFinal &&
    codigoCaractere == alfabeto.indexOf(padrao[estado])
  ) {
    return estado + 1;
  }

  let proximoEstado, i;

  for (proximoEstado = estado; proximoEstado > 0; proximoEstado--) {
    //se o caractere do estado anterior for igual ao caractere atual
    if (alfabeto.indexOf(padrao[proximoEstado - 1]) == codigoCaractere) {
      for (i = 0; i < proximoEstado - 1; i++) {
        //se o caractere deste loop for diferente do proximo caractere esperado pelo padrao, retorna pro estado inicial
        if (padrao[i] != padrao[estado - proximoEstado + 1 + i]) {
          break;
        }
        //ao terminar o loop, retorna o proximo estado
        if (i == proximoEstado - 1) {
          return proximoEstado;
        }
      }
    }
  }
  return 0;
}
