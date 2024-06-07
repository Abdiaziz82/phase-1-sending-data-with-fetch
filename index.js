//adding eventListener
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

// Fetching data 
fetch("http://localhost:3000/movies",{
  method: "POST",
  header: {'content-type':'application/json'},
  body:JSON.stringify(movieObject)
})
.then(res => res.json())
.then(data => {
  addmovies(data)
})

}








//step3. update the DOM
function addmovies(movie){
  

  
    let row = document.getElementById("card")
    let div = document.createElement("div")
    div.classList.add("col-3")
  div.style.marginBottom ="25px"
  div.style.paddingBottom= "25px"
  div.style.background = " #AEB6BF "
  
  
    
    div.innerHTML = `<div class="card "style = "color:#AEB6BF " >
    <img src="${movie.Poster}" height= "280px"  width = "280px" class="card-img-top" alt="...">
    <div class="card-body" style = "background:#212F3C  ">
      <h5 class="card-title">${movie.Title}</h5>
      <p class="card-text">${movie.Plot}</p>
     <button  class="btn btn-outline-danger  <i class="bi bi-calendar-x-fill"></i> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-x-fill" viewBox="0 0 16 16">
     <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M6.854 8.146 8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 1 1 .708-.708"/>
   </svg ">delete</button>
   <button class="btn btn-outline-success <i class="bi bi-play-circle-fill"></i> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
 </svg>watch</button>
      
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

 


 //step2.Fetch the data
function getMovies(){
    fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(movies=> {
        movies.forEach(addmovies)
    })
}


//step1.load the DOMcontent
document.addEventListener("DOMContentLoaded",() => {
  getMovies();

})
