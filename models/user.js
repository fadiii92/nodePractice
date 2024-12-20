const mongodb = require('mongodb')

const getdb = require('../util/database').getdb

class User{
    constructor(username, email, password, cart, id){
        this.username = username
        this.email = email
        this.password = password
        this.cart = cart
        this._id = id
    }

    save(){
        const db = getdb()
        return db.collection('users').insertOne(this)
    }

    addToCart(product){
        // const cartProduct = this.cart.items.findIndex(cp=>cp._id === product._id)

        const updatedCart = {item:[{productId: new mongodb.ObjectId(product._id), quantity:1}]}
        const db = getdb()
        return db
            .collection('users')
            .updateOne(
                {_id: new mongodb.ObjectId(this._id)},
                {$set: {cart:updatedCart}}
            )



    }

    static findById(userId){
        const db = getdb()
        return db.collection('users').findOne({_id:new mongodb.ObjectId(userId)})
    }
}

module.exports = User