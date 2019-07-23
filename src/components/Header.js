import React from "react";

import ArtistSearchDropdown from "./artistSearch/ArtistSearchDropdown";

const Header = ({ artist }) => (
  <nav className="navbar is-fixed-top">
    <div className="navbar-brand">
      <div className="navbar-item has-text-weight-bold">Canticle</div>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
        {artist && (
          <div className="navbar-item">
            <ArtistSearchDropdown />
          </div>
        )}
      </div>
    </div>
  </nav>
);

export default Header;
