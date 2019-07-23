import produce from "immer";

import * as types from "./types";

const initialState = {
  accessToken: "",
  userID: ""
};

const userReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case types.SET_SPOTIFY_INFO:
        draft.accessToken = action.token;
        draft.userID = action.userID;
        return;

      case types.CLEAR_SPOTIFY_INFO:
        draft.accessToken = "";
        draft.userID = "";
        return;

      default:
        return;
    }
  });
};

export default userReducer;
