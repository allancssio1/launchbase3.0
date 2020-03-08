const students = [
    {
      name: "Salvio",
      revanues: [115.3, 48.7, 98.3, 14.5],
      debts: [85.3, 13.5, 19.9]
    },
    {
      name: "Marcio",
      revanues: [24.6, 214.3, 45.3],
      debts: [185.3, 12.1, 120.0]
    },
    {
      name: "Lucia",
      revanues: [9.8, 120.3, 340.2, 45.3],
      debts: [450.2, 29.9]
    }
]

console.log(addValues())

function addValues(){
    for(let c=0; c<students.length; c++){
        let addRevenue = 0
        let addDebt = 0
    
        for(let i=0; i<students[c].revanues.length; i++){
            addRevenue = addRevenue + students[c].revanues[i]
        }

        for(let i=0; i<students[c].debts.length; i++){
            addDebt = addDebt + students[c].debts[i]
        }
        let result = calculate(addRevenue, addDebt)
        
        if(result < 0){
            console.log(`${students[c].name} tem saldo Negativo de ${result}.`)
        }else if(result > 0){
            console.log(`${students[c].name} tem saldo POSITIVO de ${result}.`)
        }else{
            console.log(`${students[c].name} não possue SALDO.`)
        }
    }
}

function calculate(revanue, debit){
    return revanue - debit
}
