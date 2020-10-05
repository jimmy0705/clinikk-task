import { Link } from '@material-ui/core';
import React from 'react';

import { Container } from 'react-bootstrap';


 import './navbar.css';

function Sidenavbar() {
  return (
    <div className="side-navbar-area">
<Container className="side-nav-container-area">
<div className="sidenav">
  <Link to="#" className="sidenav-home">F.</Link>

  <Link to ="#" className="logout-image-tag">
  <img className="logout-img" ismap src={require(`./logout.svg`)} alt = "logout image" border = "0"/> 
  </Link>
</div>
</Container>

      
    </div>
  );
}

export default Sidenavbar;