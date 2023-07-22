const apikey = 'api_key=dd4f1bd1adf0dca4a7f30b9e36309e4f'
const upcomingimage = 'https://image.tmdb.org/t/p/w500';

let upcoming = document.getElementById("upcoming")
let nowplaying = document.getElementById("nowplaying")

upcoming.addEventListener("click", displayupcoming)

function displayupcoming() {

    fetch('https://api.themoviedb.org/3/movie/upcoming?' + apikey + '&sort_by=popularity.desc&primary_release_date.gte=2023-07-22').then(res => res.json()).then(data => {

        getupcoming(data.results)
    }
    )

}
nowplaying.addEventListener("click", displaynowplaying)
function displaynowplaying() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?' + apikey).then(res => res.json()).then(data => {
        mainy.innerHTML = ''

        data.results.forEach(movie => {
            const { original_title, poster_path, vote_average, id, release_date, overview } = movie;
            const movier = document.createElement('div')
            movier.classList.add('movieclass')
            movier.innerHTML = `<img
          style="height: 190px"
          src="${upcomingimage + poster_path}"
          alt="${original_title}"
        />
        <div class="movieinfo">
          <h3>${original_title}</h3>
          <span class="releasedateupcoming"> Release date : </span>
       
          <span class="${votecolor(vote_average)}">${vote_average}</span>
          <button id="moviedesc">Check</button> <div id="divoverflow"><p id="overviewfile">${overview}</p></div> 
    
          
        </div>`
            /*   
                } */
            mainy.appendChild(movier)
        })
    })
}


function getupcoming(data) {

    mainy.innerHTML = ''

    data.forEach(movie => {
        const { original_title, poster_path, vote_average, id, release_date, overview } = movie;
        const movier = document.createElement('div')
        movier.classList.add('movieclass')
        movier.innerHTML = `<img
      style="height: 190px"
      src="${upcomingimage + poster_path}"
      alt="${original_title}"
    />
    <div class="movieinfo">
      <h3>${original_title}</h3>
      <span class="releasedateupcoming"> Release date : </span>
      <span class="releasedateupcoming" style="font-size : 24px; color : yellow">${release_date}</span>
      <button id="moviedesc">Check</button> <div id="divoverflow"><p id="overviewfile">${overview}</p></div> 
    
    
      
    </div>`
        /*   
            } */
        mainy.appendChild(movier)
    })

}
