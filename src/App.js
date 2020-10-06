import React from 'react';

import Main from './components/Main'
import {Route,Redirect} from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';

// import MycoursesData from "./Mycoursedata"
// import AllcoursesData from "./Allcoursesdata"
import VideoPlay from './components/Videoplay';


function App() {
  console.log(Notification.permission)

  if(Notification.permission=== "granted"){
    alert("we have permission")
  }
  else if(Notification.permission !== "denied"){
    Notification.requestPermission().then(permission=>{
      console.log(permission)
    })
  }

  return (
    <div className="App">
      
      <Route path="/" exact>
      <Main/>
     </Route>
      {/* <Route path="/clinikk-task" exact>
      <Main/>
     </Route> */}
     <Route path="/clinikk-task/video/:id" render={(props)=> <VideoPlay {...props}/>}>
         
        </Route>
    </div>
  );
}

export default App;
