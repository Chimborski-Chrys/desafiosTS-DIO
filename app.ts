// let button = document.getElementById('button');
// let input1 = document.getElementById('input1') as HTMLInputElement;
// let input2 = document.getElementById('input2') as HTMLInputElement;

// function adicionarNumeros(n1: number, n2: number){
//     return n1 + n2
// }

// if(button){
//     button.addEventListener('click', () =>{
//         if(input1 && input2){}
//        console.log(adicionarNumeros(Number(input1.value) , Number(input2.value))) ;
//     })
// }

//------------------------------------------------------*******************---
//Desafio 01
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

// Resposta
const funcionario = {
    codigo: 177,
    nome: 'Pedrinho'
};

//------------------------------------------------------*******************---

// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

// Resposta

enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Carla',
    idade: 19,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'Carlos',
    idade: 39,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'Joaquina',
    idade: 26,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "Joao",
    idade: 45,
    profissao: Trabalho.Padeiro
}

//------------------------------------------------------*******************---

// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

// let botaoAtualizar = document.getElementById('atualizar-saldo');
// let botaoLimpar = document.getElementById('limpar-saldo');
// let soma = document.getElementById('soma');
// let campoSaldo = document.getElementById('campo-saldo');

// campoSaldo.innerHTML = 0

// function somarAoSaldo(soma) {
//     campoSaldo.innerHTML += soma;
// }

// function limparSaldo() {
//     campoSaldo.innerHTML = '';
// }

// botaoAtualizar.addEventListener('click', function () {
//     somarAoSaldo(soma.value);
// });

// botaoLimpar.addEventListener('click', function () {
//     limparSaldo();
// });

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */

    export {}

let btnAtualizar = document.getElementById('atualizar-saldo');
let btnLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let saldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (saldo) {
        saldoTotal += soma
        saldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (saldo) {
        saldoTotal = 0;
        saldo.innerHTML = saldoTotal.toString();
    }
}

if (btnAtualizar) {
    btnAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}
btnLimpar.addEventListener('click', () => { 
    limparSaldo();
});