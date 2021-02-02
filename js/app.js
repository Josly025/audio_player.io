const search = document.getElementById("search");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const player = document.getElementById("player");
const searchBtn = document.getElementById("search-btn");
const audio = document.getElementById("audio");
const audioSource = document.getElementById("audioSource");
const progressBar = document.getElementById("progress-bar");
const forwardBtn = document.getElementById("forwardBtn");
const backwardBtn = document.getElementById("backwardBtn");
const table = document.querySelector(".table");

searchBtn.addEventListener("click", searchTrack);

//number for index of data
let number = 0;
forwardBtn.addEventListener("click", function () {
  if (number >= 0 && number < 20) {
    number += 1;
    searchTrack();
  } else {
    number = 0;
  }
});

backwardBtn.addEventListener("click", function () {
  if (number > 0 && number <= 20) {
    number -= 1;
    searchTrack();
  } else {
    number = 0;
  }
  searchTrack();
});

// window.onload = () => {

function searchTrack(e) {
  let artist = search.value;
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
      audio.setAttribute("src", `${tracks[number].preview}`);
      let output = ` <h1 class="tracks">${tracks[number].album.title}</h1>
             <h2 class="tracks">${tracks[number].artist.name}</h2>
                <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
             <img class="uk-border-rounded uk-margin-small-top uk-margin-small-bottom" data-src="${tracks[number].album.cover_medium}" width="auto" height="100%"  uk-img>
                <div class="uk-position-center">
                <div class="uk-transition-slide-top-small"><h4 class="uk-margin-remove">${tracks[number].album.title}</h4></div>
                <div class="uk-transition-slide-bottom-small"><h4 class="uk-margin-remove">${tracks[number].artist.name}</h4></div>
            </div>
            </div>
             `;
      let outputTable = "";

      tracks.map((track, i) => {
        outputTable += `
          <tr>
            <td>${tracks[i].artist.name}</td>
            <td>${tracks[i].album.title}</td>
             <td><img class="uk-preserve-width uk-border-circle" src=${tracks[i].album.cover_small} width="50" alt=""></td>
            <td><button class="uk-button uk-button-default" type="button">Button</button></td>
        </tr>
         `;
      });

      table.innerHTML = outputTable;
      play.innerHTML = output;
    })
    .catch(function (error) {
      console.error(error);
    });
  e.preventDefault();
}

let currentValue = 0;
playBtn.addEventListener("click", function () {
  audio.play();
  //
  //
  // if (currentValue === 30) {
  //   currentValue += 0;
  // } else {
  //   setInterval(function () {
  //     currentValue += 1;
  //     console.log("ran");
  //     console.log(currentValue);
  //     progressBar.setAttribute("value", currentValue);
  //   }, 1000);
  // }
});

pauseBtn.addEventListener("click", function () {
  clearInterval(currentValue);
  audio.pause();
});
