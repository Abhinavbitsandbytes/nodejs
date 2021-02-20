

const request = require('request')
const geocode = require('./utils/geocode')

const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address){
    console.log('please provide address')
}

else{

    geocode(address, (error, data)=>{
        if(error){
            return console.log(error)
        }
        
        forecast(data.latitude, data.longitude, (error, data) => {
            console.log('Error', error)
            console.log('Data', data)
          })
        })
}






