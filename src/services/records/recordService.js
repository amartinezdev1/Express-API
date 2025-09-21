/* eslint-disable no-useless-catch */
const Record = require('../../database/records/record')

const getRecordForWorkout = (workoutId) => {
    try {
        const record = Record.getRecordForWorkout(workoutId)
        return record
    } catch (error) {
        throw error
    }
}

module.exports = {
    getRecordForWorkout
}
