/* eslint-disable no-useless-catch */
const product = require('../../database/products/product')

const getAllProducts = () => {
    try {
        const allProducts = product.getAllProducts()
        return allProducts
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllProducts
}
