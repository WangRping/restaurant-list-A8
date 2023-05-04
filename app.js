const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')
const restaurants = require('./models/restaurant') // const restaurants = require('./restaurant.json')
if (process.env.NODE_ENV !== 'produciton') {
  require('dotenv').config()
}
const routes = require('./routes/index') // /index可省略
require('./config/mongoose')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {

})