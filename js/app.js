const search = document.getElementById("search");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const player = document.getElementById("player");
const searchBtn = document.getElementById("search-btn");
const artist = search.value;
console.log(search);
searchBtn.addEventListener("click", searchTrack);

function searchTrack(e) {
  console.log(artist);
  console.log("hello");
  e.prevent.default();
}

// const artist = "eninem";
// const songs = {
//   method: "GET",
//   url: "https://deezerdevs-deezer.p.rapidapi.com/search",
//   params: { q: `${artist}` },
//   headers: {
//     "x-rapidapi-key": "cb5b1f2f44msh3ccf1d2e09978fap1363abjsn0c69cbf92586",
//     "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//   },
// };

// axios
//   .request(songs)
//   .then(function (response) {
//     console.log(response.data.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
//  <h2>Song Title</h2>
//               <h3>Artist</h3>
//               <!-- <img class="uk-border-rounded" data-src="" data-srcset="" sizes="" width="10rem" height="10rem" alt="" uk-img> -->
