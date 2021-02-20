const https = require('https')
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Ballia.json?access_token=pk.eyJ1IjoiYWJoaW5hdmtyMTk3IiwiYSI6ImNrbGRjdnBhNzFxMGoycm4wbnc4aTFkeDUifQ.df-lr0eB9eZ1AuhRHNN-qw&limit=1"

const request = https.request(url, (response)=> {
    let data=''

response.on('data', (chunk)=>{
    data=data + chunk.toString()
})

response.on('end', ()=>{
    console.log(JSON.parse(data))
})
})
request.on('error', (error)=>{
    console.log('error', error)
})

request.end()