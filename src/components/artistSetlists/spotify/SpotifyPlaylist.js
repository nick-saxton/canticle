import React from "react";
import { connect } from "react-redux";

import { setlistsSelectors } from "../../../redux/setlists";

const SpotifyPlaylist = ({ playlistID }) => {
  if (!playlistID) {
    return null;
  }

  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <iframe
          className="spotify-playlist"
          src={`https://open.spotify.com/embed/playlist/${playlistID}`}
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  playlistID: setlistsSelectors.getPlaylistID(state)
});

export default connect(mapStateToProps)(SpotifyPlaylist);
