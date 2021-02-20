const express = require('express')

const app = express()

app.get('', (req, res) =>{
    res.send('<h1>hello express!</h1>')
})

app.get('/help', (req,res)=>{
    res.send({
       name:'Abhinav',
       age:26 
    })
})

app.get('/about', (req,res)=>{
    res.send('about')
})

app.get('/weather', (req,res)=>{
    res.send('weather')
})
app.listen(3000, ()=>{
    console.log('server is up on port 3000')
})