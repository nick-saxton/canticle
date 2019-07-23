export const getArtists = state => state.artists.results;

export const getArtistSearchTerm = state => state.artists.artistSearchTerm;

export const getSelectedArtist = state => state.artists.selectedArtist;

export const hasArtistResults = state => state.artists.results.length > 0;
