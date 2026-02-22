# JAVASCRIPT — GUIA COMPLETO E ORGANIZADO

---

# 📚 ÍNDICE

1. [Como um Programa Funciona](#1-como-um-programa-funciona)
2. [Variáveis](#2-variáveis)
3. [Escopo](#3-escopo)
4. [Tipos de Dados](#4-tipos-de-dados)
5. [Operadores](#5-operadores)
6. [Condicionais](#6-condicionais)
7. [Estruturas de Repetição](#7-estruturas-de-repetição)
8. [Funções](#8-funções)
9. [Arrays](#9-arrays)
10. [Objetos](#10-objetos)
11. [Métodos de Array (Intermediário)](#11-métodos-de-array-intermediário)
12. [JSON](#12-json)
13. [Manipulação do DOM (Front-End)](#13-manipulação-do-dom-front-end)
14. [Node.js e Módulos](#14-nodejs-e-módulos)
15. [Programação Assíncrona](#15-programação-assíncrona)

---

# 1. COMO UM PROGRAMA FUNCIONA

Todo programa segue 3 etapas:

1. Entrada de dados (input)
2. Processamento
3. Saída de dados (output)

```js
let numero = 5
let resultado = numero * 2
console.log(resultado)
```

---

# 2. VARIÁVEIS

Espaço na memória que guarda um valor.

- `let` → pode alterar valor
- `const` → não pode reatribuir
- `var` → antigo (evite)

```js
let nome = "Ana"
nome = "Carlos"

const cidade = "Passo Fundo"
// cidade = "POA" ❌ erro
```

---

# 3. ESCOPO

Define onde a variável existe.

- Global → fora de blocos
- Local → dentro de {}

```js
let fora = "global"

if (true) {
  let dentro = "local"
}
```

---

# 4. TIPOS DE DADOS

## Primitivos

- string
- number
- boolean
- undefined
- null
- bigint
- symbol

```js
let texto = "Hello"
let numero = 10
let ativo = true
let nada
let vazio = null
```

## Template String

```js
let nome = "Tai"
let frase = `Olá, ${nome}`
```

## typeof

```js
typeof "Hello"
typeof 10
typeof true
```

---

# 5. OPERADORES

## Matemáticos

+ - * / % **

```js
2 ** 3
```

## Comparação

==  ===  !=  !==  >  <  >=  <=  
Prefira `===`.

## Lógicos

&&  ||  !

---

# 6. CONDICIONAIS

## if / else

```js
let idade = 18

if (idade >= 18) {
  console.log("Maior")
} else {
  console.log("Menor")
}
```

## else if

```js
if (nota >= 9) {
  console.log("Excelente")
} else if (nota >= 6) {
  console.log("Aprovado")
} else {
  console.log("Reprovado")
}
```

## Operador Ternário

```js
let resultado = idade >= 18 ? "Maior" : "Menor"
```

## switch

```js
let cor = "azul"

switch (cor) {
  case "azul":
    console.log("Cor azul")
    break
  default:
    console.log("Outra cor")
}
```

---

# 7. ESTRUTURAS DE REPETIÇÃO

## for

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

## while

```js
let count = 0

while (count < 10) {
  console.log(count)
  count++
}
```

## do while

```js
let i = 0

do {
  console.log(i)
  i++
} while (i < 5)
```

---

# 8. FUNÇÕES

## Declaração tradicional

```js
function soma(a, b) {
  return a + b
}
```

## Arrow function

```js
const soma = (a, b) => a + b
```

## Função anônima

```js
const mensagem = function() {
  console.log("Olá")
}
```

---

# 9. ARRAYS

```js
let nomes = ["Ana", "Carlos", "João"]
```

## Métodos principais

```js
nomes.push("Maria")
nomes.pop()
nomes.shift()
nomes.unshift("Pedro")
```

## Loop em array

```js
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i])
}
```

---

# 10. OBJETOS

```js
let pessoa = {
  nome: "Tai",
  idade: 30,
  ativo: true
}
```

## Acesso

```js
pessoa.nome
pessoa["idade"]
```

## Loop

```js
for (let chave in pessoa) {
  console.log(chave, pessoa[chave])
}
```

---

# 11. MÉTODOS DE ARRAY (INTERMEDIÁRIO)

## map

```js
let numeros = [1, 2, 3]
let dobrados = numeros.map(n => n * 2)
```

## filter

```js
let maiores = numeros.filter(n => n > 1)
```

## find

```js
numeros.find(n => n === 2)
```

---

# 12. JSON

```js
JSON.stringify(objeto)
JSON.parse(stringJSON)
```

---

# 13. MANIPULAÇÃO DO DOM (FRONT-END)

## Selecionar elemento

```js
document.querySelector("h1")
```

## Alterar texto

```js
document.querySelector("h1").textContent = "Novo título"
```

## Evento

```js
document.querySelector("button")
  .addEventListener("click", function() {
    console.log("Clicou")
  })
```

---

# 14. NODE.JS E MÓDULOS

## Instalar dependência

```
npm init -y
npm install @inquirer/prompts
```

Criar `.gitignore`:

```
node_modules/
```

## Importação (CommonJS)

```js
const { select } = require('@inquirer/prompts')
```

---

# 15. PROGRAMAÇÃO ASSÍNCRONA

## async / await

```js
const { select } = require('@inquirer/prompts')

const start = async () => {

  while (true) {

    const opcao = await select({
      message: "Menu >",
      choices: [
        { name: "Cadastrar meta", value: "cadastrar" },
        { name: "Listar metas", value: "listar" },
        { name: "Sair", value: "sair" }
      ]
    })

    switch (opcao) {
      case "cadastrar":
        console.log("vamos cadastrar")
        break
      case "listar":
        console.log("vamos listar")
        break
      case "sair":
        console.log("Até a próxima!")
        return
    }
  }
}

start()
```

---
