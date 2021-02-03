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
const counter = document.getElementById("counter");
searchBtn.addEventListener("click", searchTrack);
///new
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

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

window.onload = (e) => {
  let artistOne = "Drake";
  console.log(artistOne);
  const apiCall = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: `${artistOne}` },
    headers: {
      "x-rapidapi-key": "cb5b1f2f44msh3ccf1d2e09978fap1363abjsn0c69cbf92586",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  axios
    .request(apiCall)
    .then(function (response) {
      let tracksOne = response.data.data;

      console.log(tracksOne);
      audio.setAttribute("src", `${tracksOne[number].preview}`);
      let outputOne = ` <h1 class="tracks tracks-main">${tracksOne[number].title}</h1>
             <h2 class="tracks uk-margin-medium-bottom extra">${tracksOne[number].artist.name}</h2>
                <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
             <img id="ablum-cover" class="uk-border-rounded uk-margin-large-top uk-margin-large-bottom" data-src="${tracksOne[number].album.cover_medium}" width="auto" height="100%"  uk-img>
             
                <div class="uk-position-center">
                <div class="uk-transition-slide-top-small"><h4 class="uk-margin-remove">${tracksOne[number].album.title}</h4></div>
                <div class="uk-transition-slide-bottom-small"><h4 class="uk-margin-remove">Album</h4></div>
            </div>
            </div>
             `;
      let outputTableOne = "";

      tracksOne.map((track, i) => {
        outputTableOne += `
          <tr>
            <td>${tracksOne[i].artist.name}</td>
            <td>${tracksOne[i].album.title}</td>
             <td><img class="uk-preserve-width uk-border-circle" src=${tracksOne[i].album.cover_small} width="50" alt=""></td>
            <td><button class="uk-button uk-button-default" type="button"><a href=${tracksOne[i].link}>Source</a></button></td>
        </tr>
         `;
      });

      table.innerHTML = outputTableOne;
      play.innerHTML = outputOne;
    })
    .catch(function (error) {
      console.error(error);
    });
  e.preventDefault();
};

/// Run API call after a search
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
      let output = ` <h1 class="tracks">${tracks[number].title}</h1>
             <h2 class="tracks uk-margin-medium-bottom">${tracks[number].artist.name}</h2>
                <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
             <img id="album-cover" class="uk-border-rounded uk-margin-large-top uk-margin-large-bottom" data-src="${tracks[number].album.cover_medium}" width="auto" height="100%"  uk-img>
             
                <div class="uk-position-center">
                <div class="uk-transition-slide-top-small"><h4 class="uk-margin-remove">${tracks[number].album.title}</h4></div>
                <div class="uk-transition-slide-bottom-small"><h4 class="uk-margin-remove">Album</h4></div>
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
            <td><button class="uk-button uk-button-default" type="button"><a href=${tracks[i].link}>Source</a></button></td>
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

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    window.clearTimeout();
  },
});

// Media Query for SVG Element
const radius = document.getElementsByTagName("circle")[0];
console.log(radius);
function myFunction(circa) {
  if (circa.matches) {
    radius.setAttribute("r", 138);
    radius.setAttribute("cy", 160);
  } else {
    console.log("we good");
  }
}

var circa = window.matchMedia("(max-width: 400px)");
myFunction(circa); // Call listener function at run time
circa.addEventListener(myFunction);
