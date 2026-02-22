// arrays, objetos


// Function (fora do objeto, arrow function)
//const criarMeta = () => {}
//ou 
//function criaMeta() {}


let meta = {
    value: 'ler um livro por mês',
    checked: true,
}

let metas = [
    meta,
    {
        value: "caminhar 20min por dia",
        checked: false
    }
]

console.log(metas[0].value)