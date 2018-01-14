import React from 'react';
import Link from 'gatsby-link';

import './header.scss';

const Header = () => (
  <div className="header">
    <h1 className="header__sitename">
      <Link to="/">
        MovieDev
      </Link>
    </h1>
    <div className="header__nav">
      <h3 className="d-inline header__link"><Link to="/about">About Me</Link></h3>
      <h3 className="d-inline header__link"><Link to="/latest">Latest Post</Link></h3>
    </div>
  </div>
)

export default Header
