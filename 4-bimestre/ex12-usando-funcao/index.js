// CRIE UMA LÓGICA AQUI

function multiplicar(a, b){
    return a * b
}
function mostrarResultado(){
    console.log(`Resultado da multiplicação: ${multiplicar(2, 10)}`)
}

mostrarResultado()

// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { multiplicar, mostrarResultado }