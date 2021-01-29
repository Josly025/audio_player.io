const search = document.getElementById("search");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const player = document.getElementById("player");
const searchBtn = document.getElementById("search-btn");
const audio = document.getElementById("audio");
const audioSource = document.getElementById("audioSource");
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
             <img class="uk-border-rounded uk-margin-small-top uk-margin-small-bottom" data-src="${tracks[0].album.cover}" width="auto" height="auto"  uk-img>

             `;

      play.innerHTML = output;
      playAudio();
    })
    .catch(function (error) {
      console.error(error);
    });
  e.preventDefault();
}

// function playAudio() {
//   audio.play();
// }
