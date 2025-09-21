/* eslint-disable no-throw-literal */
const DB = require('../db.json')
const { saveToDatabase } = require('../utils')

const getAllWorkouts = (filterParams) => {
    try {
        const workouts = DB.workouts
        if (filterParams.mode) {
            return DB.workouts.filter((workout) => workout.mode.toLowerCase().includes(filterParams.mode))
        }
        return workouts
    } catch (error) {
        throw {
            status: 500,
            message: error
        }
    }
}

const getOneWorkout = (workoutId) => {
    const workout = DB.workouts.find((workout) => workout.id === workoutId)
    if (!workout) {
        return
    }
    return workout
}

const createOneWorkout = (newWorkout) => {
    const isAlreadyAdded =
        DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1

    if (isAlreadyAdded) {
        return
    }

    DB.workouts.push(newWorkout)
    saveToDatabase(DB)
    return newWorkout
}

const updateOneWorkout = (workoutId, workoutToUpdate) => {
    const indexForUpdate = DB.workouts.findIndex((workout) => workout.id === workoutId)
    if (indexForUpdate === -1) {
        return
    }
    const updatedWorkout = {
        ...DB.workouts[indexForUpdate],
        ...workoutToUpdate,
        updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
    }
    DB.workouts[indexForUpdate] = updatedWorkout
    saveToDatabase(DB)
    return updatedWorkout
}

const deleteOneWorkout = (workoutId) => {
    const indexForDeletion = DB.workouts.findIndex((workout) => workout.id === workoutId)
    if (indexForDeletion === -1) {
        return
    }
    DB.workouts.splice(indexForDeletion, 1)
    saveToDatabase(DB)
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createOneWorkout,
    updateOneWorkout,
    deleteOneWorkout
}
