import React from 'react';


import { Container ,Row,Col} from 'react-bootstrap';

 import './courses.css';
 //import hello from '../images/Helllo-boy.svg';


function Allcourse() {
  return (
      
    <div className="allcourse-area">
      <h2>courses </h2>
      <div className="filter-tabs-area">
          <a className="tabs" href="#">tag1</a>
          <a className="tabs" href="#">tag2</a>
          <a className="tabs" href="#">tag3</a>
          <a className="tabs" href="#">tag4</a>
      </div>

      {/* all courses area */}
      <div className="course-div">
      <div className="course-img-area">
      <img className="img-fluid course-img" src={require('./images/course1.png')} />
      </div>

      <div>
      <h5>Spanish B2</h5>
      <p>by Alejandro Velazquez</p>
      </div>
      <div>
        4.5
      </div>

      <div>
        <button  className="mycourse-btn">Continue</button>
      </div>
      
      </div>
      <div className="course-div">
      <div className="course-img-area">
      <img className="img-fluid course-img" src={require('./images/course1.png')} />
      </div>

      <div>
      <h5>Spanish B2</h5>
      <p>by Alejandro Velazquez</p>
      </div>
      <div>
        4.5
      </div>

      <div>
        <button  className="mycourse-btn">Continue</button>
      </div>
      
      </div>
      <div className="course-div">
      <div className="course-img-area">
      <img className="img-fluid course-img" src={require('./images/course1.png')} />
      </div>

      <div>
      <h5>Spanish B2</h5>
      <p>by Alejandro Velazquez</p>
      </div>
      <div>
        4.5
      </div>

      <div>
        <button  className="mycourse-btn">Continue</button>
      </div>
      
      </div>
      <div className="course-div">
      <div className="course-img-area">
      <img className="img-fluid course-img" src={require('./images/course1.png')} />
      </div>

      <div>
      <h5>Spanish B2</h5>
      <p>by Alejandro Velazquez</p>
      </div>

      <div>
        <button  className="mycourse-btn">Continue</button>
      </div>
      
      </div>
      <div className="course-div">
      <div className="course-img-area">
      <img className="img-fluid course-img" src={require('./images/course1.png')} />
      </div>

      <div>
      <h5>Spanish B2</h5>
      <p>by Alejandro Velazquez</p>
      </div>
      <div>
        4.5
      </div>

      <div>
        <button  className="mycourse-btn">Continue</button>
      </div>
       
      </div>
      <div className="course-div">
      <div className="course-img-area">
      <img className="img-fluid course-img" src={require('./images/course1.png')} />
      </div>

      <div>
      <h5>Spanish B2</h5>
      <p>by Alejandro Velazquez</p>
      </div>

      <div>
        4.5
      </div>

      <div>
        <button  className="mycourse-btn">Continue</button>
      </div>
      
      </div>
      <div className="course-div">
      <div className="course-img-area">
      <img className="img-fluid course-img" src={require('./images/course1.png')} />
      </div>

      <div>
      <h5>Spanish B2</h5>
      <p>by Alejandro Velazquez</p>
      </div>
      <div>
        4.5
      </div>

      <div>
        <button  className="mycourse-btn">Continue</button>
      </div>
      
      </div>
  
    </div>
  );
}

export default Allcourse;