const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
type:String,
required:true,
trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true,
        lowercase:true,
        validate(value){
          if(!validator.isEmail(value)){
              throw new Error('Email is not valid')
          }
        }
    },
    password:{
        type:String,
        trim:true,
        minLength:6,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password should not contain "password"')
            }
        }
    },
    age:{
type:Number,
default:0,
validate(value){
    if(value<0){
        throw new Error('Age must be a positive number');
    }
}
    }
})
userSchema.pre('save', async function (next){
    const user = this

    if(user.isModified('password')){
user.password = await bcrypt.hash(user.password,8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User