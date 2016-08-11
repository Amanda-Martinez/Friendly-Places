const world = new World()

document.addEventListener('DOMContentLoaded', () => {
  const extractCityFromUrl = (url) => url.search.split('?q=')[1] || 'All'
  const queryCity = extractCityFromUrl(document.location).replace('/', '')

  Dom.displayCities(world.findCities())
  Dom.selectCity(world.findCities(), queryCity)
  Dom.displayPlaces(world.findByCity(queryCity))

  mapByTown(queryCity)
})
