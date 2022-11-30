const Sequelize = require("Sequelize");
const Category = require("../categoris/category");
const connection = require("../database/database");


const Article = connection.define('articles',{
    type:{
        type:Sequelize.STRING,
        allowNULL: false
    },stulg:{
        type:Sequelize.STRING,
        allowNULL: false
    },body:{ //conteudo a receber texto
        type:Sequelize.TEXT,
        allowNULL:false
    }
});
// relacionamento das tabelas

Category.hasMany(Article); // UMA catgoria pertence a MUITOS artigos  mao dupla
Article.belongsTo(Category) // UM artigo pertence a UMA categoria belongsTu pertence a / (1 para 1 belongsTu)

// Article.sync({force: true}); //cria tabelas, retirar depois de usar pois cria tabela toda hora

module.exports = Article;