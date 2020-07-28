const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    },
    owner: {                                                // owner of each task is stored with task in db
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'                                         // to refer User model
    }
},{
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task