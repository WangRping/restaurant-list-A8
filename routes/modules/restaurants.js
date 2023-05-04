const express = require('express')
const router = express.Router()

const restaurants = require('../../models/restaurant')

router.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return restaurants.findById(id)
    .lean()
    .then(restaurant => {
      res.render('show', { restaurant })
    })
})

router.get('/restaurants/:id/edit', (req, res) => {
  const id = req.params.id
  return restaurants.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
})

router.put('/restaurants/:id/', (req, res) => {
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

router.delete('/restaurants/:id/', (req, res) => {
  const id = req.params.id
  return restaurants.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router