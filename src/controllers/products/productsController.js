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

const getOneProduct = (req, res) => {
    try {
        const { params: { productId } } = req
        if (!productId) {
            return
        }
        const product = productService.getOneProduct(productId)
        res.send({ success: true, data: product })
    } catch (error) {
        res.status(error?.status || 500).send({ success: false, message: error?.message || error })
    }
}

const updateOneProduct = (req, res) => {
    try {
        const { body, params: { productId } } = req
        if (!productId) {
            return
        }
        const updatedProduct = productService.updateOneProduct(productId, body)
        res.status(201).send({ success: true, data: updatedProduct })
    } catch (error) {
        res.status(error?.status || 500).send({ success: false, message: error?.message || error })
    }
}

const deleteOneProduct = (req, res) => {
    try {
        const { params: { productId } } = req
        if (!productId) {
            return
        }
        const deletedProduct = productService.deleteOneProduct(productId)
        res.send({ success: true, data: deletedProduct })
    } catch (error) {
        res.status(error?.status || 500).send({ success: false, message: error?.message || error })
    }
}

module.exports = {
    getAllProducts,
    createNewProduct,
    getOneProduct,
    updateOneProduct,
    deleteOneProduct
}
