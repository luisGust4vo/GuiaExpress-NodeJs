const Sequelize = require("sequelize"); // buscando o sequelize 
const connection = new Sequelize('guiapress','root','pitucha2012',{
    host:'localhost', // apontando para o locas
    dialect:'mysql', // qual ele deve se conectar
    timezone:'-03:00'
});//informacoes para o banco nome,usuario,senha



module.exports = connection;// expotando para outro arquivo 