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

server.get("/layout", function(req,res){
    return res.render("layout", {data})
})

server.get("/", function(req, res){
    return res.render("index", {data})
})

server.get("/conteudo", function(req, res){
    return res.render("conteudo", {data})
})

server.get("/course/:id", function(req, res){
    const idCourse = req.params.id

    return res.render(`${idCourse}`, {data})
})

server.listen(5000, function(){
    console.log("server is runnig")
})