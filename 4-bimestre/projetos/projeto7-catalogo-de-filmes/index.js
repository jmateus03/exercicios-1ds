const prompt = require("prompt-sync")()

let filme1 = {}
let filme2 = {}
let filme3 = {}
let filme4 = {}
let filme5 = {}
let filme6 = {}
let filme7 = {}
let filme8 = {}
let filme9 = {}
let filme10 = {}

let filmes = [filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10]

for (let i = 0; i < filmes.length; i++) {
    filmes[i].titulo = prompt(`Insira o nome do filme ${i + 1}: `)
    filmes[i].genero = prompt(`Insira o gênero do filme: `)
    filmes[i].ano = prompt(`Insira o ano de lançamento do filme: `)

    let avaliacao
    do {
        avaliacao = parseInt(prompt(`Insira a avaliação do filme de 0 a 10: `));
        if (avaliacao < 0 || avaliacao > 10) {
            console.log("Insira uma avaliação de 0 a 10")
        }
    } while (avaliacao < 0 || avaliacao > 10)

    filmes[i].avaliacao = avaliacao
}

let melhorFilme = filmes[0]
let soma = 0

for (let i = 0; i < filmes.length; i++) {
    soma += filmes[i].avaliacao

    if (filmes[i].avaliacao > melhorFilme.avaliacao) {
        melhorFilme = filmes[i]
    }
}

let media = (soma / filmes.length).toFixed(1)

let catalogo = ""
for (let i = 0; i < filmes.length; i++) {
    catalogo += `${i + 1}. ${filmes[i].titulo} - ${filmes[i].genero}\n`
}

console.log(`
=== Catálogo de Filmes ===
${catalogo}
Filme mais bem avaliado:
${melhorFilme.titulo} (${melhorFilme.avaliacao}/10)

Média geral das avaliações: ${media}
`)

// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }

