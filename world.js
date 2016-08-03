class World {
	find(name) {
		return this.collection().filter(place => place.name === name)
	}
	findByCity(city) {
		if (! city) {
			return this.collection()
		}
		return this.collection().filter(place => place.city === city)
	}
	findCities() {
		return [...new Set(this.collection().map(place => place.city))]
	}
	new(place) {
		const places = this.collection()
		places.push(place)
		localStorage.setItem('places', JSON.stringify(places))
	}
	collection() {
		return JSON.parse(localStorage.getItem('places')) || []
	}
	remove(id) {
		const places = this.collection().filter( place => place.id !== id )
		localStorage.setItem('places', JSON.stringify(places))
	}
}
