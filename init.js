const world = new World()

document.addEventListener('DOMContentLoaded', () => {

    var map = L.map('map').setView([51.5, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Friendly Places contributors'
    }).addTo(map);

    var LeafIcon = L.Icon.extend({
      options: {
        shadowUrl: './img/leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
      }
    });

    var greenIcon = new LeafIcon({iconUrl: './img/leaf-green.png'}),
      redIcon = new LeafIcon({iconUrl: './img/leaf-red.png'}),
      orangeIcon = new LeafIcon({iconUrl: './img/leaf-orange.png'});

    L.marker([51.5, -0.09], {icon: greenIcon}).bindPopup("I am a green leaf.").addTo(map);
    L.marker([51.495, -0.083], {icon: redIcon}).bindPopup("I am a red leaf.").addTo(map);
    L.marker([51.49, -0.1], {icon: orangeIcon}).bindPopup("I am an orange leaf.").addTo(map);

  const extractCityFromUrl = (url) => url.search.split('?q=')[1]
  const queryCity = extractCityFromUrl(document.location)

  Dom.displayCities(world.findCities())
  Dom.selectCity(world.findCities(), queryCity)
  Dom.displayPlaces(world.findByCity(queryCity))
})
