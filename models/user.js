const mongodb = require('mongodb')

const getdb = require('../util/database').getdb

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    save(){
        const db = getdb()
        return db.collection('users').insertOne(this)

    }

    static findById(userId){
        const db = getdb()
        return db.collection('users').findOne({_id:new mongodb.ObjectId(userId)})
    }
}

module.exports = User