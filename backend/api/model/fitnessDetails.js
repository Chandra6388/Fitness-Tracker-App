const mongoose  = require('mongoose')

const FitnessSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    workoutname:String,
    workoutduration:String,
    burncalories:String,
    notes:String
})

module.exports = mongoose.model('FitnessDetails',FitnessSchema)