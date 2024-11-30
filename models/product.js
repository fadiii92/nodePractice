const getdb = require('../util/database').getdb

class Product {
    constructor(title, price, description, imgageUrl){
        this.title = title
        this.price = price
        this.description = description
        this.imageUrl = this.imageUrl
    }

    save(){
        const db = getdb()
        return db.collection('products').insertOne(this)
        .then(result=>console.log(result))
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