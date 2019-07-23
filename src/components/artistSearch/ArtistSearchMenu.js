import React from "react";
import { connect } from "react-redux";

import { artistsOperations, artistsSelectors } from "../../redux/artists";

const ArtistSearchMenu = ({ artists, retrieveArtistSetlists }) => (
  <div className="dropdown-menu">
    <div className="dropdown-content">
      {artists.map(artist => (
        <a
          className="dropdown-item"
          key={artist.mbid}
          onClick={() => retrieveArtistSetlists(artist)}
        >
          {artist.name}
        </a>
      ))}
    </div>
  </div>
);

const mapStateToProps = state => ({
  artists: artistsSelectors.getArtists(state)
});

const mapDispatchToProps = {
  retrieveArtistSetlists: artistsOperations.retrieveArtistSetlists
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistSearchMenu);
