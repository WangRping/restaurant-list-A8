const express = require('express')
const router = express.Router()

const restaurants = require('../../models/restaurant')

router.get('/', (req, res) => {
  return restaurants.find()
    .lean()
    .then(restaurant => {
      res.render('index', { restaurants: restaurant })
    })
})

router.get('/search', (req, res) => {
  if (!req.query.keyword) {
    res.redirect('/')
  }
  const keyword = req.query.keyword
  restaurants.find()
    .lean()
    .then(restaurant => {
      const filterRestaurants = restaurant.filter(restaurant => restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(keyword.toLowerCase()))
      res.render('index', { restaurants: filterRestaurants, keyword })
    })
})

router.post('/new', (req, res) => {
  const newRestaurant = req.body
  return restaurants.create(newRestaurant)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router