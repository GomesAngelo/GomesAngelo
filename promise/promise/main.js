let accept = true

console.log("pedir uber")

const promise = new Promise((resolve, reject) => {
    if (accept) {
        return resolve("pedido aceito")
    }
    
    return reject("pedido negado")
})

console.log("aguardando")

promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log("promessa finalizada"))