const search = document.getElementById("search");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const player = document.getElementById("player");
const searchBtn = document.getElementById("search-btn");
const audio = document.getElementById("audio");
const audioSource = document.getElementById("audioSource");
const progressBar = document.getElementById("progress-bar");

searchBtn.addEventListener("click", searchTrack);

function searchTrack(e) {
  let artist = search.value;
  console.log("hello");
  console.log(artist);
  const apiCall = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: `${artist}` },
    headers: {
      "x-rapidapi-key": "cb5b1f2f44msh3ccf1d2e09978fap1363abjsn0c69cbf92586",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  axios
    .request(apiCall)
    .then(function (response) {
      let tracks = response.data.data;
      console.log(tracks);
      audio.setAttribute("src", `${tracks[0].preview}`);
      let output = ` <h1 class="tracks">${tracks[0].album.title}</h1>
             <h2 class="tracks">${tracks[0].artist.name}</h2>
                <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
             <img class="uk-border-rounded uk-margin-small-top uk-margin-small-bottom" data-src="${tracks[0].album.cover_medium}" width="auto" height="100%"  uk-img>
                <div class="uk-position-center">
                <div class="uk-transition-slide-top-small"><h4 class="uk-margin-remove">${tracks[0].album.title}</h4></div>
                <div class="uk-transition-slide-bottom-small"><h4 class="uk-margin-remove">${tracks[0].artist.name}</h4></div>
            </div>
            </div>
             `;

      play.innerHTML = output;
    })
    .catch(function (error) {
      console.error(error);
    });
  e.preventDefault();
}

playBtn.addEventListener("click", function () {
  let currentValue = 0;

  const timer = setInterval(function () {
    console.log("hello");
    currentValue++;
    if (timer === 30) {
      clearInterval(timer);
    }
  }, 30 * 1000);

  progressBar.setAttribute("value", currentValue);
  audio.play();
});

pauseBtn.addEventListener("click", function () {
  audio.pause();
});
