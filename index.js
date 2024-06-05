
function addmovies(movie){
  
    let row = document.getElementById("card")
    let div = document.createElement("Div")
    div.classList.add("col-3")
  div.style.marginBottom ="25px"
  div.style.paddingBottom= "25px"
  
    
    div.innerHTML = `<div class="card text-primary" >
    <img src="${movie.Poster}" height= "280px"  width = "280px" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${movie.Title}</h5>
      <p class="card-text">${movie.Plot}</p>
      <a href="#" class="btn btn-outline-danger">watch more</a>
    </div>
  </div>`
  row.appendChild(div)
}


function getMovies(){
    fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(movies=> {
        movies.forEach(addmovies)
    })
}



document.addEventListener("DOMContentLoaded",() => {
getMovies();
})