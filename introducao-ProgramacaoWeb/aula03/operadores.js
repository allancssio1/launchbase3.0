/*==========================================
> maior que
< menor que
>= maior ou igual a
<= menor ou igual a
== igual a
=== igual e do mesmo tipo a
!= diferente de
!== diferente, incluindo por tipo de

O simbolo de "=" sozinho tem o nome de recebe,
serve para atribuir um valor ou característica
a uma variavel.
===========================================*/


console.log(5 > 4)
console.log(5 < 4)
console.log (5 >= 4)
console.log(4 <= 4)
console.log(4 == "4")
console.log(4 === "4")
console.log(4 != "5")
console.log(4 !== "5")

const idade = 25

if(idade >= 18){
    console.log(`Entrada liberada.`)
}else{
    console.log('entrada bloqueada.')
}