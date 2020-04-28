const express = require("express")
const nunjucks = require("nunjucks")
const data = require("./data")

const server = express()

server.use(express.static("public"))
server.use(express.static("img"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/layout", function(request,response){
    return response.render("layout", {data})
})

server.get("/index", function(request, response){
    return response.render("index", {data})
})

server.get("/conteudo", function(request, response){
    return response.render("conteudo", {data})
})

server.get("/curso/:id", function(request, response){
    const id = request.params.id

    if(id.id == id){
        return true
    }

    if(!id){
        return response.send("no found")
    }
    return response.render("curso")
})

server.listen(5000, function(){
    console.log("server is runnig")
})