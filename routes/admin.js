const express = require('express')

const path = require('path')
const rootDir = require('../util/path')

const router = express.Router()
const products = []

router.get('/add-product', (req, res, next) => {
    // console.log('In the middle ware')
    // res.send('<h1>The "Add Product" Page</h1>') // one respnse will run
    // res.send("<form action = '/product' method = 'POST'> <input type='text' name = 'productName' placeholder = 'product Name'/><button type = 'submit'>Submit</button></form>")
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/')

})

exports.routes = router
exports.products = products