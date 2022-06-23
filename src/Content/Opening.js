import "./Opening.css"

import React, { Component } from 'react'
// import Carousel from "../Molekul/Carousel"
import MyPhoto from '../img/e.jpg'

export default class Operning extends Component {
  render() {
    return (
      <div className="opening">
        <div className="left">
          <div className="text"> 
          <h6>Hi There I’m</h6>
             <h6> Heriyanto Sitorus</h6>
          </div>
          <div className="alinea"> 
          <p>
          Experienced Software Engineer and experienced in developing applications both within the company and freelance projects. I have Passion in programming, especially in stacks such as node js, react, and SQL but it is possible to learn other things
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
