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
    res.render('location-info', {
        title: "Dunkin",
         pageHeader:{
             title: 'Loc8r',
         },
         sidebar: {
             contex:' Contex(Side bar) on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
             callToAction: 'If(Side bar call on Action text) you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
         },
         location: {
             name: 'Dunkin',
             address: '125 Street, Herndon',
             rating: 5,
             facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
             cords: {lat: 51.455041, lng: -0.9690884},
             openingTimes: [
                 {
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                 },
                 {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                 },
                 {
                    days: 'Sunday',
                    closed: true
                 }
             ],
             reviews:[
                 {
                    author: 'Simon Holmes',
                    rating: 5,
                    timestamp: '16 July 2013',
                    reviewText: 'What a great place. I can\'t say enough good things about it.'
                 },
                 {
                    author: 'Charlie Chaplin',
                    rating: 3,
                    timestamp: '16 June 2013',
                    reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.' 
                 }
             ]
         }
    });
}

const addReview = (req,res) => {
    res.render('location-review-form', 
    {
        title: "Review Location",
        pageHeader: { title: 'Review Dunkins'}
    });
}
module.exports = {homeList, locatiobInfo, addReview};