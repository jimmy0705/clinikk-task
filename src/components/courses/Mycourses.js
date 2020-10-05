import React,{useState} from 'react';
import {Link} from 'react-router-dom';


import { Container ,Row,Col} from 'react-bootstrap';

 import './courses.css';
 //import hello from '../images/Helllo-boy.svg';


function Mycourse(props) {
const  [index,setIndex] = useState(0)
 const mydata = props.MycoursesData;
 const img = mydata[index].img;
 console.log(mydata.length)

//=======handle goes here======//

 function IncrementItem() {
   if(index === mydata.length-1){
    setIndex(0)
    return
   }
  setIndex(prevCount => prevCount + 1)
}
 function  DecreaseItem(){
  if(index === 0){
    setIndex(mydata.length-1)
    return
   }
  setIndex(prevCount => prevCount - 1)
}




  return (
    <div className= "mycourse-grid-area">
    <div className="mycourse-area">
      <div className="course-img-area">
      <img className="img-fluid course-img" src={require(`./images/${img}.png`)} />
      </div>

      <div>
      <h5>{mydata[index].title}</h5>
      <p>By {mydata[index].author}</p>
      </div>

      <div>
        <Link to ={{pathname:`/clinikk-task/video/${mydata[index].url}`}} target="_blank" className="mycourse-btn">Continue</Link>
      </div>
      

  
    </div>

    <div className="mycourse-control-btn-area">
      {/* <div>
      <button onClick={DecreaseItem}>L</button>
      </div>
    <div>
    <button onClick={IncrementItem}>R</button>
    </div> */}
     
    <input onClick={DecreaseItem} type="image" id="image" alt="Login"
       src={require("./images/l.png")}></input>
    

    <input onClick={IncrementItem} type="image" id="image" alt="Login"
       src={require("./images/r.png")}></input>
    
    </div>
    
    </div>
  );
}

export default Mycourse;