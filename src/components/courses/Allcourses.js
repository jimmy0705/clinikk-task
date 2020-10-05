import React from 'react';


import { Container ,Row,Col} from 'react-bootstrap';

 import './courses.css';
 //import hello from '../images/Helllo-boy.svg';
import AllcoursesData from '../../Allcoursesdata';


function Allcourse(props) {
 const AllcoursesData =  props.AllcoursesData;
// const img = AllcoursesData.img;


  return (
      
    <div className="allcourse-area">
      <h2>courses </h2>
      <div className="filter-tabs-area">
          <a className="tabs" href="#">All Courses</a>
          <a className="tabs" href="#">The Newest</a>
          <a className="tabs" href="#">Top Rated</a>
          <a className="tabs" href="#">Most Popular</a>
      </div>

      {/* all courses area */}
      
      {  AllcoursesData.map(course => 
        
        
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
          <button  className="mycourse-btn">View course</button>
        </div>
        
        </div>
        
        
      )}




  
  
    </div>
  );
}

export default Allcourse;