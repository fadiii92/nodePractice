const express = require('express')

const path = require('path')
const rootDir = require('../util/path')
const adminData = require('../routes/admin')


const router = express.Router()

router.get('/', (req, res, next) => {
    // console.log('In the another middle ware')
    // res.send('<h1>hello from express</h1>')
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    // console.log(adminData.products)

    res.render('shop', {prods: adminData.products, pageTitle: 'Shop', path: '/'})
})

module.exports = router