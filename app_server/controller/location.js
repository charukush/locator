const homeList = (req,res) => {
    res.render('location-list', {
        title: "Loc8r - Find a palce to work with wifi",
    pageHeader: {
        title:"Loc8r",
        strapline: 'Find palces to work with wifi near you!!'
    },
    sidebar: 'This is a Side bar Locator(Controller) helps you find palces to work out and about.',
    locations: [{
        name: 'Dunkin',
        address: '125 Street, Herndon',
        rating: 5,
        facilities: ['Hot drinks','Food','Premium wifi'],
        distance: '50m'
    },{
        name: 'Paneera',
        address: '22 Street, Herndon',
        rating: 3,
        facilities: ['Drinks','Food','Wifi'],
        distance: '100m'
    }]
});
}

const locatiobInfo = (req,res) => {
    res.render('location-info', {title: "Location Info Detailed page"});
}

const addReview = (req,res) => {
    res.render('location-review-form', {title: "Add Review"});
}
module.exports = {homeList, locatiobInfo, addReview};