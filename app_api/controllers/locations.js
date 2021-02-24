const mongoose = require('mongoose');
const locSchema = mongoose.model('Location');

const locationsCreate = async(req,res)=>{
    const createResp = await locSchema.create({
        name: req.body.name,
        address: req.body.address,
        facilities: req.body.facilities
    });
    if(createResp){
        res.status(200)
        .json({"status":"Success"}); 
    }else{
        console.error(err);
        res.status(500)
           .json(err); 
    }

};

const locationsListByDistance = async(req,res)=>{
    const locationList = await locSchema.find({});
    if(locationList){
        res.status(200)
           .json(locationList);
    }else{
        console.error(err);
        res.status(400)
           .json(err); 
    }

};

const locationsReadOne = (req,res)=>{
    console.log(`Input ID is ${req.params.id}`);
    locSchema.findById(req.params.id)
              .exec((err, location)=>{
                  if(!location){
                   return res   
                      .status(404)
                      .json({
                          "message": "location not found"
                      });
                  } else if(err) {
                      return res
                        .status(404)
                        .json(err);
                  }
                  console.log(err);
                  res.status(200)
                     .json(location);
              });

}
const locationsUpdate = async (req,res)=>{
    console.log('locationsUpdate');
    const locationData = await locSchema.findById(req.params.id).exec();
    if(locationData){
        locationData.name = req.body.name;
        const saveResp = await locationData.save();
        res.status(200)
           .json({message: "Data updated", saveResp: saveResp});
    }else{
        console.error(err);
        res.status(400)
           .json(err); 
    }
    
};
const locationsDeleteOne = async(req,res)=>{
    const locationRemove = await locSchema.findByIdAndRemove(req.params.id).exec();
    if(locationRemove){
        res.status(200)
           .json({message: "Data Removed"});
    }else{
        console.error(err);
        res.status(400)
           .json(err); 
    }

};

module.exports = {
    locationsCreate,
    locationsListByDistance,
    locationsReadOne,
    locationsUpdate,
    locationsDeleteOne
}