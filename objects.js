var playlist = {};
var key = "artist";
playlist[key] = 
function updatePlaylist( playlist, artist, song) {
  return Object.assign({}, artist, song)
}