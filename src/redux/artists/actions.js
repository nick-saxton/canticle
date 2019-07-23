import * as types from "./types";

const selectArtist = artist => ({
  type: types.SELECT_ARTIST,
  artist
});

const setArtists = artists => ({
  type: types.SET_ARTISTS,
  artists
});

const updateArtistSearchTerm = searchTerm => ({
  type: types.UPDATE_ARTIST_SEARCH_TERM,
  searchTerm
});

export { selectArtist, setArtists, updateArtistSearchTerm };
