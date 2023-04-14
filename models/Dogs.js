const mongoose = require("mongoose")
const DogSchema = mongoose.Schema({
    Dogname: String,
    dogsize: String,
    dogcost: String
})
module.exports = mongoose.model("Dogs",
DogSchema)