import * as types from "./types";

const clearSpotifyInfo = () => ({
  type: types.CLEAR_SPOTIFY_INFO
});

const setSpotifyInfo = (token, userID) => ({
  type: types.SET_SPOTIFY_INFO,
  token,
  userID
});

export { clearSpotifyInfo, setSpotifyInfo };
