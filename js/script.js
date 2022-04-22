
const youTubeApiKey = "AIzaSyB8RFLS9l9HE39KW2b9vemhPQv78ROS4uQ";
const YoutubeClientId =
  "948793858557-vugi5gpkgek612d4ejqv2enbu3f0p8u1.apps.googleusercontent.com";


  const form = document.getElementById('form');
  const search = document.getElementById('search');
  const result = document.getElementById('result');
  const lyricsButton = document.getElementById('get-lyrics');

const apiURL = 'https://api.lyrics.ovh';

   

   async function getLyrics(artist, songTitle) {
    

    fetch (`${apiURL}/v1/${artist}/${songTitle}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
     console.log(data)
      result.innerHTML = `
      <h5><strong>${artist} - ${songTitle}</strong></h5>
      <p>${data.lyrics}</p>
      `;
    });
    

}

lyricsButton.addEventListener('click', function(event) {
  event.preventDefault();
  const artist = document.getElementById('artist-search').value;
  const songTitle = document.getElementById('song-search').value;
  getLyrics(artist, songTitle);
}); 