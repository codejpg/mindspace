import React from "react"
import fileData from "./fileData"
import logo from './logo.svg';
import './Desktop.css'


import FolderImage from './img/MindSpaceRGB neu-11.svg'
import GameImage from './img/MindSpaceRGB neu-13.svg'
import KunstImage from './img/MindSpaceRGB neu-09.svg'
import PolyImage from './img/MindSpaceRGB neu-12.svg'
import DrawImage from './img/MindSpaceRGB neu-10.svg'
import Progress from './img/MindSpaceRGB neu-14.svg'

import FolderImageHover from './img/MindSpaceRGB neu-11.svg'
import GameImageHover from './img/MindSpaceRGB neu-13.svg'
import KunstImageHover from './img/MindSpaceRGB neu-09.svg'
import PolyImageHover from './img/MindSpaceRGB neu-12.svg'
import DrawImageHover from './img/MindSpaceRGB neu-10.svg'
import ProgressHover from './img/MindSpaceRGB neu-14.svg'

import Logo1 from './img/MindSpace-13.svg'
import Clock from 'react-live-clock';
import Dum from "./sketch"
import Sketch2 from "./sketch2"
import PolySketch from "./polySketch"
import Product from "./Product";
import Quiz from "./Quiz"
import Kunst from "./Kunst"
import Notification2 from "./Notification2"
import Subliminal from './subliminal'
import Draggable from "react-draggable";
import Login from "./login"






class App extends React.Component {
  constructor() {
    super();
    const today = new Date();
    var weekday = new Array(7);
    weekday[0] = "So";
    weekday[1] = "Mo";
    weekday[2] = "Di";
    weekday[3] = "Mi";
    weekday[4] = "Do";
    weekday[5] = "Fr";
    weekday[6] = "Sa";
    this.state = {
      id: 0, 
      code: "", 
      clicks: 0, 
      pictureDrawn: false, 
      influencePoints: 0,
      //Notification
      notePosition: "30px",
      mID: 0,

      files: fileData,
      day: today.getDate(),
      month: today.getMonth(),
      wochentag : weekday[today.getDay()],
      displayText: "",
      isLoggedIn: false,
      login: "",
      post: [
        { id: 1, name: "Polycon", className: "popup2", content: <Dum/>, image: PolyImage, outImage: PolyImage, hoverImage: PolyImageHover},
        { id: 2, name: "Ordner", className: "popup2", content: <Sketch2/>, image: FolderImage, hoverImage: FolderImageHover },
        { id: 3, name: "Spiel", className: "popup2", content: <PolySketch/>, image: GameImage, hoverImage: GameImageHover },
        { id: 4, name: "Kunst", className: "popup2", content: <Kunst/>, image: KunstImage, hoverImage: KunstImageHover },
        { id: 5, name: "Draw.io", className: "popup2", content: <Sketch2/>, image: DrawImage, hoverImage: DrawImageHover },
        { id: 6, name: "Quiz", className: "popup2", content: <Quiz/>, image: DrawImage, hoverImage: DrawImageHover },
        { id: 7, name: "Progress", className: "progress", content: <Dum/>, image: Progress, hoverImage: ProgressHover }
      ],
 
    };
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleNoteClick = this.handleNoteClick.bind(this)
    this.notificationOpen = this.notificationOpen.bind(this)

}
    timer = 0;
    delay = 200;
    prevent = false;
  
    onSingleClickHandler = () => {
      this.timer = setTimeout(() => {
        if (!this.prevent) {
          this.setState(
            {
              displayText: "Single Click"
            },
            () => {
              console.log(this.state);
            }
          );
        }
      }, this.delay);
    };
    onDoubleClickHandler = (event) => {
      clearTimeout(this.timer);
      this.togglePopup(event.target.id)
      this.prevent = true;
      this.setState(
        {
          displayText: "Double Click"
        },
        () => {
          console.log(this.state);
          setTimeout(() => {
            this.prevent = false;
          }, this.delay);
        }
      );
    };

    handleLoginClick () {
      
      this.setState({
        
          code: (document.getElementById('codeInput').value),
          isLoggedIn: true
          
        })
        //document.getElementById('codeInputWrap').style.display = "none";
        console.log(this.state.code)
        
    }

    handleNoteClick () {
      this.setState({
        notePosition: "-400px",
    })

    }
    notificationOpen() {
      this.setState({
        notePosition: "30px",
        mID: this.state.post.id
    })
    console.log("Mid: "+this.state.post.id)
    }
            
    render(){

    

    return (
      
      <div className="Desktop">
  <Login login={this.state.isLoggedIn} onClick={this.handleLoginClick}></Login>
        <div className="topBar">
        <p>MindSpace</p>
          <div className="time">{this.state.wochentag}. {this.state.day}.{this.state.month}. <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Berlin'} /></div >
          code: {this.state.code}</div>
          
  <div className="contentWrap">
          <div className="holder">
            
        <Product data={this.state.post} onChange={this.notificationOpen} id={this.state.post.id} />
       
      </div> 
</div>
<Subliminal></Subliminal>

         

      </div>
    );
  }
}

  


export default App;
