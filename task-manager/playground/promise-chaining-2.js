require ('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('603517e5e4fc89727c3e3562').then((user)=>{
    console.log(user)
    return Task.countDocuments({completed:false})
}).then((count =>{
    console.log(count)
})).catch((error)=>{
    console.log(error)
})