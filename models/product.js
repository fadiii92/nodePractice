const mongodb = require('mongodb')

const getdb = require('../util/database').getdb

class Product {
    constructor(title, price, description, imageUrl, id){
        this.title = title
        this.price = price
        this.description = description
        this.imageUrl = imageUrl
        this._id =id ? new mongodb.ObjectId(id) : null
    }

    save(){
        const db = getdb()
        let dbOp;
        if(this._id){
            //update the prodcut
            dbOp = db.collection('products').updateOne({_id : this._id}, {$set:this})
        }
        else{
            dbOp =  db.collection('products').insertOne(this)
        }
        return dbOp
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }

    static fetchAll(){
        const db = getdb()
        return db.collection('products').find().toArray()
        .then(products=>{
            console.log(products)
            return products.reverse()
        })
        .catch(err=>console.log(err))
    }

    static FindById(prodId){
        const db = getdb()
        return db.collection('products').find({_id:new mongodb.ObjectId(prodId)}).next()
        .then(product=>{
            console.log(product)
            return product
        })
        .catch(err=>console.log(err))
    }

    static deleteById(prodId){
        const db = getdb()
        return db.collection('products').deleteOne({_id:new mongodb.ObjectId(prodId)})
        .then(result=>console.log('Deleted'))
        .catch(err=>console.log(err))
    }
}

//model name table
// const Product = sequelize.define('productss', {
//     //attributes
//     id:{
//         type:Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
        
//     },
//     title:Sequelize.STRING,
//     price:{
//         type: Sequelize.DOUBLE,
//         allowNull: false   
//     },
//     description:{
//         type:Sequelize.STRING,
//         allowNull:false
//     },
//     imageUrl:{
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// })

module.exports = Product
