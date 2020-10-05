import React from 'react';


import { Container ,Row,Col} from 'react-bootstrap';

 import './common.css';
import Allcourse from './courses/Allcourses';
import Mycourse from './courses/Mycourses';
import Welcome from './courses/Welcome';
import Data from './mydata/Index';
import Sidenavbar from './navbar/Sidenavbar';

function Main() {
  return (
    <div className="main-area">
        < Sidenavbar/>
     <Container className ="main-area-2">
     <div className ="main-area-2">
         <div className="main-page-row-area">
         <Row >
    {/* <Col sm={0} className=""> */}
   
    {/* </Col> */}
    <Col sm={7}>
        <Welcome/>
        <Mycourse/>
        <Allcourse/>
    </Col>
    <Col sm={5}>
        <Data/>
    </Col>
  </Row>
 
         </div>
         {/* <Data/> */}
</div>
</Container>
    </div>
  );
}

export default Main;
