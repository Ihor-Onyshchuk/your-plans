import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = ({ name = 'Your' }) => {
  return <nav className="nav-wrapper grey darken-3">
    <div className="container">
      <Link to='/' className="brand-logo">{`${name}Plans`}</Link>
      <SignedInLinks />
      <SignedOutLinks />
    </div>
  </nav>
}

const mapStateToProps = (state) => {
  console.log(state);
  return {}
}

export default connect(mapStateToProps)(Navbar);