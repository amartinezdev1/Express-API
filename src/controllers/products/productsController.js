/* eslint-disable no-useless-catch */
const productService = require('../../services/products/productsServices')

const getAllProducts = (req, res) => {
    try {
        const allProducts = productService.getAllProducts()
        res.status(201).send({ success: true, data: allProducts })
    } catch (error) {
        res.status(error?.status || 500).send({ success: false, message: error?.message || error })
    }
}

const createNewProduct = (req, res) => {
    try {
        const createdProduct = productService.createNewProduct(req.body)
        res.status(201).send({ success: true, data: createdProduct })
    } catch (error) {
        res.status(error?.status || 500).send({ success: false, message: error?.message || error })
    }
}

module.exports = {
    getAllProducts,
    createNewProduct
}
