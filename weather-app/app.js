

const request = require('request')

const url="http://api.weatherstack.com/current?access_key=babc4dc1a79130d598b11e87c6e850ab&query=37.8267,122.4233"

request({url:url}, (error, response)=>{
const data = JSON.parse(response.body)
console.log(data.current)

})
