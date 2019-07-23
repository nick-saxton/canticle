import * as actions from "./actions";
import * as selectors from "./selectors";

import { setlistsOperations } from "../setlists";

const { selectArtist, setArtists, updateArtistSearchTerm } = actions;

const headers = {
  Accept: "application/json",
  "x-api-key": "600d91d4-cedd-40b1-969e-4f4d03ff5f05",
  "x-requested-with": "XMLHttpRequest"
};

const searchForArtists = () => (dispatch, getState) => {
  const artistName = selectors.getArtistSearchTerm(getState());

  fetch(
    `https://cors-anywhere.herokuapp.com/https://api.setlist.fm/rest/1.0/search/artists?artistName=${artistName}&p=1&sort=relevance`,
    {
      headers
    }
  )
    .then(resp => resp.json())
    .then(json => {
      dispatch(setArtists(json.artist));
    })
    .catch(err => {
      console.log(err);
    });
};

const retrieveArtistSetlists = artist => dispatch => {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://api.setlist.fm/rest/1.0/artist/${
      artist.mbid
    }/setlists`,
    {
      headers
    }
  )
    .then(resp => resp.json())
    .then(json => {
      dispatch(selectArtist(artist));
      dispatch(setlistsOperations.setSetlists(json.setlist));
    })
    .catch(err => {
      console.log(err);
    });
};

export {
  retrieveArtistSetlists,
  searchForArtists,
  selectArtist,
  updateArtistSearchTerm
};
