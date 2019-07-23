import classNames from "classnames";
import React from "react";
import { connect } from "react-redux";

import { setlistsOperations } from "../../../redux/setlists";

class SetlistCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleSetlistClick = this.handleSetlistClick.bind(this);
  }

  handleSetlistClick() {
    this.props.setCurrentSetlistID(this.props.setlist.id);
  }

  render() {
    const { active, setlist } = this.props;

    return (
      <div className="card" onClick={this.handleSetlistClick}>
        <header
          className={classNames("card-header", {
            "has-background-success": active
          })}
        >
          <p className="card-header-title">{setlist.venue.name}</p>
        </header>
        <div className="card-content">
          <div className="content">
            <ul>
              {setlist.sets &&
                setlist.sets.set.map((set, index) => (
                  <React.Fragment key={`${setlist.id}_${index}`}>
                    {set.song.map(song => (
                      <li key={`${song.name}_${song.info}_${setlist.id}`}>
                        {song.name}
                        {song.cover && ` (${song.cover.name} cover)`}
                      </li>
                    ))}
                  </React.Fragment>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setCurrentSetlistID: setlistsOperations.setCurrentSetlistID
};

export default connect(
  null,
  mapDispatchToProps
)(SetlistCard);
