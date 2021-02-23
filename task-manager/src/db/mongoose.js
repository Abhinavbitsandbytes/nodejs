const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})

// const User = mongoose.model('User', {
//     name:{
// type:String
//     },
//     age:{
// type:Number
//     }
// })

// const me = new User({
//     name:'Abhinav',
//     age:25
// })

// me.save().then((me)=>{
// console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })

const Task = mongoose.model('task', {
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

const task = new Task({
    description:'This is the description of task 1',
    completed:false
})

task.save().then((task)=>{
    console.log(task)
}).catch((error)=>{
    console.log('error', error)
})