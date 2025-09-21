const express = require('express')
const router = express.Router()

const productController = require('../../../controllers/products/productsController')
const { validateCreated } = require('../../../validators/products/products')

router
    .get('/allProducts', productController.getAllProducts)
    .post('/addProduct', validateCreated, productController.createNewProduct)

module.exports = router
