console.log('Olá, JavaScript!')

var userName = 'Sara'

document.getElementById('user-name').innerHTML = userName

// -- Variavéis --

var nome = 'Mestre Yoda'
var idade = 100
var jedi = true

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof jedi)

// -- Operadores matemáticos --

var numero1 = 5
var numero2 = '7'

var valorTotal = numero1 + parseInt(numero2)
console.log(valorTotal)

// -- Operadores de comparação --

var v1 = 5
var v2 = 5

var resultado = v1 === v2 // ('===' serve para comparar um valor com outro)

var primeiro = 'Ganhador'
var segundo = 'Segundo lugar'

var resultadoCorrida = primeiro != segundo
console.log(resultadoCorrida)

// -- Funções --

function soma(primeiroNumero, segundoNumero) {
    console.log(primeiroNumero + segundoNumero)
}

soma(100, 1200)

function boasVindas(nome) {
    alert(nome + ', seja bem-vindo(a) !')
}

boasVindas('Sara')

function soma(n1, n2) {
    return n1 + n2
}

var resultado = soma(12, 12)
console.log(resultado)

// -- Controle de fluxos --

// Sendo um cliente correntista do banco 
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam cartão de débito ou crédito


// Cenário 1: Saque com sucesso
// Dado que meu saldo é de R$1.000
// Quando faço um saque de R$500
// Então o valor do saque deve ser reduzido do meu saldo

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de R$1.000
// Quando faço um saque de R$1.001
// Então não deve ser possível realizar o saque
// E deve ser exibido uma mensagem de alerta informando que o valor é superior ao saldo

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de R$10.000
// E o valor máximo por operação é de R$5.000
// Quando tento fazer um saque no valor de R$5.001 
// Então não deve ser possível realizar o saque
// E deve ser exibido uma mensagem de alerta informando que o valor é superior ao limite de saque diário


var saldo = 1000

function saque(valor) {
    if (valor > saldo) {
        console.log('O valor do saque é superior ao saldo')
    }
    else if (valor > 5.000) {
        console.log('O valor do saque ultrapassa o limite de saque diário')
    }
    else {
        saldo = saldo - valor
    }
}

saque(500)
console.log(saldo)

// -- Arrays --

var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

console.log(gaveteiro[0])

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

personagens.push('C3PO') // Adicione esse personagem no array
personagens.pop() // Remove o último item do array

personagens = personagens.filter(function (p) {
    return p !== 'Darth Vader'
})

personagens = personagens.filter(function (p) {
    return p === 'Princesa Leia'
})

console.log(personagens)

// -- Laços de repetição --

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'R2D2']

personagens.forEach(function (p) {
    console.log(p)
})

for (var indice in personagens) {
    console.log(personagens[indice])
}

for (var indice = 0; indice <= 4; indice++) {
    console.log(personagens[indice])
}

// -- Objetos --

var yoda = 
{
    nome: 'Mestre Yoda',
    idade: 100,
    jedi: true,
    mostraIdade: function()
    {
        console.log(`A idade do ${this.nome} é' ${this.idade} anos.`)
    }
}

console.log(yoda)
yoda.mostraIdade()

// -- Constantes --