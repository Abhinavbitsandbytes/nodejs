const fs = require('fs')

// const book = {
//     title:'ego is the enemy',
//     author:'Abhinav'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)



// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()

// console.log(dataBuffer.toString())

//challange: work with the json and file system

// 1. Load and parse the json data
// 2. change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. test your work by viewing data in the JSON file

const bufferData = fs.readFileSync('1-json.json')
const jsonData = bufferData.toString()
const user = JSON.parse(jsonData)
user.name="Abhinav";
user.age=29

fs.writeFileSync('1-json.json', JSON.stringify(user))
console.log(user)
