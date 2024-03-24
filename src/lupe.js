import React from "react";
import Draggable from "react-draggable";
import Muster from "./img/rotesMuster-47.svg";

class Lupe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "lupe",
    };
  }

  componentDidMount() {
    this.props.firstOpen(this.state.name);
  }
  render() {
    return (
      <div>
        <p id="blaueSchrift">Das ist die Schrift unter dem Bild</p>
        <img id="rotesMuster" src={Muster}></img>
      </div>
    );
  }
}

export default Lupe;
