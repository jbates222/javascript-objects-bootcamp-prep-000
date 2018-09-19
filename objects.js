var playlist = {};
var key = "artist";

function updatePlaylist( playlist, key, value) {
  return Object.assign(playlist, { [key]: value })
}