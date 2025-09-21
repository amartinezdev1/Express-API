const workoutService = require('../../services/workouts/workoutServices')

const getAllWorkouts = (req, res) => {
    const { mode } = req.query
    try {
        const allWorkouts = workoutService.getAllWorkouts({ mode })
        res.status(201).send({ success: true, data: allWorkouts })
    } catch (error) {
        res.status(error?.status || 500).send({ success: false, message: error?.message || error })
    }
}

const getOneWorkout = (req, res) => {
    const { params: { workoutId } } = req
    if (!workoutId) {
        return
    }
    const workout = workoutService.getOneWorkout(workoutId)
    res.send({ success: true, data: workout })
}

const createNewWorkout = (req, res) => {
    const createdWorkout = workoutService.createNewWorkout(req.body)
    res.status(201).send({ success: true, data: createdWorkout })
}

const updateOneWorkout = (req, res) => {
    const { body, params: { workoutId } } = req
    if (!workoutId) {
        return
    }
    const updatedWorkout = workoutService.updateOneWorkout(workoutId, body)
    res.status(201).send({ success: true, data: updatedWorkout })
}

const deleteOneWorkout = (req, res) => {
    const { params: { workoutId } } = req
    if (!workoutId) {
        return
    }
    const deletedWorkout = workoutService.deleteOneWorkout(workoutId)
    res.status(201).send({ success: true, data: deletedWorkout })
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}
