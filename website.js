const start = 'https://api.themoviedb.org/3'
const key = 'api_key=dd4f1bd1adf0dca4a7f30b9e36309e4f'
const popularurl = 'https://api.themoviedb.org/3/movie/popular?' + key;
const imagestuff = 'https://image.tmdb.org/t/p/w500';
const mainy = document.getElementById("actual")
const formdata = document.getElementById("formsearch")
const search = document.getElementById("searchbox")



const urlsearch = start + '/search/movie?' + key
const buttondesc = document.getElementById('moviedesc')
const popularsearch = document.getElementById("popularsearch")
const tvpopular = 'https://api.themoviedb.org/3/tv/popular?' + key;
const tvgenre = 'https://api.themoviedb.org/3/genre/tv/list?' + key;
const tvbutton = document.getElementById("tvpopular")
/* console.log("start")
 */const genreshow = document.getElementById("genreshow")
const genrets = document.getElementById("genrets")
popularsearch.addEventListener('click', dumbstuff)
tvbutton.addEventListener('click', dummytv)



genrets.addEventListener("click", blahblah)
function blahblah() {
  genreshow.innerHTML = " "
  thoverdisplay()

}
//disables disaply of genres when clicked outside of genrediv and list
document.addEventListener('click', event => {
  const clickinside = genreshow.contains(event.target)
  if (!clickinside) {
    genreshow.style.display = "none"
  }
})


function thoverdisplay() {



  fetch(tvgenre).then(res => res.json()).then(data => { sbowgenre(data.genres); /* console.log(data.genres)  */ })

}

const tvshowgenre = document.getElementById("tvshow")
tvshowgenre.addEventListener('click', blahblah2)

function blahblah2() {
  genreshow.innerHTML = " "
  thoverdisplay2()

}

function thoverdisplay2() {
  fetch(tvgenre).then(res => res.json()).then(data => {
    sbowgenre2(data.genres);
    /*  console.log(data.genres) */
  })
}
function sbowgenre2(adata) {
  /* console.log("null") */
  /*   console.log(adata) */




  adata.forEach(displaytvgenre => {




    const { name, id } = displaytvgenre


    const tv_genre_display = document.createElement('div')
    tv_genre_display.classList.add('genreshow')
    tv_genre_display.innerHTML = `<button id=${id}>${name}</button>`
    genreshow.style.display = "block"

    genreshow.append(tv_genre_display)
    /* genreshow.append(tv_genre_display) */

    const yaddayadda = document.getElementById(id)
    yaddayadda.addEventListener("click", ssearch2)
    function ssearch2() {

      searchbygenre2(id)
    }
  })
}
let overviewdetails = document.getElementById("overviewdetails")
let submenu = document.getElementById("submenu")


function searchbygenre2(id) {
/*   console.log(id)
 */  fetch(`https://api.themoviedb.org/3/discover/tv?${key}&with_genres=${id}`).then(res => res.json()).then(data => {
  mainy.innerHTML = ""
  data.results.forEach(movie => {

    const { name, poster_path, vote_average, id, overview } = movie;
    const movier = document.createElement('div')
    movier.classList.add('movieclass')
    movier.innerHTML = `<img
     style="height: 190px"
     src="${imagestuff + poster_path}"
     alt="${name}"
   />
   <div class="movieinfo">
     <h3>${name}</h3>

    <span>RATING</span> <span class="${votecolor(vote_average)}">${vote_average}</span>
    <button id="moviedesc">Check</button> <div id="divoverflow"><p id="overviewfile">${overview}</p></div> 
    
   </div>`
    /*   
        } */
    mainy.appendChild(movier)
  })
})
}
function sbowgenre(adata) {
  /*   console.log(adata)
   */
  adata.forEach(displaytvgenre => {



    const { name, id } = displaytvgenre


    const tv_genre_display = document.createElement('div')
    tv_genre_display.classList.add('genreshow')
    tv_genre_display.innerHTML = `<button id=${id}>${name}</button>`
    genreshow.style.display = "block"

    genreshow.append(tv_genre_display)
    /* genreshow.append(tv_genre_display) */

    const yaddayadda = document.getElementById(id)
    yaddayadda.addEventListener("click", ssearch)
    function ssearch() {

      searchbygenre(id)
    }
  })
}


