{
const ghUrl = 'http://api.github.com/repos/bndct-lmbrt/ma-cuisine-creative/contents'
const ghAuth = '?client_id=853265b09b0c25e98614&client_secret=ae4fdddac95edc5e752b764ce27ce1df237fe7df'

document.addEventListener('DOMContentLoaded', () => {
	const ulRecipes = document.querySelector('#recipes')
	fetch(ghUrl + ghAuth)
		.then(response => response.json())
		.then(json => ulRecipes.innerHTML =
			json.map(recipe =>
				`<li><a href="${recipe.download_url}">${recipe.name}</a></li>`)
			.join('\n')
		)
})
}
