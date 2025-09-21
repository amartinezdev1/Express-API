/* eslint-disable no-useless-catch */
const { v4: uuid } = require('uuid')
const workout = require('../../database/workouts/workout')

const getAllWorkouts = (filterParams) => {
    try {
        const allWorkouts = workout.getAllWorkouts(filterParams)
        return allWorkouts
    } catch (error) {
        throw error
    }
}

const getOneWorkout = (workoutId) => {
    const getWorkout = workout.getOneWorkout(workoutId)
    return getWorkout
}

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
        updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
    }
    const createdWorkout = workout.createOneWorkout(workoutToInsert)
    return createdWorkout
}

const updateOneWorkout = (workoutId, changes) => {
    const updatedWorkout = workout.updateOneWorkout(workoutId, changes)
    return updatedWorkout
}

const deleteOneWorkout = (workoutId) => {
    const deletedWorkout = workout.deleteOneWorkout(workoutId)
    return deletedWorkout
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}
