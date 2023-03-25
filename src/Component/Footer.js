import React from "react"
import { AiFillFacebook } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import footerStyle from './Footer.module.css'
export default function Footer(){
    return( 
        <><div className={footerStyle.mainDiv}>
            <div >
                <h1>GYM</h1>
                <p>A unit of care that take care your and<br/> your family's health </p>
               <a href="https://www.facebook.com/xyz."><AiFillFacebook/></a>
               <a href="https://www.twitter.com/xyz."><GrTwitter/></a>
               <a href="https://www.instagram.com/accounts/login/."><AiFillInstagram/></a>
            </div>
            <div>
                <h2>Benefits</h2>
                <p>Heathly Living<br/>Greate Fitness<br/>
                Healthy Mind<br/>
                 Greate Fitness</p>
            </div>
            <div>
                <h2>Services</h2>
                <p>24 Hour Access<br/>Well Trained Coaches<br/>Unisex<br/></p>
            </div>
           

        </div>
        
        </>
    )
}
