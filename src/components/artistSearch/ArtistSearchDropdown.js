import classNames from "classnames";
import React from "react";
import { connect } from "react-redux";

import { artistsSelectors } from "../../redux/artists";

import ArtistSearchMenu from "./ArtistSearchMenu";
import ArtistSearchTrigger from "./ArtistSearchTrigger";

const ArtistSearchDropdown = ({ hasArtistResults }) => {
  return (
    <div className={classNames("dropdown", { "is-active": hasArtistResults })}>
      <ArtistSearchTrigger />
      <ArtistSearchMenu />
    </div>
  );
};

const mapStateToProps = state => ({
  hasArtistResults: artistsSelectors.hasArtistResults(state)
});

export default connect(mapStateToProps)(ArtistSearchDropdown);
