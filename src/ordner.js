import React from "react"
import FolderImage from './img/MindSpaceRGB-11.svg'
import FolderImageHover from './img/MindSpaceRGB neu-18.svg'
import Dum from "./sketch"
import Draggable from 'react-draggable'
//import Modal from "./Modal";
import Modal from 'react-modal';
import "./Modal.css";
import { ThemeConsumer } from "styled-components"
var listOfImages = [];

class Ordner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ordner",
      catOrDog: this.props.katzoderhund(),
    }
  }



  importAll(r) {
    var test = r.keys().map(r);
    console.log(test)
    return test
  }
  componentWillMount() {
    console.log("katz oder hund:" + this.state.catOrDog)
    if (this.state.catOrDog == "Katzen") {
      listOfImages = this.importAll(require.context('./img/katzen/', true, /\.(png|jpe?g|svg)$/));
    } else if (this.state.catOrDog == "Hunde") {
      listOfImages = this.importAll(require.context('./img/hunde/', true, /\.(png|jpe?g|svg)$/));
    }
  }
  componentWillUnmount() {
    this.props.firstOpen(this.state.name)
  }

  render() {
    return (
      <div className="tierFotoOrdner">
        {

          listOfImages.map(
            (image, index) => <img key={index} src={image.default} alt="info"></img>

          )
        }


      </div>
    )
  }
}





export default Ordner