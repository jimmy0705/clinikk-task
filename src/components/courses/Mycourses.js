import React from 'react';


import { Container ,Row,Col} from 'react-bootstrap';

 import './courses.css';
 //import hello from '../images/Helllo-boy.svg';


function Mycourse() {
  return (
    <div className= "mycourse-grid-area">
    <div className="mycourse-area">
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

    <div className="mycourse-control-btn-area">
      <div>
      <button>L</button>
      </div>
    <div>
    <button>R</button>
    </div>
    
    </div>
    
    </div>
  );
}

export default Mycourse;