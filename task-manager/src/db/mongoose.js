const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})

const User = mongoose.model('User', {
    name:{
type:String,
trim:true
    },
    email:{
        type:String,
        required:true,
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

// const me = new User({
//     name:'    Ranu',
//     email:"   ranu@gmail.com",
// password:'strongCharacter'

// })

// me.save().then((me)=>{
// console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })

const Task = mongoose.model('task', {
    description:{
        type:String,
        trim:true,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const task = new Task({
    description:'     New task',
    completed:false
})

task.save().then((task)=>{
    console.log(task)
}).catch((error)=>{
    console.log('error', error)
})