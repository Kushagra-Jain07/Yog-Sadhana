const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    stars: {
        type: Number,
        required: true,
        default: 5
    },
    review: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const reviewModel = mongoose.model("Reviews", reviewSchema)

module.exports = reviewModel