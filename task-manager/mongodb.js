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

// db.collection('users').findOne({_id:new ObjectID("6033ee3494eb2b311430781e")}, (error, user) => {
//     if(error){
//         return console.log('unable to fetch')
//     }

//     console.log(user)
// })

db.collection('users').find({age:25}).toArray((error, users)=>{

    if(error){
        return console.log('unable to fetch')
    }

    console.log(users)
})


  }
);
