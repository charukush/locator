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

const reviewsDeleteOne = async(req,res) => {
    let respMessage = "Review not found";
    const locationId = req.params.id;
    const reviewId = req.params.reviewid;

    const location = await locSchema.findById(locationId).exec();
    for(var currentReview of location.reviews){
        if(currentReview._id == reviewId){
            respMessage = `Review ${currentReview._id} deleted`;
            currentReview.remove();
        }
    }
    await location.save();
    res.status(202).json({"message": respMessage});
};

const reviewsUpdateOne = async(req,res) => {
    const locationId = req.params.id;
    const reviewId = req.params.reviewid;
    const {author,rating, reviewText} = req.body;
    
    const location = await locSchema.findById(locationId).exec();
    for(var currentReview of location.reviews){
        console.log(`currentReview= ${currentReview}`);
        if(currentReview._id == reviewId){
            if(author){
                currentReview.author = author;
            }
            if(rating){
                currentReview.rating = rating;
            }
            if(reviewText){
                currentReview.reviewText = reviewText;
            }
            await location.save();
            res.status(200).json(location);
            
        }
    }
    res.status(404).json({"message": "Review not found for update"});

    
};

module.exports ={
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewsDeleteOne
}