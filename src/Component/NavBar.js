import { Link } from "react-router-dom";
import NavbarStyle from './navbar.module.css'
import {BsFillMenuButtonWideFill  } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { useState } from "react";
 export default function NavBar (){
    const [show , setShow]=useState(true)

    return(
    <>

    <div className={NavbarStyle.links} >
        {/* <h2>GYM</h2> */}
        <a className={NavbarStyle.gym} href="./">GYM</a>
        <ul className={NavbarStyle.link} id ={show? '':NavbarStyle.menu}>
            
            <Link className={NavbarStyle.lin} to = '/'>Home</Link>
            <Link className={NavbarStyle.lin} to = '/about'>About</Link>     
            {/* <a  className={NavbarStyle.lin} href="#about">About Us</a> */}
            <a className={NavbarStyle.lin} href="#programm">Programming</a>
            <a className={NavbarStyle.lin} href="#training">Training</a>
            <a className={NavbarStyle.lin} href="#price">Pricing</a>
            

            
            <Link  className={NavbarStyle.lin} to = '/registration'>JOIN US</Link>
            
           
        </ul>
      <span className={NavbarStyle.span} >{ show? <BsFillMenuButtonWideFill onClick={()=>setShow (false)}/>:
      <ImCross onClick={()=>setShow(true)}/>}</span>
    </div>
    </>
    )

}