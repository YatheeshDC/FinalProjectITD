let mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

const UserSchema = new mongoose.Schema({
    userName: { type: String,  required: true, unique: true },
    userEmail: { type: String,  required: true, unique: true },
    userPassword: { type: String,  required: true },
    token:{type:String},
    userNumber:{type: Number,required:true},
  });

const MbsUsers=mongoose.model("brickusers",UserSchema)

module.exports=MbsUsers