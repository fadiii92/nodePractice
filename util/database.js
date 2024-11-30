mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let _db;

const mongoConnect = (callback)=>{
    MongoClient.connect('mongodb+srv://fadii2002:Runner2002@cluster0.66e4d.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
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
