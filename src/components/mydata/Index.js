import React from 'react';


import { Container ,Row,Col,Nav} from 'react-bootstrap';
import Mydata from './Mydata';

 import './mydata.css';
 //import hello from '../images/Helllo-boy.svg';
import Searchbar from './Searchbar';
import SubscribeBox from './Subscribe';


function Data() {
  return (

//     <div class="data-nav-area">
//       <Container fluid className="data-nav-container-area">
//       <Searchbar/>
//     <Mydata/>
//       </Container>
   
// </div>

<div className="navbar-fixed-right">
  <Container>

  <Searchbar/>
    <Mydata/>
    <SubscribeBox/>

  </Container>

</div>
    
  );
}

export default Data;
