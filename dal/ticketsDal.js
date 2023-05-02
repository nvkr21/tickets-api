const Ticket = require("../models/ticketModel")
const { testDbConnection } = require("../config/dal_config")

const ticketsDal = {

    getAllTickets : async () => {
        try {
            const tickets = await Ticket.findAll()
            return tickets
        } catch (err) {
            res.status(500).send(err)
            throw err
        }
    },

    getTicketById : async (id) => {
        try {
            const ticket = await Ticket.findByPk(id)
            return ticket
        } catch (err) {
            res.status(500).send(err)
            throw err
        }
    },

    addTicket : async (body) => {
        try {
            const ticket = await Ticket.create(body)
            return ticket
        } catch (err) {
            throw err;
        }
    },


    updateTicketById : async (id, body) => {
        try {
            const data = await Ticket.update(body, { where: { id }, returning: true })
            return data
        } catch (err) {
            throw err
        }
    },


    deleteTicketById : async (id) => {
        try {
            const numDeleted = await Ticket.destroy({ where: { id } })
        } catch (err) {
            throw err
        }
    }
}

module.exports = ticketsDal