/* eslint-disable no-throw-literal */
const DB = require('../products.json')
const { saveToDatabase } = require('../utils')

const getAllProducts = () => {
    try {
        const products = DB.products
        return products
    } catch (error) {
        throw {
            status: 500,
            message: error
        }
    }
}

const createOneProduct = (newProduct) => {
    try {
        const isAlreadyAdded = DB.products.findIndex((product) => product.name === newProduct.name) > -1
        if (isAlreadyAdded) {
            return
        }

        DB.products.push(newProduct)
        saveToDatabase(DB)
        return newProduct
    } catch (error) {
        throw {
            status: 500,
            message: error
        }
    }
}

const getOneProduct = (productId) => {
    try {
        const product = DB.products.find((product) => product.id === productId)
        if (!product) {
            return
        }
        return product
    } catch (error) {
        throw {
            status: 500,
            message: error
        }
    }
}

const updateOneProduct = (productId, productToUpdate) => {
    try {
        const indexForUpdate = DB.products.findIndex((product) => product.id === productId)
        if (indexForUpdate === -1) {
            return
        }
        const updatedProduct = {
            ...DB.products[indexForUpdate],
            ...productToUpdate
        }
        DB.products[indexForUpdate] = updatedProduct
        saveToDatabase(DB)
        return updatedProduct
    } catch (error) {
        throw {
            status: 500,
            message: error
        }
    }
}

const deleteOneProduct = (productId) => {
    try {
        const indexForDeletion = DB.products.findIndex((product) => product.id === productId)
        if (indexForDeletion === -1) {
            return
        }
        DB.products.splice(indexForDeletion, 1)
        saveToDatabase(DB)
    } catch (error) {
        throw {
            status: 500,
            message: error
        }
    }
}

module.exports = {
    getAllProducts,
    createOneProduct,
    getOneProduct,
    updateOneProduct,
    deleteOneProduct
}
