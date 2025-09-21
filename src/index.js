const express = require('express')
const bodyParser = require('body-parser')
// const v1WorkoutRoter = require('./v1/routes/workouts/workoutRoutes')
const v1ProductRouter = require('./v1/routes/products/productsRoutes')

const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
// app.use('/api/v1/workouts', v1WorkoutRoter)
app.use('/api/v1/products', v1ProductRouter)

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`)
})
