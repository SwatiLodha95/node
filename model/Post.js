const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
    title: {type: String,required: true, default: "Hello"},
    createdAt: {type: Number,required: true},
    price : {type: Number,required: true},
    quantity: {type: Number,required: true}
});
module.exports = mongoose.model("ecomms",PostSchema);