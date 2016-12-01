const world = new World()

const places = (router) => {
  const queryCity = router.params.town
  addPlacesHtml()
  Dom.displayCities(world.findCities())
  Dom.selectCity(world.findCities(), queryCity)
  Dom.displayPlaces(world.findByCity(queryCity))
  mapByTown(queryCity)
}

const presentation = () => {
  document.querySelector('#container').innerHTML = `
    <h2>Présentation</h2>
    <p>Friendly Places est une interface de recherche permettant de trouver un endroit sympa pour faire des trucs (partager, co-créer sur le Web ou dans la réalité...).</p>
    <p>L'objectif est de lister un maximum de lieux sympas, classés par ville, et localisés via OpenstreetMap. Chaque lieu pourra être détaillé en fonction de ce qu'il propose comme service.</p>
  `
}

const addPlacesHtml = () => {
  document.querySelector('#container').innerHTML = `
    <div id="map"></div>
    <ul id="cities">
      <!-- dynamical data -->
    </ul>
    <ul id="places">
      <!-- dynamical data -->
    </ul>`
}

document.addEventListener('DOMContentLoaded', () => {
  page('/', presentation)
  page('/ville/:town', places)
  page()
})
