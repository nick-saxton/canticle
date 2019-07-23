import React from "react";

const ArtistInfo = ({ artist }) => (
  <section className="hero is-dark">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{artist.name}</h1>
      </div>
    </div>
  </section>
);

export default ArtistInfo;
