import React from 'react';


import { Container ,Row,Col} from 'react-bootstrap';

 import './courses.css';
 //import hello from '../images/Helllo-boy.svg';


function Welcome() {
  return (
    <div className="" style={{paddingBottom:"2em"}}>
        <div className="welcome-area">
        <h1 className="welcome-name">Hello Josh!</h1>
     <p className="welcome-p">It’s good to see you again.</p>
     <img className="img-fluid hello-boy-img" src={require('./images/boy.svg')}/>
        </div>
       
  
    </div>
  );
}

export default Welcome;
