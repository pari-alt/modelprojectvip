import React,{useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Userdetailspage() {
    const{id}= useParams();
    const [user, updateuser] = useState({});
        const singleuserfunc = async () => {
            axios.get(`https://modelprojectvip-ojaf.onrender.com/singleuser/${id}`).then((d) => {
                console.log(d.data);
                updateuser(d.data);
            });
        }
    
        useEffect(() => {
             singleuserfunc();
        }, []);
    
  return (
    <div>   Userdetails </div>
  )
}

export default Userdetailspage
