import React, { Component } from "react";
import "./Carousel.css";

import imagewisuda from "../img/logoryansomnia.png";
import imagecouple from "../img/logoryansomnia.png";
import imagebassis from "../img/logoryansomnia.png";
import imagesahabat from "../img/logoryansomnia.png";
class Carousel extends Component {
  render() {
    return (
      <div id="slider">
        <figure>
          <img src={imagewisuda} width="500" height="350" alt="img1" />
          <img src={imagecouple} width="600" height="350" alt="img2" />
          <img src={imagebassis} width="500" height="350" alt="img3" />
          <img src={imagesahabat} width="500" height="350" alt="img4" />
        </figure>
      </div>
    );
  }
}

export default Carousel;
