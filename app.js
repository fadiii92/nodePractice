const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { create } = require('express-handlebars'); // updated import

const app = express();

// Create and configure the Handlebars engine
const hbs = create({
  layoutsDir: 'views/layouts/',
  defaultLayout: 'main-layout',
  extname: 'hbs',
  helpers: {
    extend: function(context) {
      return context; // Adjust this as needed for your logic
    },
  },
});

// Register the engine with express
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
