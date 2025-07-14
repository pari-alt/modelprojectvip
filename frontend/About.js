import { Fragment } from "react/jsx-runtime"

function Aboutpage(){
    const name= "Maria";
    const age= 30;

    return <Fragment>
     <h1> This is the element</h1>
   <h2 style={{color: 'red', fontSize: 70}}>this is second element {name}</h2>
    <h1>{age}</h1>
    <h1>{age>=50? "yes" :"no"}</h1>
    <h1>{age+30}</h1>
    </Fragment>
}
export default Aboutpage