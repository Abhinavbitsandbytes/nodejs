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
        require:true,
        trim:true,
        lowercase:true,
        validate(value){
          if(!validator.isEmail(value)){
              throw new Error('Email is not valid')
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

const me = new User({
    name:'    Mike',
    email:"   ABhinavkr197@gmail.com"

})

me.save().then((me)=>{
console.log(me)
}).catch((error)=>{
    console.log(error)
})

const Task = mongoose.model('task', {
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

// const task = new Task({
//     description:'This is the description of task 1',
//     completed:false
// })

// task.save().then((task)=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log('error', error)
// })