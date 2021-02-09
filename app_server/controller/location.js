const homeList = (req,res) => {
    res.render('location-list', {title: "Locator List Home page"});
}

const locatiobInfo = (req,res) => {
    res.render('location-info', {title: "Location Info Detailed page"});
}

const addReview = (req,res) => {
    res.render('location-review-form', {title: "Add Review"});
}
module.exports = {homeList, locatiobInfo, addReview};