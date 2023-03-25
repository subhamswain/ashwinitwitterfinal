import React from "react";
import {Link} from 'react-router-dom'

 export default function Registration(){
    return(
<>
<h1>Register here </h1>
<div>
    <input type ='text' placeholder="User's Name" /><br/>
    <input type ='text' placeholder=" Email" /><br/>
    <input type ='text' placeholder="Password" /><br/>
    <button>Submit</button>
    <p> Already have an account ?</p>
    <Link  to = '/login'><button> Login</button></Link>
</div>
</>
    )
 }