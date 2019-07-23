import React from "react";
import { connect } from "react-redux";

import { setlistsSelectors } from "../../../redux/setlists";

import SetlistCard from "./SetlistCard";

const Setlists = ({ currentSetlistID, setlists }) => (
  <>
    {setlists.map(setlist => (
      <div className="columns" key={setlist.id}>
        <div className="column">
          <SetlistCard
            active={setlist.id === currentSetlistID}
            setlist={setlist}
          />
        </div>
      </div>
    ))}
  </>
);

const mapStateToProps = state => ({
  currentSetlistID: setlistsSelectors.getCurrentSetlistID(state),
  setlists: setlistsSelectors.getSetlists(state)
});

export default connect(mapStateToProps)(Setlists);
