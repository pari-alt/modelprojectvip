import React from "react"
import { Link } from "react-router-dom"
function Welcomepage() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <Link to="userportal" className='card p-3'>
                        <h1>user portal</h1>
                    </Link>
                </div>
                <div className='col-md-4'>
                    <div className='card p-3'>
                        <h1>user portal</h1>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card p-3'>
                        <h1>user portal</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Welcomepage