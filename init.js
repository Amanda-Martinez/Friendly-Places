const world = new World()
const extractCityFromUrl = (url) => url.search.split('?q=')[1]
const queryCity = extractCityFromUrl(document.location)

document.addEventListener('DOMContentLoaded', () => {
  displayCities(world.findCities())
  displayPlaces(world.findByCity(queryCity))

  Array.from(document.querySelectorAll('ul#cities>li')).map(li => {
    li.className = li.className.replace("selected", "").trim()
  })
  let city = queryCity
  if (world.findCities().indexOf(queryCity) === -1) {
    city = "Tous"
  }
  console.log(document.querySelector(`[data-city="${city}"]`))
  const li = document.querySelector(`[data-city="${city}"]`)
  li.className = `${li.className} selected`.trim()
})
