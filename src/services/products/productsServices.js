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

const getOneProduct = (productId) => {
    try {
        const getProduct = product.getOneProduct(productId)
        return getProduct
    } catch (error) {
        throw error
    }
}

const updateOneProduct = (productId, changes) => {
    try {
        const updatedProduct = product.updateOneProduct(productId, changes)
        return updatedProduct
    } catch (error) {
        throw error
    }
}

const deleteOneProduct = (productId) => {
    try {
        const deletedProduct = product.deleteOneProduct(productId)
        return deletedProduct
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllProducts,
    createNewProduct,
    getOneProduct,
    updateOneProduct,
    deleteOneProduct
}
