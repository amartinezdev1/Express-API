/* eslint-disable no-useless-catch */
const { v4: uuid } = require('uuid')
const product = require('../../database/products/product')

const getAllProducts = () => {
    try {
        const allProducts = product.getAllProducts()
        return allProducts
    } catch (error) {
        throw error
    }
}

const createNewProduct = (newProduct) => {
    try {
        const productToInsert = {
            ...newProduct,
            id: uuid()
        }
        const createdProduct = product.createOneProduct(productToInsert)
        return createdProduct
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllProducts,
    createNewProduct
}
