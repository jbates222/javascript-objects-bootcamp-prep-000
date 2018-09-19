var playlist = { 'artist': 'song' };
var key = "artist";
function updatePlaylist( playlist, artist, song) {
  return Object.assign({}, artist, song)
}