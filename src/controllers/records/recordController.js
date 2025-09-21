const recordService = require('../../services/records/recordService')

const getRecordForWorkout = (req, res) => {
    const { params: { workoutId } } = req
    try {
        const record = recordService.getRecordForWorkout(workoutId)
        res.status(201).send({ success: true, data: record })
    } catch (error) {
        res.status(error?.status || 500).send({ success: false, message: error?.message || 'Internal Server Error' })
    }
}

module.exports = {
    getRecordForWorkout
}
