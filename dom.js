const Dom = {}

Dom.displayPlaces = (places) => {
  const uls = ''
  places.map(place => {
    const li =  document.createElement('li')
    li.innerHTML = `
      <a href="https://www.google.com/maps/@${place.location.lt},${place.location.lg},17z">
        ${place.name} - ${place.city}
      </a>
      <a href="#" class="remove" data-place-id="${place.id}">x</a>
    `
    document.querySelector('#places').appendChild(li)
    document.querySelector(`[data-place-id="${place.id}"]`)
      .addEventListener('click', () => {
        world.remove(place.id)
        location.reload()
      })
  })
}

Dom.displayCities = (cities) => {
  cities.forEach(city => {
    const li = document.createElement('li')
    li.setAttribute('data-city', city)
    li.innerHTML = `<a href="/ville/${city}">${city}</a>`
    document.querySelector('#cities').appendChild(li)
  })
}

Dom.selectCity = (cities, selectCity) => {
  console.log(cities)
  const li = document.querySelector(`[data-city="${selectCity}"]`)
  li.className = `${li.className} selected`.trim()
}
