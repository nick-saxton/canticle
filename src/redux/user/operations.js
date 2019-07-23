import * as actions from "./actions";

const { clearSpotifyInfo, setSpotifyInfo } = actions;

const getSpotifyUserInfo = token => dispatch => {
  fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(resp => resp.json())
    .then(json => {
      if (json.error) {
        if (json.error.status === 401) {
          // Unauthorized
          dispatch(clearSpotifyInfo());
        }
      } else {
        dispatch(setSpotifyInfo(token, json.id));
      }
    })
    .catch(err => console.log(err));
};

export { getSpotifyUserInfo };
