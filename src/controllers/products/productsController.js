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

module.exports = {
    getAllProducts
}
