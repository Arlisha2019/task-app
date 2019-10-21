// CRUD cread, read, delete , update

// const mongodb = require('mongodb')

// const MongoClient = mongodb.MongoClient

// const { MongoClient, ObjectID } = require('mongodb')

// const connectUrl = 'mongodb://127.0.0.1:27017'

// const databaseName = 'task-manager'

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.getTimestamp());
// console.log(id.toHexString().length)

// MongoClient.connect(connectUrl, { 
//     useUnifiedTopology: true,
//     useNewUrlParser: true }, (error, client) => {
//     if (error) {
//       return console.log('Unable to connect to database!')
//     } 

//     const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 33
    // }).then((result) => {
    //     console.log(result.MongoClient)
    // }).catch((error) => {
    //     console.log(error)
    // })

//     db.collection('tasks')
//         .deleteOne({
//         description : 'Wash Dishes'
//     }).then((result) => {
//         console.log(result.deletedCount)
//     }).catch((error) => {
//         console.log(error)
//     })
// })