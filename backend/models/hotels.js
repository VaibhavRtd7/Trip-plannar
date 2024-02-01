const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({
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
    location :{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:false
    },
    city:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required:true  
    },
    type:{
        type:String,
        required:true,
        enum:['Resort','Hotel', 'Restro']
    }
},{
    timestamps: true
})

const Hotel = mongoose.model('Hotel', HotelSchema);

module.exports = Hotel;