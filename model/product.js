const mongoose = require ('mongoose');
const productSchema = mongoose.Schema({
    title : {type : String},
    quantity : {type : Number},
    price : {type : Number},
    createdAt : {type:Number}
})
module.exports = mongoose.model("product", productSchema)