const about = (req, resp) => {
    resp.render('index', {title: "About page"});
}

module.exports = { about }