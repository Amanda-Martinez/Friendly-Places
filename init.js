const world = new World()
const extractCityFromUrl = (url) => url.search.split('?q=')[1]
const queryCity = extractCityFromUrl(document.location)

document.addEventListener('DOMContentLoaded', () => {
  displayPlaces(world.findCity(queryCity))
})
