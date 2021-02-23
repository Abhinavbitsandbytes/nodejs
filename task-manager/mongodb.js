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

//  db.collection('users').updateOne({
//         _id: new ObjectID("6033ee3494eb2b311430781d")
//     }, {
//         $set:{
//             name:'Mike'
//         }
//     }).then((result)=>{
// console.log(result)
//     }).catch((error)=>{
// console.log(error)
//     })

// Goal: Use updateMany to complete all tasks
// 1. check the document for updateMany

db.collection('tasks').updateMany({
    completed:false
}, {
    $set:{
        completed:true
    }
}).then((result) =>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})











  }
);
