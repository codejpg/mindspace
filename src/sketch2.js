
import React from 'react'
import Sketch from 'react-p5'
import dist from 'react-p5-wrapper';
import SpeichernIcon from './img/mindspace-56.svg'
import LoeschenIcon from './img/mindspace-57.svg'


class sketch2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      name: "sketch",
      klicked: false,
      pressed: false,
      brushColor: "#000000",
      stroke: 5,
      cnv: {},
      width: 0,
      height: 0,
      clear: false,

    })
  }
  componentWillUnmount() {
    this.props.firstOpen(this.state.name)
  }

  render() {

    const setup = (p5, canvasParentRef) => {

      this.state.cnv = p5.createCanvas(p5.windowWidth / 2.5, p5.windowHeight / 1.3).parent(canvasParentRef)

      p5.background(255)
      this.state.cnv.id('canvas');

      this.setState({
        width: p5.windowWidth,
        height: p5.windowHeight
      });
      console.log(this.state.width)
      p5.rectMode("CENTER");

    }

    const draw = p5 => {

      if (this.state.klicked) {
        //p5.background(255, 100, 100)
      }
      p5.strokeWeight(this.state.stroke);
      if (this.state.pressed) {
        p5.stroke(this.state.brushColor)
        p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)
      }
      p5.fill(240)
      p5.noStroke();
      p5.rect(0, 0, 50, p5.height);
      p5.fill(0)
      p5.textSize(12);
      p5.textFont("Andale Mono")
      p5.text("Farbe", 2, p5.height / 25)
      p5.text("Pinsel", 2, p5.height / 1.8)
      p5.strokeWeight(1);
      p5.stroke(1);
      p5.fill("#8fbc9c")
      p5.rect(2, p5.height / 20, 35, 35)
      p5.fill("#008072")
      p5.rect(2, p5.height / 10, 35, 35)
      p5.fill("#75c9df")
      p5.rect(2, p5.height / 6.6, 35, 35)
      p5.fill("#0096d3")
      p5.rect(2, p5.height / 5, 35, 35)
      p5.fill("#f14564")
      p5.rect(2, p5.height / 4, 35, 35)
      p5.fill("#ffa5ae")
      p5.rect(2, p5.height / 3.33, 35, 35)
      p5.fill("#ffcf0a")
      p5.rect(2, p5.height / 2.85, 35, 35)
      p5.fill("#ffe7a0")
      p5.rect(2, p5.height / 2.5, 35, 35)
      p5.fill("#000000")
      p5.rect(2, p5.height / 2.22, 35, 35)
      //p5.ellipse(25,p5.height/2,40,40)
      //p5.ellipse(25,p5.height/1.67,40,40)

      p5.fill("#000000")
      p5.ellipse(17, p5.height / 1.7, 10, 10)
      p5.ellipse(17, p5.height / 1.5, 20, 20)
      p5.ellipse(17, p5.height / 1.35, 30, 30)
      //p5.ellipse(25,p5.height/1.25,10,10)
      //p5.ellipse(25,p5.height/1.15,20,20)
      //p5.ellipse(25,p5.height/1.05,30,30)

      if (this.state.clear == true) {
        p5.clear();
        this.setState({ clear: false })
        p5.background(255, 255, 255)
      }
    }

    const mouseClicked = (p5, event) => {

      if (p5.mouseX > 2 && p5.mouseX < 37 && p5.mouseY > p5.height / 20 && p5.mouseY < p5.height / 20 + 35) {
        this.setState({ brushColor: "#8fbc9c" })
      } else if (p5.mouseX > 2 && p5.mouseX < 37 && p5.mouseY > p5.height / 10 && p5.mouseY < p5.height / 10 + 35) {
        this.setState({ brushColor: "#008072" })
      } else if (p5.mouseX > 2 && p5.mouseX < 37 && p5.mouseY > p5.height / 6.6 && p5.mouseY < p5.height / 6.6 + 35) {
        this.setState({ brushColor: "#75c9df" })
      } else if (p5.mouseX > 2 && p5.mouseX < 37 && p5.mouseY > p5.height / 5 && p5.mouseY < p5.height / 5 + 35) {
        this.setState({ brushColor: "#0096d3" })
      } else if (p5.mouseX > 2 && p5.mouseX < 37 && p5.mouseY > p5.height / 4 && p5.mouseY < p5.height / 4 + 35) {
        this.setState({ brushColor: "#f14564" })
      } else if (p5.mouseX > 2 && p5.mouseX < 37 && p5.mouseY > p5.height / 3.33 && p5.mouseY < p5.height / 3.33 + 35) {
        this.setState({ brushColor: "#ffa5ae" })
      } else if (p5.mouseX > 2 && p5.mouseX < 37 && p5.mouseY > p5.height / 2.85 && p5.mouseY < p5.height / 2.85 + 35) {
        this.setState({ brushColor: "#ffcf0a" })
      } else if (p5.mouseX > 2 && p5.mouseX < 37 && p5.mouseY > p5.height / 2.5 && p5.mouseY < p5.height / 2.5 + 35) {
        this.setState({ brushColor: "#ffe7a0" })
      } else if (p5.mouseX > 2 && p5.mouseX < 37 && p5.mouseY > p5.height / 2.22 && p5.mouseY < p5.height / 2.22 + 35) {
        this.setState({ brushColor: "#000000" })
      } else if (p5.dist(p5.mouseX, p5.mouseY, 15, p5.height / 1.7) < 10) {
        this.setState({ stroke: 5 })
      } else if (p5.dist(p5.mouseX, p5.mouseY, 15, p5.height / 1.5) < 10) {
        this.setState({ stroke: 15 })
      } else if (p5.dist(p5.mouseX, p5.mouseY, 15, p5.height / 1.35) < 20) {
        this.setState({ stroke: 25 })
      }

    }
    const mousePressed = (p5) => {
      this.setState({ pressed: true })
    }
    const mouseReleased = (p5) => {
      this.setState({ pressed: false })
    }
    const saveCnv = (p5) => {
      let to_save = this.state.cnv.get(50, 0, p5.windowWidth / 1.7, p5.windowHeight / 1.75)
      to_save.save(to_save, 1 + ".png")
    }
    const download = (p5) => {
      var code = this.props.getCode();
      var canvas = document.getElementById("canvas");
      var url = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = code + '.png';
      link.href = url;
      link.click();
    }

    const speichern = (p5) => {
      var code = this.props.getCode("Kunst");
      var canvas = document.getElementById("canvas");
      const base64Canvas = canvas.toDataURL("image/jpeg").split(';base64,')[1];

      this.props.saveImage(base64Canvas);
      this.setState({ clear: true })

    }
    const loeschen = (p5) => {
      this.setState({ clear: true })
    }


    function getImageURL(imgData, width, height) {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      ctx.putImageData(imgData, 0, 0);
      return canvas.toDataURL(); //image URL
    }



    return <div><Sketch setup={setup} draw={draw} mouseClicked={mouseClicked} mousePressed={mousePressed} mouseReleased={mouseReleased} />
      <img className="löschenButton" src={LoeschenIcon} onClick={loeschen} />
      <img className="saveButton" src={SpeichernIcon} onClick={speichern} /></div>
  }
}

export default sketch2