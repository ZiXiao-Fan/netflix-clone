

window.onload = () => {
  getOriginals()
   getTrendingNow()
   getTopRated()
}

// ** Helper function that makes dynamic API calls **
function fetchMovies(url, dom_element, path_type) {
  // Use Fetch with the url passed down 
fetch(url)
  .then(Response => {
  console.log(Response)
    if(Response.ok) {
      return Response.json()
    }else {
      throw new Error('Something went wrong')
    }
  }).then(data=> {
    showMovies(data,dom_element, path_type)
  }).catch(error=>{
    console.log(error)
  })

}



//  ** Function that displays the movies to the DOM **
showMovies = (movies, dom_element, path_type) => {
  
  // Create a variable that grabs id or class
let moviesEl = document.querySelector(dom_element)

  // Loop through object
for(let movie of movies.results)
{// Within loop create an img element
  let imageElement = document.createElement('img')
  // Set attribute
  imageElement.setAttribute('data-id', movie.id)

    // Set source
  imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]
}`





    moviesEl.appendChild(imageElement)
}

}


// ** Function that fetches Netflix Originals **
function getOriginals() {
let url = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
  fetchMovies(url, '.original__movies', 'poster_path')
}
// ** Function that fetches Trending Movies **
function getTrendingNow() {
let url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'

fetchMovies(url, '#trending', 'backdrop_path')}
// ** Function that fetches Top Rated Movies **
function getTopRated() {
let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
  fetchMovies(url, '#top_rated', 'backdrop_path')
}










