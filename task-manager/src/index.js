const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) =>{
    const user = new User(req.body)
    user.save().then(()=>{
res.send(user)
    }).catch((error)=>{
res.status(400).send(error)
    })

})

app.post('/tasks', (req,res)=>{
const task = new Task(req.body)
task.save().then(()=>{
    res.send(task)
}).catch((error)=>{
    res.status(400).send(error)
})
})

app.get('/users', (req,res)=>{
    User.find({}).then((users)=>{
       
res.send(users)
    }).catch((error)=>{
        res.send(500).send()
    })
})

app.get('/users/:id', (req,res)=>{
    const _id = req.params.id
    User.findById(_id).then((user)=>{
        if(!user){
          return  res.status(404).send()
        }
res.send(user)
    }).catch((error)=>{
        res.status(500).send()
    })
})
app.listen(port, ()=>{
    console.log('server is up on port', port)
})