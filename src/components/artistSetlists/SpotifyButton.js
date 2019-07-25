import React from "react";
import { connect } from "react-redux";

import { setlistsOperations, setlistsSelectors } from "../../redux/setlists";
import { userSelectors } from "../../redux/user";

const clientID = "fedfe4f9df1548b39777611a849786a9";
const redirectURI = "http://localhost:3000";

class SpotifyButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: 0
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    window.onscroll = e => {
      this.setState({
        scrollY: window.scrollY
      });
    };
  }

  componentWillUnmount() {
    window.onscroll = null;
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
  }

  render() {
    const { disabled, user } = this.props;
    const { scrollY } = this.state;

    // Calculate "top" for button
    let top;
    if (scrollY >= 132) {
      top = "100px";
    } else if (scrollY === 0) {
      top = "auto";
    } else {
      top = `${232 - scrollY}px`;
    }

    return (
      <div className="columns is-centered">
        <div className="column is-one-third">
          <button
            onClick={this.handleButtonClick}
            className="button is-success is-outlined"
            disabled={disabled}
            style={{
              position: "fixed",
              top: top
            }}
          >
            {user.accessToken ? "Create Spotify playlist" : "Log in to Spotify"}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  disabled: !setlistsSelectors.getCurrentSetlistID(state),
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
