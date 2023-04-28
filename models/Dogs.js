const mongoose = require("mongoose")
const DogSchema = mongoose.Schema({
    Dogname: String,
    dogcost: String,
    dogsize: {
        type: String,
        validate: {
          validator: function (v) {
            const allowedValues = ["small", "medium", "large"];
            return allowedValues.includes(v.toLowerCase());
          },
          message: "Height must be one of 'small', 'medium', or 'large'",
        },
        }
    })
module.exports = mongoose.model("Dogs",
DogSchema)