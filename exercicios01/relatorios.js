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

user.transactions.push(createTransaction("credit", 50))
user.transactions.push(createTransaction("credit", 120))
user.transactions.push(createTransaction("debit", 80))
user.transactions.push(createTransaction("debit", 30))

let result = getHigherTransactionByType(user.transactions)
console.log(`O usuário ${user.name} teve o maior movivemto foi ${result}!`)
let media = getAverageTransactionValue(user.transactions)
console.log(media)