const express = require('express')
const router = express.Router()

const productController = require('../../../controllers/products/productsController')
const { validateCreated, validateProductId } = require('../../../validators/products/products')

router
    .get('/allProducts', productController.getAllProducts)
    .get('/getProduct/:productId', validateProductId, productController.getOneProduct)
    .post('/addProduct', validateCreated, productController.createNewProduct)
    .put('/updateProduct/:productId', validateProductId, productController.updateOneProduct)
    .delete('/deleteProduct/:productId', validateProductId, productController.deleteOneProduct)

module.exports = router
