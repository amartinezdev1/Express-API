const express = require('express')
const router = express.Router()

const productController = require('../../../controllers/products/productsController')

router
    .get('/allProducts', productController.getAllProducts)

module.exports = router
