import React from 'react';


import { Container ,Row,Col} from 'react-bootstrap';

 import './common.css';
 //import hello from '../images/Helllo-boy.svg';
 import AllcoursesData from "../Allcoursesdata";



function VideoPlay(props) {
console.log(props.match.params.id)
const dataId = props.match.params.id;
console.log(AllcoursesData);

const findArrayVideo = AllcoursesData.filter(x => x.id ==dataId ).map(x => x.url);
 console.log(findArrayVideo);
  return (
      
   <div className="video-area">
     
     <div className="video">
     <iframe width="560" height="315" src={`${findArrayVideo}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
     </div>
     

   </div>
        
 
  );
}

export default VideoPlay;