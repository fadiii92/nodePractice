mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
require('dotenv').config()

let _db;

const mongoConnect = (callback)=>{
    MongoClient.connect(process.env.MONGO_URL)
    .then(client=>{
        // console.log(client)
        _db = client.db()
        callback()
    })
    .catch((err)=>console.log(err))
}

const getdb = ()=>{
    if(_db)
        return _db
    throw "No Database Found"
}

module.exports.mongoConnect = mongoConnect
module.exports.getdb = getdb
