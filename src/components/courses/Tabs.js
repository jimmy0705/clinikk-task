import React from 'react';


import { Container ,Row,Col} from 'react-bootstrap';

 import './courses.css';
 //import hello from '../images/Helllo-boy.svg';



function Tabs(props) {
 const AllcoursesData =  props.AllcoursesData;
// const img = AllcoursesData.img;


  return (
      
   <>
  <h2 className="tags-title" style={{marginTop:"1em"}}>courses </h2>
      <div className="filter-tabs-area">
          <a className="tabs" href="#">All Courses</a>
          <a className="tabs" href="#">The Newest</a>
          <a className="tabs" href="#">Top Rated</a>
          <a className="tabs" href="#">Most Popular</a>
      </div>
   

   </>
        
 
  );
}

export default Tabs;