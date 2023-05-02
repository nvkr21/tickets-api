const express = require("express")
const bodyParser = require("body-parser")
const ticketRoutes = require("./routes/ticketRoutes")
const analyticsRoutes = require("./routes/analyticsRoutes")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const jwt = require("jsonwebtoken")
const user = require("./mock/user")


const app = express()

app.use(bodyParser.json())
app.use('/tickets', ticketRoutes)
app.use("/analytics", analyticsRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get("/", (req, res) => {
    res.send("Welcome to tickets api")
})

app.get("/login", (req, res) => {
    jwt.sign({ user }, "secret-key", (err, token) => {res.json({token})})
})

app.listen(3000, () => console.log("3000 bro"))