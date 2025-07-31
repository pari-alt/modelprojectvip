import React from "react";
import { Link, useNavigate } from "react-router-dom";
import{useForm} from 'react-hook-form';
import axios from 'axios';
function Userregisterpage() {
    
const mynav= useNavigate();

 const { register, handleSubmit,} = useForm()
  const myform= async(d)=>{
    console.log(d);
    await axios.post('https://modelprojectvip-ju5q.onrender.com/api/userregister',d).then((a)=>{
        console.log(a);
        if(a.data.status===221){
            alert("register successfully");
            mynav('/userportal');
        }
    })

}
    return (
        <form onSubmit={handleSubmit(myform)}>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8 bg-light shadow p-3'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <p className='h4'>User Register Page </p>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Fullname</label>
                                    <input type="text" class="form-control" {...register("fullname")} />

                                </div>
                            </div>
                            <div className='col-md-6 mt-3'>
                                <div className='mb-3'>
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" {...register("email")} />

                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Gender</label>
                                    <select className='form-select' {...register("gender")}>
                                        <option hidden>select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>

                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">DOB</label>
                                    <input type="date" class="form-control" {...register("dob")} />

                                </div>
                            </div>
              <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Phone</label>
                                    <input type="text" class="form-control" {...register("phone")}/>

                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" {...register("pass")}/>

                                </div>
                            </div>
                             
                            <div className='col-12 text-center' >
                                <div class="mb-3">
                                    <button type='submmit' className='btn btn-success'>Register Now</button>
                                    <Link to="/userportal" className="ms-5">Login</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}
export default Userregisterpage