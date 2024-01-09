const mongoose = require("mongoose")

const Login = mongoose.Schema(
    {
        
        email : {
            type: String,
            require:[true,"Please enter email"]
        },
        password : {
            type : String,
            require:[true,"Please enter password"]
        }
    }
)

const Data = mongoose.model('login',Login);

module.exports = Data;