var playlist = {};
var key = "artist";

function updatePlaylist( playlist, key, value) {
  playlist[key] = value;
  return playlist;
}