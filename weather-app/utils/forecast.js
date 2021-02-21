const request = require('request')


const forecast = (latitude, longitude, callback) =>{
    
    const url="http://api.weatherstack.com/current?access_key=babc4dc1a79130d598b11e87c6e850ab&query="+longitude +","+latitude+"&units=f"

    request({url,json:true}, (error, {body})=>{

if(error){
callback('unable to connect to weather service', undefined)
}
else if(body.error){
callback('unable to find location', undefined)
}
else{
    const str = "Temprature is " + body.current.temperature + " but feels like " + body.current.feelslike
    console.log(str)
    
    callback(undefined, str)

}

    })
}

module.exports=forecast