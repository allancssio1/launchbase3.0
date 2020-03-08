const user = {
    name: "Maria",
    transactions: [],
    balance:0
}


function createTransaction(types, values){
    check(types, values)
    return {
        type: types ,
        value: values
    }
}

function check(types, values){        
    if(types == "credit"){
        user.balance += values
    }else{
        user.balance -= values
    }
}



user.transactions.push(createTransaction("credit", 50.5))

user.transactions.push(createTransaction('Debit', 45))
console.log(user)