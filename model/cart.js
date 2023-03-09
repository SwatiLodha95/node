const mongoose = require ('mongoose');
const cartSchema = mongoose.Schema({
    productId : {type: Number},
    itemNumber : {type: Number},
    totalPrize : {type: Number}

})
module.exports = mongoose.model("carts", cartSchema)