//Conexao c/ banco
//Instalação do sequelize npm install --save sequelize 
//2ª passo npm install --save mysql2
const Sequelize = require('sequelize')

//Conexão com o banco Mysql
    const sequelize = new Sequelize('bdpostapp' , 'root' , '' , {
        host: "localhost",
        dialect: 'mysql'
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}