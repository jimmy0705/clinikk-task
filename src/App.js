import React from 'react';

import Main from './components/Main'
import {Route,Redirect} from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';

// import MycoursesData from "./Mycoursedata"
// import AllcoursesData from "./Allcoursesdata"
import VideoPlay from './components/Videoplay';


function App() {
  return (
    <div className="App">
      

      <Route path="/clinikk-task" exact>
      <Main/>
     </Route>
     <Route path="/clinikk-task/video/:id" render={(props)=> <VideoPlay {...props}/>}>
         
        </Route>
    </div>
  );
}

export default App;