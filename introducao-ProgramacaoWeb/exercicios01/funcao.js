const usuarios = [
    {
        nome: "Carlos",
        tecnologia: ["HTML", "CSS"]
    },
    {
        nome: "Jasmine",
        tecnologia: ["JavaScript", "CSS"]
    },
    {
        nome: "Tuane",
        tecnologia: ["HTML", "Node.js"]
    },
    {
        nome: "Flavio",
        tecnologia: ["CSS", "HTML", "javaScript"]
    }
]

function checar(usuario){
    for(let c = 0; c < usuario.tecnologia.length; c++){
        if(usuario.tecnologia[c] == "CSS"){
            return true
        }
    }  
}

for(let contador = 0; contador < usuarios.length; contador++){
    const usuarioTrabComCSS = checar(usuarios[contador])
    if(usuarioTrabComCSS == true){
        console.log(`${usuarios[contador].nome} trabalha com CSS.`)
    }
}
