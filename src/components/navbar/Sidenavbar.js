import React from 'react';

import { Container } from 'react-bootstrap';


 import './navbar.css';

function Sidenavbar() {
  return (
    <div className="side-navbar-area">
<Container className="side-nav-container-area">
<div className="sidenav">
  <a href="#">F.</a>

  <a href="#">Logout</a>
</div>
</Container>

      
    </div>
  );
}

export default Sidenavbar;