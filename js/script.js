const youTubeApiKey = "AIzaSyB8RFLS9l9HE39KW2b9vemhPQv78ROS4uQ";
const YoutubeClientId =
  "948793858557-vugi5gpkgek612d4ejqv2enbu3f0p8u1.apps.googleusercontent.com";

const getLyrics = async (artist, song) => {
  const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
  const data = await res.json();
  const lyricinfo = document.getElementById("Lyric-search");
  lyricinfo.innerText = data.lyrics;
};

//const getEverything = () => {
// calls youtube
//const youtubeData = null;

getLyrics();
