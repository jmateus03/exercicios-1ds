const prompt = require("prompt-sync")()

console.log("Bem vindo à TechFactory")

let confirmar
let dia = 1
let totalGeral = 0
let pecasDia1 = 0
let pecasDia2 = 0
let pecasDia3 = 0
let pecasDia4 = 0
let pecasDia5 = 0

do {
  console.log(`--- Dia ${dia} ---`)
  let meta = parseInt(prompt("Quantas peças devem ser produzidas no turno? "))

  let contador = 1
  while (contador <= meta) {
    console.log(`Peça ${contador} produzida com sucesso.`)
    contador++
  }

  console.log(`Total de peças produzidas: ${meta}`)
  if (contador - 1 >= meta) {
    console.log("Meta alcançada!")
  } else {
    console.log("Meta não alcançada.")
  }

  switch (dia) {
    case 1:
      pecasDia1 = meta
      break
    case 2:
      pecasDia2 = meta
      break
    case 3:
      pecasDia3 = meta
      break
    case 4:
      pecasDia4 = meta
      break
    case 5:
      pecasDia5 = meta
      break
  }

  totalGeral = pecasDia1 + pecasDia2 + pecasDia3 + pecasDia4 + pecasDia5

  if (dia > 1) {
    console.log("\nResumo dos dias anteriores:")
    for (let i = 1; i <= dia; i++) {
      if (i === 1 && pecasDia1 > 0) {
        console.log(`Dia 1: ${pecasDia1} peças produzidas`)
      }
      if (i === 2 && pecasDia2 > 0) {
        console.log(`Dia 2: ${pecasDia2} peças produzidas`)
      }
      if (i === 3 && pecasDia3 > 0) {
        console.log(`Dia 3: ${pecasDia3} peças produzidas`)
      }
      if (i === 4 && pecasDia4 > 0) {
        console.log(`Dia 4: ${pecasDia4} peças produzidas`)
      }
      if (i === 5 && pecasDia5 > 0) {
        console.log(`Dia 5: ${pecasDia5} peças produzidas`)
      } else if(i > 5){
        console.log("esse programa salva o ultimos 5 dias, para salvar novamente, reinicie o programa!")
      }
    }
    console.log(`Total geral: ${totalGeral} peças`)
  }

  confirmar = prompt("Deseja simular outro turno? (S/N) ")
  dia++
} while (confirmar.toLowerCase() === "s")

console.log("Encerrando sistema de produção...")