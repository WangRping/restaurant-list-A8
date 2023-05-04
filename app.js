const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')
// const restaurants = require('./restaurant.json')
const restaurants = require('./models/restaurant')
const routes = require('./routes/index') // /index可省略

if (process.env.NODE_ENV !== 'produciton') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(methodOverride('_method'))

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)


app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return restaurants.findById(id)
    .lean()
    .then(restaurant => {
      res.render('show', { restaurant })
    })
})

app.get('/restaurants/:id/edit', (req, res) => {
  const id = req.params.id
  return restaurants.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
})
app.put('/restaurants/:id/', (req, res) => {
  const id = req.params.id
  const editRestaurant = req.body
  return restaurants.findById(id)
    .then(restaurant => {
      for (const key in editRestaurant) {
        restaurant[key] = editRestaurant[key]
      }
      return restaurant.save()
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

app.delete('/restaurants/:id/', (req, res) => {
  const id = req.params.id
  return restaurants.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

app.listen(port, () => {

})