

import React from 'react';


import { Container ,Row,Col} from 'react-bootstrap';

 import './mydata.css';



function SubscribeBox() {
  return (

    <div className="subscribe-area">
     
     <div className="subscribe-box">

     <div className="subscribe-innerdiv-1">
       <h5 className="subscribe-h5">Learn even more!</h5>
       <p>Unlock premium features
          only for $9.99 per month.</p>
       <a href="#" className="subscribe-button">Go Premium</a>
     </div>
     <div className="data-bosubscribe-innerdiv-2">
      <img className="img-fluid subscribe-img" src={require('./subs.svg')}  />
     </div>

     </div>
     
     
</div>
    
  );
}

export default SubscribeBox;
