import produce from "immer";

import * as types from "./types";

const initialState = {
  currentSetlistID: "",
  playlistID: "",
  results: []
};

const setlistsReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case types.SET_CURRENT_SETLIST_ID:
        draft.currentSetlistID = action.currentSetlistID;
        return;

      case types.SET_PLAYLIST_ID:
        draft.playlistID = action.playlistID;
        return;

      case types.SET_SETLISTS:
        draft.results.length = 0; // Clear previous results

        action.setlists.forEach(setlist => {
          draft.results.push(setlist);
        });

        draft.currentSetlistID = "";

        return;

      default:
        return;
    }
  });
};

export default setlistsReducer;
