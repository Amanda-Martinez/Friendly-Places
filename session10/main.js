const ghUrl = 'http://api.github.com/repos/bndct-lmbrt/ma-cuisine-creative/contents'
const ghAuth = '?client_id=853265b09b0c25e98614&client_secret=ae4fdddac95edc5e752b764ce27ce1df237fe7df'

document.addEventListener('DOMContentLoaded', () => {
	const ulRecipes = document.querySelector('#recipes')
  fetch(ghUrl + ghAuth)
		.then(response => response.json())
		.then(recipes => 
			ulRecipes.innerHTML = recipes.map(recipe => {
				const title = recipe.name
					.split('.md')[0]
					.replace(/-/g, ' ')

				return `<li><a href="${recipe.download_url}">${title}</a></li>`
			}).join('')
		)
})