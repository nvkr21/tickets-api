const express = require("express")
const verifyToken = require("../utils/verifyjwt")
const TicketController = require("../controllers/TicketController")

const router = express.Router()

router.use(verifyToken)

router.get("/", TicketController.getAllTickets)

router.get("/:id", TicketController.getTicketById)

router.post("/", TicketController.addTicket)

router.put("/:id", TicketController.updateTicketById)

router.delete("/:id", TicketController.deleteTicketById)

module.exports = router