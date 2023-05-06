const express = require('express')
const router = express.Router()
const selectSort = require('../../models/select-sort')
let sort = ''

const restaurants = require('../../models/restaurant')

router.get('/', (req, res) => {
  const selectOption = selectSort(sort)
  return restaurants.find()
    .lean()
    .sort(selectOption)
    .then(restaurant => {
      res.render('index', { restaurants: restaurant })
    })
})

router.get('/search', (req, res) => {
  const selectOption = selectSort(sort)
  if (!req.query.keyword) {
    res.redirect('/')
  }
  const keyword = req.query.keyword
  restaurants.find()
    .lean()
    .sort(selectOption)
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

router.get('/sort/:sortBy', (req, res) => {
  sort = req.params.sortBy
  const referer = req.headers.referer
  res.redirect(referer)
})

module.exports = router