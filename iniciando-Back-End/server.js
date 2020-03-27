const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express:server
})

server.get("/", function(require, response){
    return response.render("index")
})

server.listen(5000, function(){
    console.log('servidor está rodando / server is running')
})