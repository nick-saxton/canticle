import React from "react";
import { connect } from "react-redux";

import "bulma/css/bulma.css";

import "../canticle.css";

import { artistsOperations, artistsSelectors } from "../redux/artists";
import { setlistsOperations } from "../redux/setlists";
import { userOperations } from "../redux/user";

import Header from "./Header";
import InitialArtistSearch from "./artistSearch/InitialArtistSearch";
import ArtistSetlists from "./artistSetlists/ArtistSetlists";

class Canticle extends React.Component {
  componentDidMount() {
    const canticleState = JSON.parse(sessionStorage.getItem("canticleState"));

    if (canticleState) {
      this.props.setArtist(canticleState.artist);
      this.props.setCurrentSetlistID(canticleState.currentSetlistID);
      this.props.setSetlists(canticleState.setlists);

      sessionStorage.removeItem("canticleState");
    }

    // Store Spotify access token
    const hash = window.location.hash;
    if (hash) {
      const token = hash.split("&")[0].split("=")[1];
      this.props.setSpotifyInfo(token);
    }
  }

  render() {
    const { artist } = this.props;

    return (
      <>
        <Header artist={artist} />
        {artist ? <ArtistSetlists artist={artist} /> : <InitialArtistSearch />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  artist: artistsSelectors.getSelectedArtist(state)
});

const mapDispatchToProps = {
  setSpotifyInfo: userOperations.getSpotifyUserInfo,
  setArtist: artistsOperations.selectArtist,
  setCurrentSetlistID: setlistsOperations.setCurrentSetlistID,
  setSetlists: setlistsOperations.setSetlists
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canticle);
