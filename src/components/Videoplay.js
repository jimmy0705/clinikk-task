import React from 'react';


import { Container ,Row,Col} from 'react-bootstrap';

 import './common.css';
 //import hello from '../images/Helllo-boy.svg';



function VideoPlay() {



  return (
      
   <div className="video-area">
     
     <div className="video">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/1vC5pBmmFGQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>
     

   </div>
        
 
  );
}

export default VideoPlay;