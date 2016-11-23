const generatePlaces = () => {
	const places = [
		{id:1, name: 'la Panacée', city: Mtp, location: {lat:7.9876, long: 9.87765}}
		{id:2, name: 'Café Brun', city: Bordeaux, location: {lat:8.9876, long: 6.87765}}
	]
	places.map(place => world.new(place))
}

class World {
	findByCity (city) {
		if (! city){
			return this.collection ()
		}
			return this.collection().filter(place => place.city === city )
	}
	findCities () {
		return new Set (this.collection.map(place => place.city))
	}
	new (place) {
		const places = this.collection ()
		places.push(place)
		localStorage.setItem ('places', JSON.stringify (places))
	}
}
