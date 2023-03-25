import React from "react";
//import NavBar from "./NavBar";
 import homeStyle from './home.module.css'
 import {Link} from 'react-router-dom'
 
 import Price from './price'
import Programming from "./Programming";
import Trainer from "./Trainer";
import Footer from "./Footer";
  export default function Home (){
    
    
    return(<>
    
    <div className={homeStyle.box}>
        <div className={homeStyle.head}>
        <h1>
        “Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.”<br/>
        “Your health account, your bank account, they’re the same thing. The more you put in, the more you can take out.”
        </h1>
       <Link to ='./registration'> <button className={homeStyle.button}>JOIN US</button></Link> 
        {/* <p id ="price"> Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension. </p> */}
        </div>


        
        </div>
         
        
          <Programming/>
         <Trainer/>
          <Price/>
          <Footer/>
       
        </>
    )
 }