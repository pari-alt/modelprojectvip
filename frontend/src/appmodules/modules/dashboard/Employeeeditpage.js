import React,{useState, useEffect}from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate,Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { baseurl } from '../service/Myservicepage';

function Employeeeditpage() {
    
 const{id}= useParams();

    const [user, updateuser] = useState({
       fullname:"",
       email:"",
       dob:"",
       phone:"",
       pass:"",
       gender:""


    });

        const singleuserfunc = async () => {
            await axios.get(`${baseurl}/singleuser/${id}`).then((d) => {
                // console.log(d.data.singleuser);
                updateuser(d.data);
            });
        }
    
        useEffect(() => {
             singleuserfunc();
        }, []);
   
   const updatefield=(e)=>{
    // console.log(e.target.value);
    const{name,value}= e.target;
   updateuser((a)=>{
      return{
        ...a,
        [name]: value
      }
   })

 }

  const userupdate= async()=>{
    await axios.patch(`${baseurl}/edituser/${id}`,user).then((d)=>{
               console.log(d);
    })

}


  return (
        <form>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8 bg-light shadow p-3'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <p className='h4'>User Edit Page </p>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Fullname</label>
                                    <input type="text" class="form-control" name="fullname" value={user.fullname} onInput={updatefield} />

                                </div>
                            </div>
                            <div className='col-md-6 mt-3'>
                                <div className='mb-3'>
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" name="email" value={user.email} onInput={updatefield} />

                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Gender</label>
                                    <select className='form-select' name='gender' value={user.gender} onChange={updatefield}>
                                        <option hidden>select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>

                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">DOB</label>
                                    <input type="date" class="form-control" name='dob' value={user.dob} onChange={updatefield} />

                                </div>
                            </div>
              <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Phone</label>
                                    <input type="text" class="form-control" name='phone' value={user.phone} onInput={updatefield}/>

                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" name='pass' value={user.pass}  onInput={updatefield}/>

                                </div>
                            </div>
                             
                            <div className='col-12 text-center' >
                                <div class="mb-3">
                                    <button type='button' className='btn btn-success' onClick={userupdate}>Update Now</button>
                                

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

export default Employeeeditpage
