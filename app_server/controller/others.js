const about = (req, resp) => {
    resp.render('generic-text', {title: "About page"});
}

module.exports = { about }