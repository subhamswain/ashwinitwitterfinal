import React from 'react'
import TrainingStyle from './Trainer.module.css'
import {useState} from 'react'


export default function TrainerSection(){
  const[show , setShow] = useState(false)
  return(
    <>
<div  id = "training" className={TrainingStyle.wrap} >
  <h1 style={{color:"white" , textShadow : "1px 1px black"}}>Meet Our Team</h1>
  <p className={TrainingStyle.text} style={{color:"white" , textShadow : "1px 1px black"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam temporibus delectus magni quaerat quos! Provident totam asperiores, eveniet dolore nisi ad odio. Dignissimos, animi ea quasi ipsum error omnis cum qui dolorem, tempora quibusdam perferendis.</p>

  <div className={TrainingStyle.griding}>
    <div>
    <img width="300em" height="200em" src="https://images.pexels.com/photos/4491476/pexels-photo-4491476.jpeg?auto=compress&cs=tinysrgb&w=600" alt="work" />
    <p style={{color:"white" , textShadow : "1px 1px black"}}>Nick Mitchell</p>
    <p style={{color:"grey" , textShadow : "1px 1px black"}}>Weight Trainer<br/>4 Year Experience</p>
    </div>
    <div>
    <img width="300em" src="https://images.pexels.com/photos/8745172/pexels-photo-8745172.jpeg?auto=compress&cs=tinysrgb&w=600" alt="work"/>
    <p style={{color:"white" , textShadow : "1px 1px black"}}>Matt Roberts</p>
    <p style={{color:"grey" , textShadow : "1px 1px black"}}></p>
    </div>
    <div>
    <img width="300em" height="200em" src="https://images.pexels.com/photos/7148031/pexels-photo-7148031.jpeg?auto=compress&cs=tinysrgb&w=600" alt="work"/>
    <p style={{color:"white" , textShadow : "1px 1px black"}}></p>
    <p style={{color:"grey" , textShadow : "1px 1px black"}}></p>
    </div>
    <div>
    <img width="300em" src="https://images.pexels.com/photos/6456328/pexels-photo-6456328.jpeg?auto=compress&cs=tinysrgb&w=600" alt="work"/>
    <p style={{color:"white" , textShadow : "1px 1px black"}}></p>
    <p style={{color:"grey" , textShadow : "1px 1px black"}}></p>
    </div>
    </div>
    
    {show ? <>
    <span className={TrainingStyle.griding}>
      <div>
    <img width="300em" src="https://images.pexels.com/photos/733500/pexels-photo-733500.jpeg?auto=compress&cs=tinysrgb&w=600" alt="work"/>
    <p style={{color:"white" , textShadow : "1px 1px black"}}>Rock -</p>
    <p style={{color:"grey" , textShadow : "1px 1px black"}}>Calisthenics</p>
    </div>
    <div>
    <img width="300em" src="https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=600" alt="work"/>
    <p style={{color:"white" , textShadow : "1px 1px black"}}>Dean Ambrose -</p>
    <p style={{color:"grey" , textShadow : "1px 1px black"}}>Deadlift Coach</p>
    </div>
    <div>
    <img width="300em" src="https://www.snapfitness.com/assets/HeaderBackgroundImages/52b617969c/shutterstock_693082024-2.jpg" alt="work"/>
    <p style={{color:"white" , textShadow : "1px 1px black"}}>Becky Lynch -</p>
    <p style={{color:"grey" , textShadow : "1px 1px black"}}>Body Building Coach</p>
    </div>
    <div>
    <img width="300em" height="200em" src="https://www.livin3.com/wp-content/uploads/2020/05/man-building-biceps-at-the-gym.jpg" alt="work"/>
    <p style={{color:"white" , textShadow : "1px 1px black"}}>Under Tacker -</p>
    <p style={{color:"grey" , textShadow : "1px 1px black"}}>Crossfit Coach</p>
    </div>
    </span>
    <button id="append" onClick={()=>{setShow(false)}}>See Less Team</button>
    </> : <a href="#append"><button onClick={()=>{setShow(true)}}>See Whole Team</button></a>
}
    


</div>


    </>
  )
}