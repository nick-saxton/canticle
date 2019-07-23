import React from "react";

import ArtistSearchDropdown from "./ArtistSearchDropdown";

const InitialArtistSearch = () => (
  <section className="section main-artist-search hero is-dark is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <h1 className="title">
              Canticle allows you to search for concert setlists from your
              favorite artists and create Spotify playlists from the songs they
              contain.
            </h1>
            <h2 className="subtitle">
              Begin by typing in the name of an artist below and then clicking
              the search button.
            </h2>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-half">
            <ArtistSearchDropdown />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InitialArtistSearch;
