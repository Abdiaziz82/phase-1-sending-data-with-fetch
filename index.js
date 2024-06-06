document.querySelector("form").addEventListener("submit" , addMovie);
function addMovie(e) {
  e.preventDefault()
  let title = document.getElementById("title")
let plot = document.getElementById("plot")
let poster = document.getElementById("poster")

const movieObject = { 
  Title: title.value,
  Plot : plot.value,
  Poster: poster.value

}

fetch("http://localhost:3000/movies",{
  method: "POST",
  header: {'content-type':'application/json'},
  body:JSON.stringify(movieObject)
})

}








//update the DOM
function addmovies(movie){
  

  
    let row = document.getElementById("card")
    let div = document.createElement("div")
    div.classList.add("col-3")
  div.style.marginBottom ="25px"
  div.style.paddingBottom= "25px"
  
  
    
    div.innerHTML = `<div class="card text-primary" >
    <img src="${movie.Poster}" height= "280px"  width = "280px" class="card-img-top" alt="...">
    <div class="card-body ">
      <h5 class="card-title">${movie.Title}</h5>
      <p class="card-text">${movie.Plot}</p>
     <button  class="btn btn-outline-danger"  <i class="bi bi-trash3-fill"></i>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
     <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
   </svg></button>
      
    </div>
  </div>`
  row.appendChild(div)
 div.querySelector("button").addEventListener("click", function(){
  div.remove()
  deleteData(movie.id);
  
  
})
}
function deleteData(id){
  fetch(`http://localhost:3000/movies/${id}`,{
    method : "DELETE",
    header: {'content-type':'application/json'},

  })
 
}

 


 //Fetch the data
function getMovies(){
    fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(movies=> {
        movies.forEach(addmovies)
    })
}


//load the DOMcontent
document.addEventListener("DOMContentLoaded",() => {
  getMovies();

})
