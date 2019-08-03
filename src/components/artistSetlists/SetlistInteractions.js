import React from "react";
import { throttle } from "throttle-debounce";

import SpotifyButton from "./spotify/SpotifyButton";
import SpotifyPlaylist from "./spotify/SpotifyPlaylist";

class SetlistInteractions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: 0
    };
  }

  componentDidMount() {
    window.onscroll = throttle(50, e => {
      this.setState({
        scrollY: window.scrollY
      });
    });
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    const { scrollY } = this.state;

    // Calculate "top" for button
    let top;
    if (scrollY >= 132) {
      top = "100px";
    } else if (scrollY === 0) {
      top = "auto";
    } else {
      top = `${200 - scrollY}px`; // 232 px
    }

    return (
      <div
        style={{
          position: "sticky",
          top: top
        }}
      >
        <SpotifyPlaylist />
        <SpotifyButton />
      </div>
    );
  }
}

export default SetlistInteractions;
