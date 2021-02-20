

const request = require('request')

const url="http://api.weatherstack.com/current?access_key=babc4dc1a79130d598b11e87c6e850ab&query=37.8267,122.4233&units=f"

// request({url:url, json:true}, (error, response)=>{
//     if(error){
//         console.log("unable to connect to weather server")
//     }
//     else if(response.body.error){
//         console.log('unable to find location')

//     }
//     else{
// console.log(response.body.current)
//     }

// })


const geocodeURL="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWJoaW5hdmtyMTk3IiwiYSI6ImNrbGRjdnBhNzFxMGoycm4wbnc4aTFkeDUifQ.df-lr0eB9eZ1AuhRHNN-qw&limit=1"
request({url:geocodeURL,json:true}, (error,response)=>{
    if(error){
        console.log('unable to connect to geolocation api')
    }
    else if(response.body.features.length===0){
        console.log("no location found")
    }
    else{
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
    }
})
