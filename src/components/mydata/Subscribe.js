

import React from 'react';


import { Container ,Row,Col} from 'react-bootstrap';

 import './mydata.css';



function SubscribeBox() {
  return (

    <div className="subscribe-area">
     
     <div className="subscribe-box">

     <div className="subscribe-innerdiv-1">
       <h2>Lern even more!</h2>
       <p>Unlock premium features
          only for $9.99 per month.</p>
       <button>Go Premium</button>
     </div>
     <div className="data-bosubscribe-innerdiv-2">
      <img className="img-fluid subscribe-img" src={require('./subs.png')}  />
     </div>

     </div>
     
     
</div>
    
  );
}

export default SubscribeBox;
