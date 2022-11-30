
const express = require("express");// codigo para inicializacao do servidor
const app = express(); //insta express,
const bodyParser = require("body-parser")
app.set('view engine','ejs');//reconhecimnto da pasta view
const connection = require("./database/database") // nao esuqecer o ./ para entrar na pasta
const  categoriesController = require('./categoris/CategorisController');//carrega minha controler
const articles = require('./articles/ArticleController');
const Article = require("./articles/Article.js");
const Category = require("./categoris/Category.js");

//body parcer para trabalhar com formulario colocar em primeiro
//aceitar dados formato json
app.use(bodyParser.urlencoded({extended:false})); // aceitar dados de form
app.use(bodyParser.json());

//para carregar os arquivos estaticos img,css,bootstrap...
app.use(express.static('public')); // public nome da pasta onde eles ficam

//chamando obj de conx
connection
.authenticate()
.then(()=>{
    console.log('conectado com o banco')// se for true connection
}).catch((error)=>{
    console.log('nao foi possivel conectar ao banco de dados');
});


app.use("/",articles);
app.use("/",categoriesController); // dizendo para aplicacao que estou usando minhas rotas categoris // defini primeira pasta

app.get("/",(req,res)=> {
    Article.findAll().then(articles =>{
        res.render("index",{articles:articles});
    });
});




app.listen(8080,()=>{
    console.log('servidor rodando!');
}); // inicializando aplicacao local