import React from "react";
import { connect } from "react-redux";

import { artistsOperations, artistsSelectors } from "../../redux/artists";

class ArtistSearchTrigger extends React.Component {
  constructor(props) {
    super(props);

    this.handleArtistSearchInputChange = this.handleArtistSearchInputChange.bind(
      this
    );
    this.handleArtistSearchInputKeyPress = this.handleArtistSearchInputKeyPress.bind(
      this
    );
  }

  handleArtistSearchInputChange(e) {
    this.props.updateArtistSearchTerm(e.target.value);
  }

  handleArtistSearchInputKeyPress(e) {
    if (e.which === 13) {
      this.props.searchForArtists();
    }
  }

  render() {
    const { artistSearchTerm, searchForArtists } = this.props;

    return (
      <div className="dropdown-trigger">
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Search for an artist"
              value={artistSearchTerm}
              onChange={this.handleArtistSearchInputChange}
              onKeyPress={this.handleArtistSearchInputKeyPress}
            />
          </div>
          <div className="control">
            <button className="button is-info" onClick={searchForArtists}>
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artistSearchTerm: artistsSelectors.getArtistSearchTerm(state)
});

const mapDispatchToProps = {
  searchForArtists: artistsOperations.searchForArtists,
  updateArtistSearchTerm: artistsOperations.updateArtistSearchTerm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistSearchTrigger);
