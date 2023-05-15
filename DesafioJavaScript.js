const pessoas = [

    {nome: "Beatriz" , idade: 19},
    {nome: "Lara" , idade: 20},
    {nome: "Gustavo" , idade: 19},
    {nome: "Laura" , idade: 25},
    {nome: "Larissa" , idade: 20},
    {nome: "Sofia" , idade: 25},
    {nome: "Leonardo" , idade: 20},
    {nome: "João" , idade: 40},
    {nome: "Lucas" , idade: 30},
    {nome: "Daniela" , idade: 20},

]

let i = 0
let somaIdades = 0
let contador = 0
let mediaIdades = 0
const letra = "L"
const nomesL = []


for(i; i < pessoas.length; i++) {

    let nome = pessoas[i].nome
    let idade = pessoas[i].idade

    if( nome[0] === letra) {

        nomesL.push(nome)
        somaIdades += idade
        contador++

    }
}

mediaIdades = somaIdades / contador

console.log(`Nomes que começam com a letra L: ${nomesL}`);
console.log(`Média das idades das pessoas que começam com L: ${mediaIdades}`);