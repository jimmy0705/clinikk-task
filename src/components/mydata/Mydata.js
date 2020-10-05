

import React from 'react';


import { Container ,Row,Col} from 'react-bootstrap';

 import './mydata.css';
 //import hello from '../images/Helllo-boy.svg';


function Mydata() {
  return (

    <div className="mydata-area">
     
     <div className="data-box">
       <h3 className="data-num">11</h3>
       <p className="data-p">Courses completed</p>
     </div>
     <div className="data-box">
     <h3 className ="data-num">4</h3>
       <p className ="data-p">Courses in progress</p>
     </div>
     
</div>
    
  );
}

export default Mydata;
