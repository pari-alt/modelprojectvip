import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcomepage from './appmodules/Welcomepage';
import "./appmodules/css/global.css";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Userloginpage from './appmodules/modules/users/auth/Userloginpage';
import Userregisterpage from './appmodules/modules/users/auth/Userregisterpage';
// import Aboutpage from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Welcomepage/>}></Route>
    <Route path='userportal' element= {<Userloginpage/>}></Route>
    <Route path='register' element= {<Userregisterpage/>}></Route>

   </Routes>
   </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

