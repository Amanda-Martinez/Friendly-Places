const world = new World()

document.addEventListener('DOMContentLoaded', () => {
  const extractCityFromUrl = (url) => url.search.split('?q=')[1]
  const queryCity = extractCityFromUrl(document.location)

  Dom.displayCities(world.findCities())
  Dom.selectCity(world.findCities(), queryCity)
  Dom.displayPlaces(world.findByCity(queryCity))
})
