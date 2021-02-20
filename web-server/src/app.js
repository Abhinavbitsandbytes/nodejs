const express = require('express')
const path = require('path')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

//we can comment this as above line will look for index.html file and serve so commented code is rendundant

// app.get('', (req, res) =>{
//     res.send('<h1>hello express!</h1>')
// })



app.get('/weather', (req,res)=>{
    res.send('weather')
})
app.listen(3000, ()=>{
    console.log('server is up on port 3000')
})