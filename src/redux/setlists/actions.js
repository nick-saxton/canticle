import * as types from "./types";

const setCurrentSetlistID = currentSetlistID => ({
  type: types.SET_CURRENT_SETLIST_ID,
  currentSetlistID
});

const setPlaylistID = playlistID => ({
  type: types.SET_PLAYLIST_ID,
  playlistID
});

const setSetlists = setlists => ({
  type: types.SET_SETLISTS,
  setlists
});

export { setCurrentSetlistID, setPlaylistID, setSetlists };
