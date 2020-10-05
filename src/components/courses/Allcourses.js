import React from 'react';


//import { Container ,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

 import './courses.css';
 //import hello from '../images/Helllo-boy.svg';
import AllcoursesData from '../../Allcoursesdata';


function Allcourse(props) {
 const course =  props.course;
 //const img = AllcoursesData.img;


  return (
      
    <div className="">
      {/* <h2>courses </h2>
      <div className="filter-tabs-area">
          <a className="tabs" href="#">All Courses</a>
          <a className="tabs" href="#">The Newest</a>
          <a className="ta   </div>
      {/* all courses area */}

<div className="course-div">
        <div className="course-img-area">
        <img className="img-fluid course-img" src={require(`./images/${course.img}.png`)} />
        </div>
  
        <div>
        <h5>{course.title}</h5>
      <p>by {course.author}</p>
        </div>
        <div>
        6h 30min
        </div>
        <div>
          4.5
        </div>
  
        <div>
          <Link to= {{pathname:`/clinikk-task/video/${course.id}`,params:`${course.url}`}} target='_blank'  className="mycourse-btn2">View course</Link>
        </div>
        
        </div>
        




      {/* =========================================== */}
      
      


  
  
    </div>
  );
}

export default Allcourse;