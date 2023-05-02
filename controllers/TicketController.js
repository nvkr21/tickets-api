const Ticket = require("../models/ticketModel")
const ticketsDal = require("../dal/ticketsDal")
const { testDbConnection } = require("../config/dal_config")

const TicketController = {

    getAllTickets :  (req, res) => {
        testDbConnection().then(() => {
                console.log('success db ininit')
                const tickets = ticketsDal.getAllTickets()
                res.send(tickets)
            })
            .catch((err) => {
                console.log('fail db init:', err);
                res.sendStatus(400)
            })
    },

    getTicketById :  (req, res) => {
        testDbConnection().then(() => {
            console.log('success db ininit')
            const ticket = ticketsDal.getTicketById(req.params.id)
            if (!ticket) {
                res.sendStatus(404).send()
              } else {
                res.send(ticket)
              }
        })
        .catch((err) => {
            console.log('fail db init:', err);
            res.sendStatus(400)
        })
    },

    addTicket : (req, res) => {
        testDbConnection().then(() => {
            console.log('success db ininit')
            const data = ticketsDal.addTicket(req.body)
            res.send(data)
        })
        .catch((err) => {
            console.log('fail db init:', err);
            res.sendStatus(400)
        })
    },

    updateTicketById :  (req, res) => {
        testDbConnection().then(() => {
            console.log('success db ininit')
            const data = ticketsDal.updateTicketById(req.params.id, req.body)
            if (data[0] === 0) {
              res.status(404).send()
            } else {
              res.send(data[1][0])
            }
        })
        .catch((err) => {
            console.log('fail db init:', err);
            res.sendStatus(400)
        })
    },

    deleteTicketById :  (req, res) => {
        testDbConnection().then(() => {
            console.log('success db ininit')
            const data = ticketsDal.deleteTicketById(req.params.id)
            if (data === 0) {
              res.status(404).send()
            } else {
              res.send();
            }
        })
        .catch((err) => {
            console.log('fail db init:', err);
            res.sendStatus(400)
        })
    },
}

module.exports = TicketController