function searchbygenre(id) {
  /* console.log(id) */
  fetch(`https://api.themoviedb.org/3/discover/movie?${key}&with_genres=${id}`).then(res => res.json()).then(data => {
    mainy.innerHTML = ""
    /*  console.log(data) */


    data.results.forEach(movie => {

      const { title, poster_path, vote_average, id, overview } = movie;
      const movier = document.createElement('div')
      movier.classList.add('movieclass')
      movier.innerHTML = `<img
     style="height: 190px"
     src="${imagestuff + poster_path}"
     alt="${title}"
   />
   <div class="movieinfo">
     <h3>${title}</h3>
     <span class="${votecolor(vote_average)}">${vote_average}</span>
     <button id="moviedesc">Check</button> <div id="divoverflow"><p id="overviewfile">${overview}</p></div> 
    
   </div>`
      /*   
          } */
      mainy.appendChild(movier)
    })
  })
}
function dummytv() {
  gettv(tvpopular)
}
function dumbstuff() {
  getmov(popularurl)

}

function gettv(url) {
  fetch(url).then(res => res.json()).then(data => {
    displaytv(data.results)
/*     console.log(data)
 */  })
}
function getmov(url) {
  fetch(url).then(res => res.json()).then(data => {
/*     console.log(data)
 */    disdata(data.results)
  })
}

function displaytv(dat) {
  mainy.innerHTML = ''
  dat.forEach(tvshow => {
    const { name, poster_path, vote_average, id, overview } = tvshow;
    const movier = document.createElement('div')
    movier.classList.add('movieclass')
    movier.innerHTML = `<img
    style="height: 190px"
    src="${imagestuff + poster_path}"
    alt="${name}"
  />
  <div class="movieinfo">
    <h3>${name}</h3>
    <span class="${votecolor(vote_average)}">${vote_average}</span>
    <button id="moviedesc">Check</button> <div id="divoverflow"><p id="overviewfile">${overview}</p></div> 
    
  </div>`
    /*   
        } */
    mainy.appendChild(movier)


    /* const moviedesc = document.getElementById("moviedesc") */

  })

}




function disdata(dat) {
  mainy.innerHTML = ''
  const moviedesc = document.getElementById("moviedesc")
  dat.forEach(movie => {
    const { title, poster_path, vote_average, id, overview } = movie;
    const movier = document.createElement('div')
    movier.classList.add('movieclass')
    movier.innerHTML = `<img
    style="height: 190px"
    src="${imagestuff + poster_path}"
    alt="${title}"
  />
  <div class="movieinfo">
    <h3>${title}</h3>
    <span class="${votecolor(vote_average)}">${vote_average}</span>
     <button id="moviedesc">Check</button> <div id="divoverflow"><p id="overviewfile">${overview}</p></div> 
    
  </div>`
    /*   
        } */
    mainy.appendChild(movier)


    const moviedesc = document.getElementById("moviedesc")

  })


}
function votecolor(rating) {
  if (rating >= 8) {
    return 'green'
  }
  if (rating >= 6) {
    return 'orange'
  }
  else {
    return 'red'
  }
}

formdata.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchboxvalue = search.value;
  if (searchboxvalue) {
    searchresult(urlsearch + '&query=' + searchboxvalue);
  }
})

function searchresult(urli) {
  fetch(urli).then(res => res.json()).then(data => disdata(data.results))
}
search.addEventListener('click', event => {
  const nclickinside = search.contains(event.target)
  if (!nclickinside) {
    search.value = ''
  }
}

)


