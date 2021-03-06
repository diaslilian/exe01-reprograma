const input = require("readline-sync");

// **Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)

// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação
// e divisão), cada uma delas recebendo 2 números como parâmetros e retornando o resultado

function soma(numero1, numero2) {
  return numero1 + numero2;
}

console.log(soma(5, 6));

function subtracao(numero1, numero2) {
  return numero1 - numero2;
}

console.log(subtracao(2, 1));

function multiplicacao(numero1, numero2) {
  return numero1 * numero2;
}

console.log(multiplicacao(9, 4));

function divisao(numero1, numero2) {
  return numero1 / numero2;
}

console.log(divisao(4, 2));

// OUTRA OPÇÃO, usando switch case

function operacoes(num1, num2, operacao) {
  switch (operacao) {
    case "soma":
      return num1 + num2;

    case "subtracao":
      return num1 - num2;

    case "multiplicacao":
      return num1 * num2;

    case "divisao":
      return num1 / num2;
  }
}

console.log("Operação: ", operacoes(2, 2, "multiplicacao"));

// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores
// iguais a 0 (zero). Adicione esta lógica nas funções.

function multiplicaSemZero(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return `não pode ter o número zero`;
  }

  return num1 * num2;
}

console.log(multiplicaSemZero(4, 5));

function divideSemZero(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return `não pode ter o zero`;
  }

  return num1 / num2;
}

console.log(divideSemZero(6, 0));

// 3) crie uma função que chame qualquer uma das funções acima e imprima o resultado no formato
// de String. Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

function chamaFuncao() {
  console.log(`O resultado da operação é ${soma(5, 4)}`);
}

chamaFuncao();

// 4) utilizando as funções de soma e multiplicação dos exercícios anteriores, crie uma função
// que resolva a conta 36325 * (9824 + 777).

function contaSomaMultiplica() {
  console.log(multiplicacao(36325, soma(9824, 777)));
}

contaSomaMultiplica();

// 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores
// entre eles. Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre
// 1 e 100. Em seguida, some estes números e devolva uma string com o resultado no formato: "a soma
// de [número aleatório] e [número aleatório] é XXX". Você vai ter que pesquisar o método do JS para
// gerar números aleatórios, `Math.random()` e como utilizá-lo.

function somaAleatorios(min, max) {
  const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const num2 = Math.floor(Math.random() * (max - min + 1)) + min;

  return `a soma de ${num1} e ${num2} é ${num1 + num2}`;
}

console.log(somaAleatorios(1, 100));

// test
// function numeroAleatorio() {
//   let maximo = 100;
//   let resultados = 2;

//   let arr = [];

//   for (let num1 = 0; num1 < maximo; num1++) {
//     arr[num1] = num1 + 1;
//   }

//   let p, n;

//   for (p = arr.length; p; ) {
//     n = (Math.random() * p--) | 0;
//     tmp = arr[n];
//     arr[n] = arr[p];
//     arr[p] = tmp;
//   }

//   for (let i = 0; i < resultados; i++) {
//     console.log(arr[i]);
//   }
// }

// numeroAleatorio();

// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros
// 2. Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar
// a string: "Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.

let num1 = input.question(`valor número 1: `);
let num2 = input.question(`valor número 2: `);
let num3 = input.question(`valor número 3: `);

function preenchaValores(num1, num2, num3) {
  if (num1 != undefined && num2 != undefined && num3 != undefined) {
    console.log(`Preencha todos os valores corretamente!`);
  }

  return num1 * num2 * num3 + 2;
}

preenchaValores(num1, num2, num3);

// 7) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um argumento for passado, retorne o valor do argumento.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e
// o resultado dividido pelo terceiro.
// 5. Se nenhum argumento for passado, retorne "não recebeu parâmetro"

function recebeTresParametros(param1, param2, param3) {
  if (param1 != undefined && param2 === undefined && param3 === undefined) {
    return param1;
  } else if (
    param1 != undefined &&
    param2 != undefined &&
    param3 === undefined
  ) {
    return param1 + param2;
  } else if (
    param1 != undefined &&
    param2 != undefined &&
    param3 != undefined
  ) {
    return (param1 + param2) / param3;
  } else {
    return "Não recebeu parâmetro";
  }
}

console.log(recebeTresParametros(2, 2, 2));

// 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida.
// Por exemplo, recebendo "reprograma", vai retornar "amargorper". Para isso, você vai ter que
// pesquisar como usar JavaScript para inverter uma string.

function inverteString(str) {
  return str.split("").reverse().join("");
}

console.log(inverteString("reprograma"));

// 9) agora que você já sabe reverter strings, crie uma função que receba uma string, verifique
// se é um palíndromo e retorne true ou false. Exemplo de palíndromo: "arara".

function palindromo(str) {
  return str === str.split("").reverse().join("");
}

console.log(palindromo("arara"));

// 10) crie uma função que receba duas strings como parâmetros e retorne a string com a maior
// quantidade de caracteres. Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a
// função deve retornar "chocolate"

function retornaMaiorString(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else if (str1.length < str2.length) {
    return str2;
  } else {
    return "empate!";
  }
}

console.log(retornaMaiorString("banana", "chocolate"));
