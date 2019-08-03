import React from "react";

import ArtistInfo from "./ArtistInfo";
import Setlists from "./setlists/Setlists";
import SetlistInteractions from "./SetlistInteractions";

const ArtistSetlists = ({ artist }) => (
  <>
    <ArtistInfo artist={artist} />
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <Setlists />
          </div>
          <div className="column is-centered">
            <SetlistInteractions />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ArtistSetlists;
