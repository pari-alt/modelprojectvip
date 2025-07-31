import React from 'react'
import { Link } from 'react-router-dom'

function Apperror() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 text-center bg-danger text-white' style={{height:'90vh'}}>
                <h1>404</h1>
                <h2>Page not found</h2>
                <Link to="/userportal" className='btn btn-success'>Back to Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Apperror
