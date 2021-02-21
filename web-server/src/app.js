const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
// setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to serve
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
    title:'help',
    name:"Abhinav"

    })
})
app.get('', (req,res) =>{
   
    res.render('index', {
        title:"weather App",
        name:"Abhinav"
    })
})
app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return   res.send({
            error:"you must provide a address"
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, address}={})=>{
     if(error){
         return res.send({error})
     }   
     
     forecast(latitude,longitude, (error, forecastData, location)=>{
         if(error){
             return res.send(error)
         }
         res.send({
             forecast:forecastData,
             location,
             address:req.query.address
         })
     })
    }) 

})

app.get('/products', (req,res)=>{
    if(!req.query.search){
     return   res.send({
            error:"you must provide a search term"
        })
    }
res.send({
    products:[]
})
})

app.get('/help/*', (req,res)=>{
    res.render('404', {
        title:'404',
        name:'Abhinav',
        errorMessage:'Help article not found'
    })
    })
app.get('*', (req,res)=>{
res.render('404', {
    title:'404',
    name:'Abhinav',
    errorMessage:'Page not found'
})
})
app.listen(3000, ()=>{
    console.log('server is up on port 3000')
})