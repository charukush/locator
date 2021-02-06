const { response } = require("express")

const index = (req,res) => {
    res.render('index', {title: 'I m here'});
}
module.exports = {index};