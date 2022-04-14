import "./Opening.css"

import React, { Component } from 'react'
// import Carousel from "../Molekul/Carousel"
import MyPhoto from '../img/profil.png'

export default class Operning extends Component {
  render() {
    return (
      <div className="opening">
        <div className="left">
          <div className="text"> 
          <h1>Heriyanto Sitorus</h1>
            <h3>Software Engineer</h3>
          </div>
          <div className="alinea"> 
          <p>
          I have had an interest in programming since I entered college,
           and I liked specifically the field of Back-End Programming but did not rule out the possibilities 
           of learning other things such as Front-End or UI Design. 
          </p>
          <br></br>
           <p>
I have a high enthusiasm to work, create new things,
 and always want to develop self quality.
  Honest, disciplined, hard work, and timely to achieve the desired target and in teamwork 
  I can blend quickly and build good communication in my teamwork. 
          </p>
          </div>
          </div>  
          <div className="right">
           {/* <Carousel/> */}
           <img src={MyPhoto} className="myPhoto"/>
          </div>  
          
      </div>
    )
  }
}
