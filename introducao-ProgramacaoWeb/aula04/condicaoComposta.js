/*======================================
&& => "E" ambas as condiçoes devem se verdadeiras

|| => "OU" uma das condições deve ser vedadeira

! => "NÂO" A condição deve ser falsa para que seja usada
========================================*/ 

console.log(5 == 5 && 6 == 6) //true
console.log(5 == 5 && 5 == 6) //false

console.log(5 != 5 || 6 == 6) //true
console.log(5 != 5 || 6 != 6) //false

console.log(!(5 > 6)) //true
console.log(!(5<6)) //false
