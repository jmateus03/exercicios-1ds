// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
// Comando: npm i prompt-sync; npm i -D jest

// CRIE UMA LÓGICA ABAIXO

const prompt = require("prompt-sync")()

console.log("Bem vindo à TechFactory")

let confirmar
let dia = 1

do {
  let pecasTurno = parseInt(prompt("Quantas peças devem ser produzidas no turno: "))
  let pecas = 0

  while (pecas < pecasTurno) {
    pecas++
    console.log(`Peça ${pecas} produzida com sucesso.`)
  }

  console.log("Meta alcançada!")

  if (dia > 1) {    
    console.log("Resumo dos dias anteriores:")
    for (let diaSimulados = 1; diaSimulados < dia; diaSimulados++) {
      console.log(`Dia ${diaSimulados}: ${pecas} peças produzidas`)
    }
  }

  dia++
  confirmar = prompt("Deseja simular outro turno? (S/N) ").toUpperCase()

} while (confirmar === "S")

console.log("Encerrando sistema de produção...")
