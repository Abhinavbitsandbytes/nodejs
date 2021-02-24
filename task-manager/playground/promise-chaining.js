require('../src/db/mongoose')
const User = require('../src/models/user')

// 60351cb831d6e46584a8a8d3

//we are not using $set operator for update of mongodb native driver because mongoose take care that for us

User.findByIdAndUpdate('60351f4c638b937dfc9609e4', {age:1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})