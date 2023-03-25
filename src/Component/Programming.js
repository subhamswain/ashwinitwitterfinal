import React from "react"
import Carousel from 'better-react-carousel'
import "./Programm.css"

 export default function Programming(){
    return(
        <>
        <div id ="programm" className="Programm">
            <h1 style={{color:'red'}}>Training Programm</h1>
        <Carousel cols={3} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src="https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=600"  alt ="loading"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt ="loading"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt ="loading" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600"  alt ="loading"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=600"  alt ="loading"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://images.pexels.com/photos/3776144/pexels-photo-3776144.jpeg?auto=compress&cs=tinysrgb&w=600"  alt ="loading" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://images.pexels.com/photos/3757374/pexels-photo-3757374.jpeg?auto=compress&cs=tinysrgb&w=600"  alt ="loading"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://images.pexels.com/photos/3253498/pexels-photo-3253498.jpeg?auto=compress&cs=tinysrgb&w=600"  alt ="loading"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://images.pexels.com/photos/6740309/pexels-photo-6740309.jpeg?auto=compress&cs=tinysrgb&w=600"  alt ="loading" />
      </Carousel.Item>
      </Carousel>
      </div>
        </>
    )
 }