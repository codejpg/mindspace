import React from "react"
import FolderImage from './img/MindSpaceRGB-11.svg'
import FolderImageHover from './img/MindSpaceRGB neu-18.svg'
import Dum from "./sketch"
import Draggable from 'react-draggable'
//import Modal from "./Modal";
import Modal from 'react-modal';
import "./Modal.css";
import { ThemeConsumer } from "styled-components"
import KatzeIcon from "./img/katz.svg"
import HundIcon from "./img/hund.svg"
//var listOfCatImages = [];
//var listOfDogImages = [];
//var listOfImages = [];

class Ordner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ordner",
      num: 0,
      listOfCatImages: [],
      listOfDogImages: [],
      listOfImages: [],
      catCount: this.props.getCatCount(),
      dogCount: this.props.getDogCount()

    }
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  handleClick = (event) => {
    const id = event.target.id

    if (id == 1) {


      this.setState(prevstate => ({
        catOrDog: "Katzen",
        num: this.getRandomInt(this.state.listOfCatImages.length),
        listOfImages: this.state.listOfCatImages,
        catCount: prevstate.catCount + 1
      }))

    } else if (id == 2) {

      this.setState(prevstate => ({
        catOrDog: "Hunde",
        num: this.getRandomInt(this.state.listOfDogImages.length),
        listOfImages: this.state.listOfDogImages,
        dogCount: prevstate.dogCount + 1
      }))

    }
    this.props.saveTierCount(this.state)
    console.log("catcount: ", this.state.catCount, "dogcount: ", this.state.dogCount)


  }
  importAll(r) {
    var test = r.keys().map(r);
    console.log(test)
    return test
  }
  componentDidMount() {
    console.log("katz oder hund:" + this.state.catOrDog)
    //if (this.state.catOrDog == "Katzen") {
    this.setState({
      listOfCatImages: this.importAll(require.context('./img/katzen/', true, /\.(png|jpe?g|svg)$/)),
      listOfDogImages: this.importAll(require.context('./img/hunde/', true, /\.(png|jpe?g|svg)$/)),
      listOfImages: this.state.listOfCatImages
    })
    //listOfCatImages = this.importAll(require.context('./img/katzen/', true, /\.(png|jpe?g|svg)$/))
    //listOfDogImages = this.importAll(require.context('./img/hunde/', true, /\.(png|jpe?g|svg)$/))

  }
  componentWillUnmount() {
    this.props.firstOpen(this.state.name)
  }

  render() {
    return (
      <div className="tierFotoOrdner">
        {this.state.listOfImages.map(
          (image, index) => { if (index == this.state.num) { return <img key={index} src={image.default} alt="info"></img> } }
        )
        }
        <div className="sideBar">
          <img className="catIcon" src={KatzeIcon} id="1" onClick={this.handleClick} />
          <img className="dogIcon" src={HundIcon} id="2" onClick={this.handleClick} />
        </div></div>
    )
  }
}





export default Ordner