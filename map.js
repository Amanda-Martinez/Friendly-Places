const mapLeaflet = ([lat, lon]) => {
  const map = L.map('map').setView([lat, lon], 13)
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map)
}

const mapByTown = (town) => {
  fetch(`http://nominatim.openstreetmap.org/search?q=${town}%20centre&format=json`)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      const lat = json[0].lat
      const lon = json[0].lon
      mapLeaflet([lat, lon])
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
}
