import React from "react"
import { Link } from "react-router-dom"
import { FaUserTie } from "react-icons/fa";
function Welcomepage() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 p-5 mt-3 shadow text-center'>
                    <Link to="userportal" className='card p-3 bg-info shadow text-white'>
                     <h1><FaUserTie/></h1>
                        <h4>User Portal</h4>
                       
                    </Link>
                </div>
                <div className='col-md-4 p-5 mt-3 shadow text-center'>
                        <Link to="admin" className='card p-3 bg-info shadow text-white'>
                        <h1><FaUserTie/></h1>
                        <h4>Admin Portal</h4>
                        </Link>

                    </div>
              
                <div className='col-md-4 p-5 mt-3 shadow text-center'>
                      <Link to="invoice" className='card p-3 bg-info shadow text-white'>
                        <h1><FaUserTie/></h1>
                        <h4>Invoice Portal</h4>
                        </Link>
                    </div>
                </div>
            </div>
       
    )
}
export default Welcomepage