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
        .then(result=>console.log('usercreated'))
        .catch(err=>console.log("Could not create user", err))
    }

    static findById(userId){

    }
}

module.exports = User