import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcomepage from './appmodules/Welcomepage';
import "./appmodules/css/global.css";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Userloginpage from './appmodules/modules/users/auth/Userloginpage';
import Userregisterpage from './appmodules/modules/users/auth/Userregisterpage';
import Mainpage from './appmodules/modules/dashboard/Mainpage';
// import Aboutpage from './About';
import Homepage from './appmodules/modules/dashboard/Homepage';
import Employeepage from './appmodules/modules/dashboard/Employeepage';
import Landingpage from './appmodules/modules/dashboard/Landingpage';
import Apperror from './appmodules/sharecomponents/Apperror';
import Userdetailspage from './appmodules/modules/dashboard/Userdetailspage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Welcomepage/>}></Route>
    <Route path='userportal' element= {<Userloginpage/>}></Route>
    <Route path='register' element= {<Userregisterpage/>}></Route>
    <Route path='dashboard' element= {<Mainpage/>}>
    <Route path='' element= {<Employeepage/>}></Route>
     <Route path='employee' element= {<Employeepage/>}></Route>
     <Route path='employee/userdetails/:id' element= {<Userdetailspage/>}></Route>
      <Route path='dashboard' element= {<Landingpage/>}></Route>
      <Route path='*' element= {<Apperror/>}></Route>
    </Route>

     <Route path='*' element= {<Apperror/>}></Route>

   </Routes>
   </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

