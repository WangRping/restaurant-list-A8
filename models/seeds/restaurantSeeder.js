const Restaurant = require('../restaurant')
const restaurants = require('../../restaurant.json')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const db = require('../../config/mongoose')

db.once('open', () => {
  restaurants.results.forEach(restaurant => {
    Restaurant.create({ name: `${restaurant.name}`, name_en: `${restaurant.name_en}`, category: `${restaurant.category}`, image: `${restaurant.image}`, location: `${restaurant.location}`, phone: `${restaurant.phone}`, google_map: `${restaurant.google_map}`, rating: `${restaurant.rating}`, description: `${restaurant.description}` })
  })
})