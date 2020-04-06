const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.use(express.static("public"))
server.use(express.static("img"))

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/conteudo", function(request, response){
    return response.render("conteudo")
})
server.get("/index", function(request, response){
    return response.render("index")
})


server.listen(5000, function(){
    console.log("server is runnig")
})