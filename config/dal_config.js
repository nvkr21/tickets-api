const Sequelize = require('sequelize')
  
const sequelize = new Sequelize('postgres', 'postgres', 'passwords',  { dialect: 'postgres' })

const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } 
    catch (err) {
        throw err
    }
};

module.exports = { sq: sequelize, testDbConnection }