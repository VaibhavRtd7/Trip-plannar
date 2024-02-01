const mongoose = require('mongoose');

const PlaceSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    description : {
        type:String,
        required:true
    },

    image : {
        type:String,
        required:true
    },

    city : {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required:true
    },
}, {timestamps:true})

const Place = mongoose.model('Place', PlaceSchema);
module.exports = Place;