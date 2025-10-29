// CRIE UMA LÓGICA AQUI

let notas = [8, 5, 7, 10, 6]
let soma = 0
for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
}
let media = soma / notas.length

let aprovadas = notas.filter(nota => nota >= 7)

console.log(`Notas: [${notas}]`)
console.log(`Soma: ${soma}`)
console.log(`Média: ${media.toFixed(1)}`)
console.log(`Aprovadas: [${aprovadas}]`)

// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { notas, soma, media, aprovadas }
