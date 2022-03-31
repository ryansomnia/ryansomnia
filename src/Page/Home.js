import { Component } from "react";
import Body from "../../src/Component/Body/Body";
import Footer from "../../src/Component/Footer/Footer";
import Header from "../../src/Component/Header/Header";

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
