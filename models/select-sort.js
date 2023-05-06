function selectSort(sort) {
  switch (sort) {
    case 'name-by-asc':
      return { name: 'asc' }
    case 'name-by-desc':
      return { name: 'desc' }
    case 'loaction':
      return { location: 'asc' }
    case 'category':
      return { category: 'asc' }
    default:
      return { name: 'asc' }
  }
}

module.exports = selectSort