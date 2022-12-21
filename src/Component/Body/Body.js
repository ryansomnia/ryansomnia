import React, { Component } from "react";
// import { withRouter } from "react-router";
// import "./Body.css"
import Opening from "../../Content/Opening";
import AboutMe from "../../Content/AboutMe";
// import Carousel from "../../Molekul/Carousel";
class Body extends Component {
  render() {
    return (
      <div className="body">
        {/* <Carousel/> */}
        
<Opening/>
<AboutMe/>
      </div>
    );
  }
}

export default Body;
