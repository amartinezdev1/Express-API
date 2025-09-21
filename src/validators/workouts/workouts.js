const { check } = require('express-validator')
const { validateResult } = require('../../helpers/validateHelpers')

const validateCreated = [
    check('name')
        .exists()
        .not()
        .isEmpty(),
    check('mode')
        .exists()
        .not()
        .isEmpty(),
    check('equipment')
        .exists()
        .not()
        .isEmpty(),
    check('exercises')
        .exists()
        .not()
        .isEmpty(),
    check('trainerTips')
        .exists()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateWorkoutId = [
    check('workoutId')
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
    validateWorkoutId
}
