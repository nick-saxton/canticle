import produce from "immer";

import * as types from "./types";

const initialState = {
  artistSearchTerm: "",
  results: [],
  selectedArtist: null
};

const artistReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case types.SELECT_ARTIST:
        draft.selectedArtist = { ...action.artist };
        draft.results.length = 0;
        draft.artistSearchTerm = "";
        return;

      case types.SET_ARTISTS:
        draft.results.length = 0; // Clear previous results

        action.artists.forEach(artist => {
          draft.results.push(artist);
        });

        return;

      case types.UPDATE_ARTIST_SEARCH_TERM:
        draft.artistSearchTerm = action.searchTerm;
        return;

      default:
        return;
    }
  });
};

export default artistReducer;
