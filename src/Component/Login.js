import React from "react";
import {Link} from 'react-router-dom' 

 export default function Login(){
  return(
    <>
    <h1>login</h1>
    <input type ='text'placeholder="User's Name"/><br/>
    <input type ='text'placeholder='password' />
    <div>
        <button> Login</button>
    </div>
    <p>don't have any account? <br/>
    <Link to ='/registration'>register</Link>
    </p>
    </>
  )
 }