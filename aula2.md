# JAVASCRIPT — GUIA COMPLETO E ORGANIZADO

---

# 1. COMO UM PROGRAMA FUNCIONA

Todo programa segue 3 etapas:

1. Entrada de dados (input)
2. Processamento
3. Saída de dados (output)

Exemplo:

```js
let numero = 5
let resultado = numero * 2
console.log(resultado)
```

---

# 2. VARIÁVEIS

## O que é?

Espaço na memória que guarda um valor.

## Declaração

- let → pode alterar o valor
- const → não pode reatribuir
- var → antigo (evite)

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

### Strings

Podem usar:

```js
"texto"
'texto'
`texto`
```

Template string:

```js
let nome = "Tai"
let frase = `Olá, ${nome}`
```

---

# 5. TYPEOF

Descobre o tipo:

```js
typeof "Hello"  // string
typeof 10       // number
typeof true     // boolean
```

---

# 6. OPERADORES

## 6.1 Atribuição

```js
let x = 10
```

## 6.2 Matemáticos

+  soma  
-  subtração  
*  multiplicação  
/  divisão  
%  resto  
** potência  

```js
2 ** 3 // 8
```

## 6.3 Incremento

```js
let x = 1
x++
x--
```

## 6.4 Comparação

==   igual (fraco)  
===  igual (estrito)  
!=   diferente  
!==  diferente estrito  
>    maior  
<    menor  
>=   maior ou igual  
<=   menor ou igual  

Sempre prefira `===`.

## 6.5 Lógicos

&&  (e)  
||  (ou)  
!   (negação)  

---

# 7. CONDICIONAIS

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

## Operador ternário

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


const start = () => {

    while(true){
       let opcao = "sair"
        switch(opcao) {
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                return
        }
    }
}


start()
---

# 8. ESTRUTURAS DE REPETIÇÃO

## for

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

## while

```js
let i = 0

while (i < 5) {
  console.log(i)
  i++
}
```
const start = () => {
    let count = 0
    while(count < 10){
        console.log(count)
        count = count + 1
    }
}

start()


## do while

```js
let i = 0

do {
  console.log(i)
  i++
} while (i < 5)
```

---

# 9. ARRAYS

Lista ordenada.

```js
let nomes = ["Ana", "Carlos", "João"]
```

## Acesso

```js
nomes[0]
```

## Propriedades

```js
nomes.length
```

## Métodos principais

```js
nomes.push("Maria")     // adiciona no final
nomes.pop()             // remove do final
nomes.shift()           // remove do início
nomes.unshift("Pedro")  // adiciona no início
```

## Loop em array

```js
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i])
}
```

## forEach

```js
nomes.forEach(function(nome) {
  console.log(nome)
})
```

---

# 10. OBJETOS

Coleção de chave:valor

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

## Alteração

```js
pessoa.idade = 31
```

## Adicionar propriedade

```js
pessoa.profissao = "Professora"
```

## Loop em objeto

```js
for (let chave in pessoa) {
  console.log(chave, pessoa[chave])
}
```

---

# 11. FUNÇÕES

Bloco reutilizável.

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

# 12. MÉTODOS IMPORTANTES DE ARRAY (NÍVEL INTERMEDIÁRIO)

## map

Transforma cada item.

```js
let numeros = [1, 2, 3]
let dobrados = numeros.map(n => n * 2)
```

## filter

Filtra elementos.

```js
let maiores = numeros.filter(n => n > 1)
```

## find

Retorna o primeiro que satisfaz condição.

```js
numeros.find(n => n === 2)
```

---

# 13. JSON

Formato de dados.

```js
let pessoa = {
  "nome": "Tai",
  "idade": 30
}
```

Converter:

```js
JSON.stringify(pessoa)
JSON.parse('{"nome":"Tai"}')
```

---

# 14. MANIPULAÇÃO BÁSICA DO DOM (FRONT-END)

Selecionar elemento:

```js
document.querySelector("h1")
```

Alterar texto:

```js
document.querySelector("h1").textContent = "Novo título"
```

Evento:

```js
document.querySelector("button").addEventListener("click", function() {
  console.log("Clicou")
})
```

---

# 15. ORDEM IDEAL DE ESTUDO

1. Variáveis
2. Tipos
3. Operadores
4. Condicionais
5. Loops
6. Arrays
7. Objetos
8. Funções
9. Métodos de array
10. DOM