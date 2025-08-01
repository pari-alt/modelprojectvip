import React from "react";

import Appheader from "../../sharecomponents/Appheader";
import { Fragment } from "react";
import Appsidebar from "../../sharecomponents/Appsidebar";
import Homepage from "./Homepage";
import { Outlet } from "react-router-dom";
function Mainpage(){
    return(
      <Fragment>
  <Appheader></Appheader>
  <div className='container-fluid'>
    <div className="row">
      <div className='col-md-2 border'>
      <Appsidebar></Appsidebar>
      </div>
  <div className='col-md-10 border' style={{height: '90vh'}}>
       <Outlet></Outlet>
      </div>

    </div>
  </div>
  </Fragment>
    )
}
export default Mainpage