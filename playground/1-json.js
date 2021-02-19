const fs = require('fs')

const bufferData = fs.readFileSync('1-json.json')
const jsonData = bufferData.toString()
const user = JSON.parse(jsonData)
user.name="Abhinav";
user.age=29

fs.writeFileSync('1-json.json', JSON.stringify(user))
console.log(user)
