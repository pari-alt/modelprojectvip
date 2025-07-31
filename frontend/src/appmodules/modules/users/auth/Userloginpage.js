import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import axios from 'axios';
import { useState } from "react";


function Userloginpage() {
const mynav= useNavigate();


   const [login, updatelogin]=useState({
    email:"",
    pass:""
   });

  const loginpage= async (req,res)=>{
    axios.post('http://localhost:7200/api/userlogin',login).then((d)=>{
        console.log(d);
        if(d.data.status===420){
          alert(d.data.msg);
        }
        if(d.data.status===440){
          alert(d.data.msg);
        }
        if(d.data.status===220){
          alert(d.data.msg);
          mynav('/dashboard');
        }
    })
  }


   const updatefield=(e)=>{
    // console.log(e.target.value);
    const{name,value}= e.target;
   updatelogin((a)=>{
      return{
        ...a,
        [name]: value
      }
   })

 }



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
                                    <input type="email" class="form-control" value={login.email} name='email' onInput={updatefield}/>

                                </div>
                            </div>
                            
                                <div className='col-12'>
                                    <div class="mb-3">
                                        <label class="form-label"><TbLockPassword/>Password</label>
                                        <input type="password" class="form-control" value={login.pass} name='pass' onInput={updatefield}/>

                                  </div>
                                </div>
                                 <div className='col-12 text-center' >
                                    <div class="mb-3">
                                        <button type='button' className='btn btn-success' onClick={loginpage}>Login</button>
                                        <Link to="/register" className="ms-5">User Register</Link>

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