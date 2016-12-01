const ghUrl = 'https://raw.githubusercontent.com/avernois/devfriendlyplaces/master/locations/montpellier.json'

document.addEventListener('DOMContentLoaded', () => {
    const ulLocations = document.querySelector('#locations')
    fetch(ghUrl)
        .then(response => response.json())
        .then(json => ulLocations.innerHTML =
            json.places.map(place =>
                `<li><a href="${place.url}">${place.name} - (${place.lat},${place.lon})</a></li>`)
            .join('\n')
        )
})

