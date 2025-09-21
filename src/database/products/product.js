/* eslint-disable no-throw-literal */
const DB = require('../products.json')

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

module.exports = {
    getAllProducts
}
