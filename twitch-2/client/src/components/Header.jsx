import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="ui secondary pointing menu">
    <Link className="item" to="/">Twitch 2</Link>
    <div className="right menu">
      <Link className="item" to="/">All Streams</Link>
    </div>
  </div>
);

export default Header;
