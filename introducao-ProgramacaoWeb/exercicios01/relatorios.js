const user = {
    name: "Ana",
    transactions: [],
    balance: 0 
}

function getHigherTransactionByType(transactions){
    for(transaction of transactions){
        if(transactions[0].values>transactions[1].values && transactions[0].values>transactions[2].values && transactions[0].values>transactions[3].values){
            return transactions[0]
        }else if(transactions[0].values<transactions[1].values && transactions[1].values> transactions[2].values && transactions[1].values> transactions[3].values){
            return transactions[1]
        }else if(transactions[0].values<transactions[2].values && transactions[1].values<transactions[2].values && transactions[2].values>transactions[3].values){
            return transactions[2]
        }else if(transactions[0].values<transactions[3].values && transactions[1].values<transactions[3].values && transactions[2].values<transactions[3].values){
            return transactions[3]
        }else{
            return `[err] erro`
        }
    }
}

function createTransaction(typeIndex, valueIndex){
    
    return {
        type: typeIndex,
        values: valueIndex
    }
}

function getAverageTransactionValue(value){
    return (value[0].values + value[1].values + value[2].values + value[3].values)/4
}

function getTransactionCredit(types){
    let countCredit = 0
    for(let c=0; c<types.length; c++){
        if(types[c].type == "credit"){
            countCredit ++
        }
    }
    return countCredit

}

function getTransactionDebit(types){
    let countDebit = 0
    for(let c=0; c<types.length; c++){
        if(types[c].type == "debit"){
            countDebit++
        }
    }
    return countDebit
}

user.transactions.push(createTransaction("credit", 50.00))
user.transactions.push(createTransaction("credit", 120.00))
user.transactions.push(createTransaction("debit", 80.00))
user.transactions.push(createTransaction("debit", 30.00))

let result = getHigherTransactionByType(user.transactions)
console.log(`O usuário ${user.name} teve o maior movivemto foi ${result}!`)
let media = getAverageTransactionValue(user.transactions)
console.log(`A média das transações foi R$ ${media},00 reias`)
let validCredit = getTransactionCredit(user.transactions)
let validDebit = getTransactionDebit(user.transactions)
console.log(`o total de transações feitas foram de crédito = ${validCredit} e débito = ${validDebit}`)
