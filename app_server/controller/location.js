const homeList = (req,res) => {
    res.render('index', {title: "Locator Home"});
}

const locatiobInfo = (req,res) => {
    res.render('index', {title: "Location Info"});
}

const addReview = (req,res) => {
    res.render('index', {title: "Add Review"});
}
module.exports = {homeList, locatiobInfo, addReview};