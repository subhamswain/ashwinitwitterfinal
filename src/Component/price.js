 import  React from "react"
  import './price.css'
 export default function Price(){
    return(
        <>
        <div id ="price" >
            <div className="priceMain">
        <div className="card">
      
    <div className="card-overlay">
     <h3> Day Pass</h3>
     <p>$20/Day</p>
     <p><ul>
        <li>10 Days Plan</li>
        <li>Free Gym Access</li>
        <li>24 Hour Access</li></ul>
        <button style={{fontSize:"20px"}}>Get started</button></p>
      </div>
    </div>
    <div className="card">
      
      <div className="card-overlay">
       <h3> Month To Month </h3>
       <p>$90/Month</p>
       <p><ul>
          <li>$ 99 Joining Fee </li>
          <li>No Contract</li>
          <li>Free Gym Access</li>
          <li>1 Group Class Included</li>
          <li>24 Hour Gym Access</li></ul>
          <button style={{fontSize:"20px"}}>Get started</button></p>
        </div></div>
        <div className="card">
        <div className="card-overlay">
            <h1> Membership</h1>
            <p>At Gym Base, we offer a wide range of memebership with options to suit<br/>
            every budget. Everything from One Day Pass ounch Pass to monthly or<br/>
            annual prepaid memebership what's more, we won't tie you in to a long<br/>
            term Contract giving greater flexibility.  </p>
            <h2> Each Plan included </h2>
            <ul>
                <li>
                    The best equipment global brands. 
                </li>
                <li>
                    The gym is open 24 hours a day, 7 days a week.
                </li>
                <li>Two safe pay</li>
            </ul>
        </div>
      </div>
    </div>
    </div>
    {/* </div> */}
        </>
    )
 }