import React from "react";
import { connect } from "react-redux";

import { setlistsOperations } from "../../redux/setlists";
import { userSelectors } from "../../redux/user";

const clientID = "fedfe4f9df1548b39777611a849786a9";
const redirectURI = "http://localhost:3000";

class SpotifyButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    if (this.props.user.accessToken) {
      this.props.createPlaylist();
    } else {
      this.props.storeStateInfo();

      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&scope=${encodeURIComponent(
        ["playlist-modify-public"]
      )}&redirect_uri=${redirectURI}&response_type=token&show_dialog=true`;
      window.close();
    }

    // Generate playlist
    // Show playlist with widget???
  }

  render() {
    const { user } = this.props;

    return (
      <div className="columns is-centered">
        <div className="column is-one-third">
          <button
            onClick={this.handleButtonClick}
            className="button is-success is-outlined"
          >
            {user.accessToken ? "Create Spotify playlist" : "Log in to Spotify"}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: userSelectors.getUser(state)
});

const mapDispatchToProps = {
  createPlaylist: setlistsOperations.createPlaylist,
  storeStateInfo: setlistsOperations.storeStateInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotifyButton);
