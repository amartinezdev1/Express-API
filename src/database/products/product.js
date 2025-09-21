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

module.exports = {
    getAllProducts,
    createOneProduct
}
