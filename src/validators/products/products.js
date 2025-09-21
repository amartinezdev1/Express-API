const { check } = require('express-validator')
const { validateResult } = require('../../helpers/validateHelpers')

const validateCreated = [
    check('name')
        .exists()
        .not()
        .isEmpty(),
    check('description')
        .exists()
        .not()
        .isEmpty(),
    check('price')
        .exists()
        .not()
        .isEmpty(),
    check('category')
        .exists()
        .not()
        .isEmpty(),
    check('image')
        .exists()
        .not()
        .isEmpty()
        .isURL(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateProductId = [
    check('id')
        .exists()
        .not()
        .isEmpty()
        .isUUID(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {
    validateCreated,
    validateProductId
}
