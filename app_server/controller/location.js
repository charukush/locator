const fetch = require('node-fetch');
const homeList = async (req, res) => {
    const response = await fetch("http://localhost:3000/api/locations/");
    const dataList = await response.json();
    res.render('location-list', {
        title: "Loc8r - Find a palce to work with wifi",
        pageHeader: {
            title: "Loc8r",
            strapline: 'Find palces to work with wifi near you!!'
        },
        sidebar: 'This is a Side bar Locator(Controller) helps you find palces to work out and about.',
        locations: dataList
    });
}

const locatiobInfo = async (req, res) => {
    try {
       
        const response = await fetch(`http://localhost:3000/api/locations/${req.params.id}`);
        const data = await response.json();
        
        res.render('location-info', { title: "Dunkin1", data: data });
    } catch (err) {
        res.render('location-info', { title: "Location-error" });
    }

}

const addReview = (req, res) => {

    
    res.render('location-review-form',
        {
            title: "Review Location",
            pageHeader: { title: 'Review Dunkins' }
        });
}
module.exports = { homeList, locatiobInfo, addReview };