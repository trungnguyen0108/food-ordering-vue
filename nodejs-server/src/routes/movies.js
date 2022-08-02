const express = require("express")
const router = express.Router()

const productsController = require("../app/controller/productsController")

router.get('/products', productsController.products)

module.exports = router