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
const reviewsReadOne = async (req,res) => {
    const locationId = req.params.id;
    const reviewId = req.params.reviewid;
    console.log(`locationId=${locationId}, reviewId=${reviewId}`);

    const location = await locSchema.findById(locationId).exec();
    for(var currentReview of location.reviews){
        console.log(`currentReview= ${currentReview}`);
        if(currentReview._id == reviewId){
            res.status(200).json(currentReview);
        }
    }
    res.status(404).json({"message": "Review not found"});

};
const reviewsUpdateOne = (req,res) => {};
const reviewsDeleteOne = (req,res) => {};


module.exports ={
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewsDeleteOne
}