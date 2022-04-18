const youTubeApiKey = "AIzaSyB8RFLS9l9HE39KW2b9vemhPQv78ROS4uQ";
const YoutubeClientId =
  "948793858557-vugi5gpkgek612d4ejqv2enbu3f0p8u1.apps.googleusercontent.com";

export default function Home() {
  const getLyrics = async (artist, song) => {
    const res = await fetch("https://api.lyrics.ovh/v1/${artist}/${song}");
    const data = await res.json();
    return data;
  };
  return (
    <div>
      <button onCLick={() => getLyrics(artist, song)}>test</button>
      
    </div>
  );
}

const getEverything = () => {
  // calls youtube
  const youtubeData = null;

  youtubeData.songs.forEach((song) => {
    const lyrics = getLyrics(song.artist, song.title);
    document.getElementById("#lyrics").innerHTML = lyrics;
  });
};