const mongoose = require('mongoose');
const locSchema = mongoose.model('Location');

const reviewsCreate = async (req,res) => {
    const locationId = req.params.id;
    const {author, rating, reviewText} = req.body;

    const location = await locSchema.findById(locationId).exec();
    location.reviews.push({author, rating, reviewText});
    await location.save();
    res.status(200).json(location);

};
const reviewsReadOne = (req,res) => {};
const reviewsUpdateOne = (req,res) => {};
const reviewsDeleteOne = (req,res) => {};


module.exports ={
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewsDeleteOne
}