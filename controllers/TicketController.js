const Ticket = require("../models/ticketModel")

const TicketController = {

    getAllTickets :  (req, res) => {res.send("getAllTickets")},

    getTicketById :  (req, res) => {res.send(req.params.id)},

    addTicket : (req, res) => {res.send("addTicket")},

    updateTicketById :  (req, res) => {res.send("updateTicketById")},

    deleteTicketById :  (req, res) => {res.send("deleteTicketById")},
}

module.exports = TicketController

// getAllTickets : async (req, res) => await Ticket.findAll(),

//     getTicketById : async (req, res) => await Ticket.findOne({where: {}}),

//     addTicket : (req, res) => Ticket.create({}),

//     updateTicketById : async (req, res) => await Ticket.update({}, {where:{}}),

//     deleteTicketById : async (req, res) => await Ticket.destroy({where: {}})