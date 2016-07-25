class World {
	find(name) {
		return this.collection().filter(place => place.name === name)
	}
	findCity(city) {
		if (! city) {
			return this.collection()
		}
		return this.collection().filter(place => place.city === city)
	}
	new(place) {
		const places = this.collection()
		places.push(place)
		localStorage.setItem('places', JSON.stringify(places))
	}
	collection() {
		return JSON.parse(localStorage.getItem('places')) || []
	}
	remove(name) {
		const places = this.collection().filter( place => place.name !== name )
		localStorage.setItem('places', JSON.stringify(places))
	}
}
