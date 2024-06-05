"use strict" // Evita this sendo usado para referenciar o objeto "window" nos escopos locais

// 1) THIS NO ESCOPO GLOBAL) - IRÁ SE REFERENCIAR AO OBJETO GLOBAL "WINDOW"

console.log(this);

console.log(window);

console.log(window === this); //true

// 2) THIS DENTRO DO ESCOPO DE FUNÇÃO

this.name = "Ricardo";

function greetings() {
    console.log("this no contexto da função", this);
    console.log("Olá, " + this.name); //undefined com "use strict"
}

greetings();

// 3) THIS DENTRO DE MÉTODOS (FUNÇÕES DE OBJETOS)

let user = {
    name: "Ricardo",
    saudar: function () {
        console.log("this no contexto do metodo", this); //this = próprio objeto "user"

        console.log("this.name no contexto do metodo", this.name);  //this.name = propriedade nome do objeto "user" = Ricardo
    }
}

user.saudar();

// 3.1) ACESSANDO PROPRIEDADES DO OBJETO COM O THIS - SIMPLIFICANDO (CLEAN CODE)

/* TROQUE:

let comida = {
    nome: "Brocólis",
    temperatura: 0,
    cozinhar: function() {}
}

POR: */



let comida = {
    nome: "Brocólis",
    temperatura: 0,
}

// Adicionando o método após o objeto ter sido criado / instanciado!

comida.cozinhar = function(temperaturaDeCozimento) {
    console.log("this no contexto do objeto comida", this);
    this.temperatura = temperaturaDeCozimento; 
}

console.log(comida);

comida.cozinhar(100);

console.log(comida);