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
      catOrDog: this.props.katzoderhund(),
    }
  }



  importAll(r) {
    var test = r.keys().map(r);
    console.log(test)
    return test
  }
  componentWillMount() {
    console.log(this.state.catOrDog)
    if (this.props.katzoderhund() == "Katzen") {
      listOfImages = this.importAll(require.context('./img/katzen/', true, /\.(png|jpe?g|svg)$/));
    }
  }

  render() {
    return (
      <div className="kunstOrdner">
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