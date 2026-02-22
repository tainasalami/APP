// arrays, objetos
let meta = {
    value: 'ler um livro por mês',
    address: { street: 2, number: 3 },
    checked: false,
    log: (info) => {
        console.log(info)
    }
}

meta.value = "não é ler livro"
meta.log(meta.value)

// Function (fora do objeto, arrow function)
//const criarMeta = () => {}
//ou 
//function criaMeta() {}
