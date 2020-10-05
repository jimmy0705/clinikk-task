import React from 'react';


import { Container ,Row,Col} from 'react-bootstrap';

 import './common.css';
import Allcourse from './courses/Allcourses';
import Mycourse from './courses/Mycourses';
import Welcome from './courses/Welcome';
import Data from './mydata/Index';
import Sidenavbar from './navbar/Sidenavbar';
import Tabs from './courses/Tabs'

import AllcoursesData from "../Allcoursesdata";
import MycoursesData from "../Mycoursedata"



function Main() {
 // console.log(MycoursesData)
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
        <Mycourse MycoursesData={MycoursesData} key ={MycoursesData.id}/>
        <Tabs/>
        <div className="allcourse-area">
           {  AllcoursesData.map(course => <Allcourse course={course} key = {course.id} />)}
          </div>
        
      
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
