const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    country : {
        type:String,
        required:true
    },
    image : {
        type:String,
        required:true
    },
},{
    timestamps: true
})

const City = mongoose.model('City', CitySchema);

module.exports = City;