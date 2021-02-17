const mongoose = require('mongoose');
const locSchema = mongoose.model('Location');

const locationsCreate = (req,res)=>{
    res
        .status(200)
        .json({"status":"Success"});
};

const locationsListByDistance = (req,res)=>{
    res
    .status(200)
    .json({"status":"Success1"});
};

const locationsReadOne = (req,res)=>{
    console.log(`Input ID is ${req.params.id}`);
    locSchema.findById(req.params.id)
              .exec((err, location)=>{
                  console.log(err);
                  res.status(200)
                     .json(location);
              });

}

module.exports = {
    locationsCreate,
    locationsListByDistance,
    locationsReadOne
}