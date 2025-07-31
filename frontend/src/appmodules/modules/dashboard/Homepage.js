import React, { useEffect, useState } from "react";
function Homepage(){

    const[sv,sf]= useState("80");     //sv- state variable   sf-state function
       const name= "ravi kumar"
    let age= 40
    const abc=()=>{
        sf("7900")
    }

  // const message =()=>{

  //   alert("this is message");
  // }
  
  // useEffect(()=>{
  // message();
  // },[])
    return(
 <div className="container-fluid">
    <div className="row">
        <div className="col-12">
            <h2>use of useState() : hooks</h2>
            <h1>username is : {name}</h1>
            <h1>user age: {age}</h1>
            {/* <input type="text" value="manu singh"/> */}
            <input type="text" value={name}/>
            <h1>{sv}</h1>
            <button onClick={abc}>Update state  </button>
        </div>
    </div>
 </div>
    )
}
export default Homepage