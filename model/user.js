const mongoose = require ('mongoose');
const userSchema = mongoose.Schema({
    name : {type: Number},
    contact : {type: Number},
    email : {type: String}
})
module.exports = mongoose.model("users", userSchema)