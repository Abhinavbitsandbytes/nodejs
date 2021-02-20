const express = require('express')
const path = require('path')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine','hbs')

app.use(express.static(publicDirectoryPath))

app.get('/about', (req,res) =>{
   
    res.render('about', {
        title:"about",
        name:"Abhinav"
    })
})
app.get('/help', (req,res) =>{
   
    res.render('help', {
        helpText:"This is some helpful text",
    })
})
app.get('', (req,res) =>{
   
    res.render('index', {
        title:"weather App",
        name:"Abhinav"
    })
})
app.get('/weather', (req,res)=>{
    res.send('weather')
})
app.listen(3000, ()=>{
    console.log('server is up on port 3000')
})