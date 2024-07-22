const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    name : String,
    email: String,
    role : { type : String, enum : [ 'Admin', 'Author', 'Reader' ], default : 'Reader' },
    password : String
})

const UserModel=  mongoose.model("user", userSchema);

module.exports= {
    UserModel
}