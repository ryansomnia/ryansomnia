import React, { Component } from "react";
// import { withRouter } from "react-router";
import "./Body.css"
import Operning from "../../Content/Operning";
// import Carousel from "../../Molekul/Carousel";
class Body extends Component {
  render() {
    return (
      <div className="body">
        {/* <Carousel/> */}
        
<Operning/>
      </div>
    );
  }
}

export default Body;
