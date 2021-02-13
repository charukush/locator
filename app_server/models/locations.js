const mongoose = require('mongoose');
const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    address: String,
    },
    rating: {
        type: Number,
        'default': 0,
        min:0,
        max:5
    },
    facilities:[String]
});
mongoose.model('Location', locationSchema);