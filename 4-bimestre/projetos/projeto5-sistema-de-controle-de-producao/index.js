// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
// Comando: npm i prompt-sync; npm i -D jest

// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()

console.log("Bem vindo a TechFactory")

let pecasTurno = parseInt(prompt("Quantas peças devem ser produzidas no turno: "))
let pecas = 0

while (pecas < pecasTurno){
    pecas++
    console.log(`Peça ${pecas} produzida com sucesso.`)
}
console.log("Meta alcançada!")

 let confirmar = prompt("Deseja simular outro turno? (S/N)")




