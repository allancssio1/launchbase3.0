const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.use(express.static("public"))
server.use(express.static("img"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})
// server.get("/layout", function(request,response){
//     layout = {
//         headers: [
//             {name: "Home", target: "_self", url: "/index"},
//             {name: "Conteúdo", target: "_self", url: "/conteudo"},
//             {name: "Comunidade", target: "_blank", url: "https://discordapp.com/invite/gCRAFhc"},
//             {name: "E-mail", target: "_blank", url: "oi@rocketseat.com.br"},
//             {name: "Telefone", target: "_blank", url: "+5547992078767"},
//             {name: "Sobre", target: "_blank", url: "https://rocketseat.com.br/"}
//         ]
//     }
//     return response("layout", {layout})
// })
server.get("/index", function(request, response){
    const index = {
        headers: [
            {name: "Home", target: "_self", url: "/index"},
            {name: "Conteúdo", target: "_self", url: "/conteudo"},
            {name: "Comunidade", target: "_blank", url: "https://discordapp.com/invite/gCRAFhc"},
            {name: "E-mail", target: "_blank", url: "oi@rocketseat.com.br"},
            {name: "Telefone", target: "_blank", url: "+5547992078767"},
            {name: "Sobre", target: "_blank", url: "https://rocketseat.com.br/"}
        ],
        footers: [
            {name: "GitHub", url: "https://github.com/Rocketseat"},
            {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/"},
            {name: "Facebook", url: "https://www.facebook.com/rocketseat/"}
        ]
    }
    return response.render("index", {index})
})

server.get("/conteudo", function(request, response){
    content = {
        headers: [
            {name: "Home", target: "_self", url: "/index"},
            {name: "Conteúdo", target: "_self", url: "/conteudo"},
            {name: "Comunidade", target: "_blank", url: "https://discordapp.com/invite/gCRAFhc"},
            {name: "E-mail", target: "_blank", url: "oi@rocketseat.com.br"},
            {name: "Telefone", target: "_blank", url: "+5547992078767"},
            {name: "Sobre", target: "_blank", url: "https://rocketseat.com.br/"}
        ],
        cards: [
            {}
        ]
    }
    return response.render("conteudo", {content})
})

server.listen(5000, function(){
    console.log("server is runnig")
})