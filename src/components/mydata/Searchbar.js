

import React from 'react';


import { Container ,Row,Col} from 'react-bootstrap';

 import './mydata.css';
 //import hello from '../images/Helllo-boy.svg';


function Searchbar() {
  return (

    <div className="searchbar-area">
     
     <form>
         <input className="searchbar" type="text" placeholder="" />
     </form>
</div>
    
  );
}

export default Searchbar;
