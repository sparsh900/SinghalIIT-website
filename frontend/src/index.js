// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route} from "react-router-dom";
// import './index.css';
// import App from './App';
// import Home from "./components/home.js"
// //import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <Router>
//     <switch>
//        <Route exact path="/" component={Home} />
//     </switch>
//     </Router>,
//   document.getElementById('root')
// );


import React from "react";
import ReactDOM from "react-dom";
//import { Switch } from "react-router";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import "./App.css"
import Dashboard from "./components/dashboard.js"
import Dashboard_2 from "./components/dashboard2.js"
import My_Profile from "./components/my_profile";
import Chat_with_us from "./components/chat_with_us";
import Student_enrollment from "./components/student_enrollment";
import Start_page from "./components/start.js"
import Home from "./components/home.js"
import Home_2 from "./components/home2";
import Promote_and_earn from "./components/promote_and_earn";

ReactDOM.render(
  
  // <Router>
  //   {/* <Switch> */}
  //   <Routes>
  //   <Route exact path="/forms" component={Home} />
  //   <Route exact path="/" component={Home} />
  //   {/* <Route path="/events" component={UpcomingEvents} />
  //   <Route path="/home" component={Lug} />
  //   <Route path="/f" component={ExercisesList}  />
  //   <Route path="/personal" component={Personal}  /> */}
  //   {/* </Switch> */}
  //   </Routes>
  // </Router>,
  <React.StrictMode>
    <Router>
      <Routes>
       <Route exact path="/" element={<Dashboard/>} />
       <Route exact path="/dashboard2" element={<Dashboard_2/>} />
       <Route exact path="/myprofile" element={<My_Profile/>} />
       <Route exact path="/chatwithus" element={<Chat_with_us/>} />
       <Route exact path="/student_enrollment" element={<Student_enrollment/>} />
       <Route exact path="/home" element={<Home/>} />
       <Route exact path="/promote_and_earn" element={<Promote_and_earn/>} />
       <Route exact path="/home2" element={<Home_2/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
