console.log('Pour ajouter quelques villes en exemple, generatePlaces()')
const generatePlaces = () => {
  const places = [
    {id: 1, name: 'Fairview', city: 'Toulouse', location: {lt: '43.6117398', lg: '3.8767571'}},
    {id: 2, name: 'La Panacée', city: 'Lyon', location: {lt: '43.6069957', lg: '3.87536'}},
    {id: 3, name: 'L\'Heure bleue', city: 'Lyon', location: {lt: '43.6007398', lg: '3.8767571'}},
    {id: 5, name: 'Le Café Bun', city: 'Montpellier', location: {lt: '43.6117398', lg: '3.8767571'}}
  ]
  places.map(place => world.new(place))
}
