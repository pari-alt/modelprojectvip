import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
function Userloginpage() {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 bg-light shadow p-3'>
                    <div className='container-fluid'>
                        <div className='row'>
                      <div className='col-12 text-center'>
                        <p className='h4'>User Login Page </p>
                      </div>
                            <div className='col-12 mt-3'>
                               <div className='mb-3'>
                                    <label class="form-label"> <MdOutlineMailOutline/> Email address</label>
                                    <input type="email" class="form-control"/>

                                </div>
                            </div>
                            
                                <div className='col-12'>
                                    <div class="mb-3">
                                        <label class="form-label"><TbLockPassword/>Password</label>
                                        <input type="password" class="form-control"/>

                                  </div>
                                </div>
                                 <div className='col-12 text-center' >
                                    <div class="mb-3">
                                        <button type='button' className='btn btn-success'>Login</button>
                                        <Link to="/register">User Register</Link>

                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

)
}
            export default Userloginpage