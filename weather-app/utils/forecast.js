const request = require('request')


const forecast = (latitude, longitude, callback) =>{
    
    const url="http://api.weatherstack.com/current?access_key=babc4dc1a79130d598b11e87c6e850ab&query="+longitude +","+latitude+"&units=f"


    request({url:url,json:true}, (error, response)=>{

if(error){
callback('unable to connect to weather service', undefined)
}
else if(response.body.error){
callback('unable to find location', undefined)
}
else{
    callback(undefined, response.body)

}

    })
}

module.exports=forecast