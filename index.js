//SEMPRE EXECUTAR O ARQUIVO COM NODEMON         
//Importação do Modulo Express 
//p/ intalação npm install express --save
//Usar const por questão de segurança e evitar dores de cabeça

//npm install --save express-handlebars
//npm install --save body-parser
const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const handlebars = require("express-handlebars")
const Post = require('./models/Post')

//Config
    //Template Engine
        app.engine('handlebars' , handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
 
//app.get = ROTAS
    app.get("/" , function(req , res){
        //__dirname o diretorio completo do projeto ou diretorio Absoluto
        //res.sendFile(__dirname + "/views/index.html")
        Post.findAll({
            order: [['id' , 'DESC']]
        }).then(function(posts){
            res.render('home' , {posts: posts})
        }).catch(function(error){
            res.send(erro)
        })
        
    })

    app.get("/cad" , function(req , res){
        res.render('formulario')
    })

    app.post("/add" , function(req , res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
            
        }).catch(function(erro){
            res.send('Houve Erro!!: '+ erro)
        })
    })

    app.get('/deletar/:id' , function(req , res){
        Post.destroy({ where: {id: req.params.id}}).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("esta postagem não existe")
        })
        
    })

    





//Sempre no final
app.listen(8081, function(){
    console.log("Servidor Rodando URL: htpp://localhost:8081")
    
})


