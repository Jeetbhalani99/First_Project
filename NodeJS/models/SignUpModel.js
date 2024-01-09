const mongoose = require("mongoose")

const SignUp = mongoose.Schema(
    {
        name : {
            type : String,
            require:[true, "Please enter Full name"]
        },
        email : {
            type: String,
            require:[true,"Please enter email"]
        },
        contactNumber : {
            type : Number,
            require:[true,"Please enter contact number"]
        },
        password : {
            type : String,
            require:[true,"Please enter password"]
        }
    }
)

const Data = mongoose.model('data',SignUp);

module.exports = Data;