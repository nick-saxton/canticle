import * as actions from "./actions";
import * as selectors from "./selectors";

import { artistsSelectors } from "../artists";
import { userSelectors } from "../user";

const { setCurrentSetlistID, setPlaylistID, setSetlists } = actions;

const createPlaylist = () => (dispatch, getState) => {
  // 1. Get access token and user ID
  const { accessToken, userID } = userSelectors.getUser(getState());

  // 2. Get artist name
  const artist = artistsSelectors.getSelectedArtist(getState());
  const artistName = artist.name;

  // 3. Get songs from setlist
  const currentSetlistID = selectors.getCurrentSetlistID(getState());
  const setlists = selectors.getSetlists(getState());

  const selectedSetlist = setlists.find(
    setlist => setlist.id === currentSetlistID
  );

  const setlistSongs = [];

  selectedSetlist.sets.set.map(set => {
    set.song.map(song => {
      setlistSongs.push(song.name);
    });
  });

  // 4. Find song IDs from Spotify using search API
  const songPromises = setlistSongs.map(song => {
    return fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        `artist:${artistName} track:${song}`
      )}&type=track`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    ).then(res => res.json());
  });

  Promise.all(songPromises).then(results => {
    const trackURIs = results.map(result => {
      if (result.tracks.items.length) {
        return result.tracks.items[0].uri;
      }
    });

    // 5. Create a playlist with playlist API
    fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: artistName
      })
    })
      .then(res => {
        // Check that response is 201
        if (res.status === 201) {
          return res.json();
        } else {
          throw new Error("Failed to create playlist");
        }
      })
      .then(json => {
        const playlistID = json.id;

        // 6. Add songs to playlist with song IDs
        return fetch(
          `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(trackURIs.filter(uri => !!uri))
          }
        ).then(res => {
          if (res.status === 201) {
            dispatch(setPlaylistID(playlistID));
          }
        });
      })
      .catch(err => console.log(err));
  });
};

const storeStateInfo = () => (dispatch, getState) => {
  const artist = artistsSelectors.getSelectedArtist(getState());
  const currentSetlistID = selectors.getCurrentSetlistID(getState());
  const setlists = selectors.getSetlists(getState());

  sessionStorage.setItem(
    "canticleState",
    JSON.stringify({ artist, currentSetlistID, setlists })
  );
};

export { createPlaylist, setCurrentSetlistID, setSetlists, storeStateInfo };
