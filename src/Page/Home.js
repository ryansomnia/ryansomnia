import { Component } from "react";
import Body from "../Component/Body/Body";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";

export default class home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
