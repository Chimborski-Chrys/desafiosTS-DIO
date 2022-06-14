"use strict";
// let button = document.getElementById('button');
// let input1 = document.getElementById('input1') as HTMLInputElement;
// let input2 = document.getElementById('input2') as HTMLInputElement;
Object.defineProperty(exports, "__esModule", { value: true });
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
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
})(Trabalho || (Trabalho = {}));
let pessoa1 = {
    nome: 'Carla',
    idade: 19,
    profissao: Trabalho.Atriz
};
let pessoa2 = {
    nome: 'Carlos',
    idade: 39,
    profissao: Trabalho.Padeiro
};
let pessoa3 = {
    nome: 'Joaquina',
    idade: 26,
    profissao: Trabalho.Atriz
};
let pessoa4 = {
    nome: "Joao",
    idade: 45,
    profissao: Trabalho.Padeiro
};
let btnAtualizar = document.getElementById('atualizar-saldo');
let btnLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let saldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (saldo) {
        saldoTotal += soma;
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
