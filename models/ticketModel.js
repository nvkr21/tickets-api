const { DataTypes } = require("sequelize")
const { sq } = require("../config/dal_config")

const Ticket = sq.define("ticket",{
    id: { type: DataTypes.INTEGER,  autoIncrement: true, primaryKey: true },
    created_date: {type: DataTypes.STRING, allowNull: false},
    updated_date: {type: DataTypes.STRING, allowNull: true}, 
    customer_name: { type: DataTypes.STRING, allowNull: false },
    movie_title: { type: DataTypes.STRING, allowNull: false },
    movie_time: { type: DataTypes.DATE, allowNull: false },
    ticket_price: { type: DataTypes.FLOAT, allowNull: false }
})

module.exports = {}
