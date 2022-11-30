const Sequelize = require('sequelize');
const connection = require('../database/database');


const Category = connection.define('categories',{
    title:{
        type:Sequelize.STRING,
        allowNULL : false // nao permite dados nullos pra minha categoria
    },slug:{ // slug = "Web programer = web-programer"
        type:Sequelize.STRING,
        allowNULL:false
    }
}); // insert na tabela
// Category.sync({force:true}); //cria tabelas, retirar depois de usar pois cria tabela toda hora

module.exports = Category;