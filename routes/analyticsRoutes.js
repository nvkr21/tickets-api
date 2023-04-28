const express = require("express")
const verifyToken = require("../utils/verifyjwt")
const AnalyticsController = require("../controllers/AnalyticsController")

const router = express.Router()

router.use(verifyToken)

router.get("/profits", AnalyticsController.getTotalProfits)

router.get("/visited", AnalyticsController.getTotalViews)

module.exports = router

