
import React from 'react'
import Sketch from 'react-p5'

class Dum extends React.Component {
  constructor() {
    super()
    this.state = ({
      klicked: false
    })
  }
  
  render() {
 
  const setup = (p5, canvasParentRef) => {
    
    p5.createCanvas(p5.windowWidth/1.78, p5.windowHeight/1.85).parent(canvasParentRef)
    p5.background(100, 255, 100)
  }
  
  const draw = p5 => {
    
    if(this.state.klicked){
      p5.background(255, 100, 100)
    }
    p5.ellipse(100, 100, 100)
    p5.ellipse(300, 100, 100)
    p5.mousePressed((p5, event) => {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)
    }
    )
  
  }
  const mouseClicked = (p5, event) =>  {
    if (p5.mouseX > 0 && p5.mouseX < 500){
      
      this.setState({klicked: true})
      console.log(this.state.klicked);
    }

  }
const mousePressed = (p5) => {

}
  
  return <Sketch setup={setup} draw={draw} mouseClicked={mouseClicked} mousePressed={mousePressed}/>
}
}

export default Dum