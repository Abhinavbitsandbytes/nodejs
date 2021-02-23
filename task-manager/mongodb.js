// CRUD Create Read Update Delete

const {MongoClient, ObjectID} = require("mongodb");


const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);

// db.collection('users').deleteMany({
//     age:27
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

db.collection('tasks').deleteOne({
    description:'this is description 2'
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})












  }
);
