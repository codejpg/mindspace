
import React from 'react'
import Sketch from 'react-p5'
import dist from 'react-p5-wrapper';
let cnv;
class PolySketch extends React.Component {
  constructor() {
    super()
    this.state = ({
      klicked: false,
      pressed: false,
      brushColor: "#000000",
      stroke: 1,
      p1x: 200,
      p1y: 200,
      p2x: 300,
      p2y: 100,
      p3x: 200,
      p3y: 500,
      p4x: 500,
      p4y: 500,
    })
  }
  
  
  render() {
 
  const setup = (p5, canvasParentRef) => {
    
    cnv = p5.createCanvas(p5.windowHeight/1.75, p5.windowHeight/1.75).parent(canvasParentRef)
    p5.background(0)
 
  }
  
  const draw = p5 => {
    
    if(this.state.klicked){
      //p5.background(255, 100, 100)
    }
    p5.strokeWeight(this.state.stroke);

    p5.fill("#ff0000")
    p5.ellipse(this.state.p1x, this.state.p1y,40,40)
    p5.ellipse(this.state.p2x, this.state.p2y,40,40)
    p5.ellipse(this.state.p3x, this.state.p3y,40,40)
    p5.ellipse(this.state.p4x, this.state.p4y,40,40)
  }

  const mouseClicked = (p5, event) =>  {
  
    if (p5.dist(p5.mouseX,p5.mouseY, 25, p5.height/10)< 20){
      this.setState({brushColor: "#e593b9"})
    } 

  }
const mousePressed = (p5) => {
  this.setState({pressed: true})
}
const mouseReleased = (p5) => {
  this.setState({pressed: false})
}
  
  return <Sketch setup={setup} draw={draw} mouseClicked={mouseClicked} mousePressed={mousePressed} mouseReleased={mouseReleased}/>
}
}

export default PolySketch