
import React from 'react'
import Sketch from 'react-p5'
import dist from 'react-p5-wrapper';


class sketch2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      klicked: false,
      pressed: false,
      brushColor: "#000000",
      stroke: 5,
      cnv: {},
      width: 0,
      height: 0
    })
  }
  
  
  render() {
 
  const setup = (p5, canvasParentRef) => {
    
    this.state.cnv = p5.createCanvas(p5.windowWidth/1.7, p5.windowHeight/1.75).parent(canvasParentRef)
    
    p5.background(255)
    this.state.cnv.id('canvas');
    this.setState({
      width: p5.windowWidth,
      height: p5.windowHeight
    });
    console.log(this.state.width)
 
  }
  
  const draw = p5 => {
    
    if(this.state.klicked){
      //p5.background(255, 100, 100)
    }
    p5.strokeWeight(this.state.stroke);
    if(this.state.pressed){
      p5.stroke(this.state.brushColor)
    p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)
    }
    p5.fill(240)
    p5.noStroke();
    p5.rect(0,0,50,p5.height);
   
    p5.fill("#e593b9")
    p5.ellipse(25,p5.height/10,40,40)
    p5.fill("#eff2f4")
    p5.ellipse(25,p5.height/5,40,40)
    p5.fill("#f6e779")
    p5.ellipse(25,p5.height/3.33,40,40)
    p5.fill("#94caad")
    p5.ellipse(25,p5.height/2.5,40,40)
    p5.fill("#c6c5e0")
    p5.ellipse(25,p5.height/2,40,40)
    p5.fill("#afc4e4")
    p5.ellipse(25,p5.height/1.67,40,40)
    p5.fill("#adadad")
    p5.ellipse(25,p5.height/1.44,40,40)
    p5.fill("#000000")
    p5.ellipse(25,p5.height/1.25,10,10)
    p5.ellipse(25,p5.height/1.15,20,20)
    p5.ellipse(25,p5.height/1.05,30,30)
  }

  const mouseClicked = (p5, event) =>  {
  
    if (p5.dist(p5.mouseX,p5.mouseY, 25, p5.height/10)< 20){
      this.setState({brushColor: "#e593b9"})
    } else  if (p5.dist(p5.mouseX,p5.mouseY, 25, p5.height/5)< 20){
      this.setState({brushColor: "#eff2f4"})
    } else  if (p5.dist(p5.mouseX,p5.mouseY, 25, p5.height/3.33)< 20){
      this.setState({brushColor: "#f6e779"})
    } else  if (p5.dist(p5.mouseX,p5.mouseY, 25, p5.height/2.5)< 20){
      this.setState({brushColor: "#94caad"})
     } else  if (p5.dist(p5.mouseX,p5.mouseY, 25, p5.height/2)< 20){
        this.setState({brushColor: "#c6c5e0"})
    } else  if (p5.dist(p5.mouseX,p5.mouseY, 25, p5.height/1.67)< 20){
      this.setState({brushColor: "#afc4e4"})
    } else  if (p5.dist(p5.mouseX,p5.mouseY, 25, p5.height/1.44)< 20){
      this.setState({brushColor: "#adadad"})
    } else  if (p5.dist(p5.mouseX,p5.mouseY, 25, p5.height/1.25)< 5){
      this.setState({stroke: 10})
    } else  if (p5.dist(p5.mouseX,p5.mouseY, 25, p5.height/1.15)< 10){
      this.setState({stroke: 20})
    } else  if (p5.dist(p5.mouseX,p5.mouseY, 25, p5.height/1.05)< 20){
      this.setState({stroke: 30})
    }

  }
const mousePressed = (p5) => {
  this.setState({pressed: true})
}
const mouseReleased = (p5) => {
  this.setState({pressed: false})
}
const saveCnv = (p5) => {
  let to_save = this.state.cnv.get(50, 0, p5.windowWidth/1.7, p5.windowHeight/1.75)
  to_save.save(to_save, 1 +".png")
}
const download=(p5) =>{
  var code = this.props.getCode();
  var canvas = document.getElementById("canvas");
  var url = canvas.toDataURL("image/png");
  var link = document.createElement('a');
  link.download = code + '.png';
  link.href = url;
  link.click();
}

const speichern=(p5) =>{
  var code = this.props.getCode();
  var canvas = document.getElementById("canvas");
  const base64Canvas = canvas.toDataURL("image/jpeg").split(';base64,')[1];
 
  this.props.saveImage(base64Canvas);
}


function getImageURL(imgData, width, height) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;
  ctx.putImageData(imgData, 0, 0);
  return canvas.toDataURL(); //image URL
}


  
  return <div><Sketch setup={setup} draw={draw} mouseClicked={mouseClicked} mousePressed={mousePressed} mouseReleased={mouseReleased}/>
  <button className="saveButton" onClick={speichern}>Save</button></div>
}
}

export default sketch2