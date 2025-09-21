const express = require('express')
const router = express.Router()

const workoutController = require('../../../controllers/workouts/workoutController')
const recordController = require('../../../controllers/records/recordController')
const { validateCreated, validateWorkoutId } = require('../../../validators/workouts/workouts')

router
    .get('', workoutController.getAllWorkouts)
    .get('/:workoutId', validateWorkoutId, workoutController.getOneWorkout)
    .post('', validateCreated, workoutController.createNewWorkout)
    .put('/:workoutId', validateWorkoutId, workoutController.updateOneWorkout)
    .delete('/:workoutId', validateWorkoutId, workoutController.deleteOneWorkout)
    .get('/:workoutId/records', recordController.getRecordForWorkout)

module.exports = router
