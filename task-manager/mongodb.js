// CRUD Create Read Update Delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

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

    //    db.collection('users').insertOne({
    //        name:"Abhinav",
    //        age:25
    //    }, (error, result)=>{
    //        if(error){
    //            return console.log('Unable to insert user')
    //        }
    //        console.log(result.ops)
    //    })

    // db.collection("users").insertMany([
    //   {
    //     name: "jen",
    //     age: 28,
    //   },
    //   {
    //     name: "Gunther",
    //     age: 27,
    //   },
    // ], (error, result) =>{
    //     if(error){
    //         return console.log('unable to insert documents')
    //     }
    //     console.log(result.ops)
    // });

// Goal: Insert 3 tasks into a new tasks collection
// 1. Use insertMany to insert the documents
//   -description (string), completed (boolean)
//   2. Setup the callbacks to handle error or print ops

db.collection("tasks").insertMany([
    {
        description:'this is description 1',
        completed:true
    },
    {
        description:'this is description 2',
        completed:false
    },
    {
        description:'this is description 3',
        completed:true
    }
], (error, result)=>{
    if(error){
        return console.log('unable to insert document')
    }
    console.log(result.ops)
})










  }
);
