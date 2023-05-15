const pessoas = [

    {nome: "Beatriz" , idade: 20},
    {nome: "Lara" , idade: 19},
    {nome: "Gustavo" , idade: 19},
    {nome: "Bruna" , idade: 25},
    {nome: "Brenda" , idade: 20},
    {nome: "Sofia" , idade: 25},
    {nome: "Breno" , idade: 20},
    {nome: "João" , idade: 40},
    {nome: "Bernardo" , idade: 30},
    {nome: "Daniela" , idade: 20},

]

let i = 0
let somaIdades = 0
let contador = 0
let mediaIdades = 0
const letra = "B"
const nomesB = []


for(i; i < pessoas.length; i++) {

    let nome = pessoas[i].nome
    let idade = pessoas[i].idade

    if( nome[0] === letra) {

        nomesB.push(nome)
        somaIdades += idade
        contador++

    }
}

mediaIdades = somaIdades / contador

console.log(`Nomes que começam com a letra B: ${nomesB}`);
console.log(`Média das idades das pessoas que começam com B: ${mediaIdades}`);