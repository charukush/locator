const about = (req, resp) => {
    resp.render(
        'generic-text', 
        {
            title: "About page",
            appName: "Locator"
        }
    );
}

module.exports = { about }