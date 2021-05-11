const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
        required: true,
        min:0,
        max:5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        'default': Date.now
    }
});
const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    address: String,
    rating: {
        type: Number,
        'default': 0,
        min:0,
        max:5
    },
    facilities:[String],
    reviews: [reviewSchema]
});
mongoose.model('Location', locationSchema, 'locator');