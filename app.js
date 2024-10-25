const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const { create } = require('express-handlebars')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

// Configure Handlebars with the correct file extension
const hbs = create({ extname: '.hbs', defaultLayout: 'main-layout.hbs' })
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: '404' })
})

app.listen(3000)
