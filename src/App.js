import React from "react"
import fileData from "./fileData"
import Logo from './img/logo.svg'
import './Desktop.css'
import Dropdown from 'react-dropdown';



import FolderImage from './img/mindspace-11.svg'
import GameImage from './img/MindSpaceRGB neu-13.svg'
import KunstImage from './img/MindSpaceRGB-09.svg'
import PolyImage from './img/MindSpaceRGB neu-12.svg'
import DrawImage from './img/MindSpaceRGB-37.svg'
import ProgressImage from './img/MindSpaceRGB neu-14.svg'
import QuizImage from './img/MindSpaceRGB-21.svg'
import EndeImage from './img/mindspace-48.svg'
import LupeImage from './img/mindspace-53.svg'
import TextImage from './img/mindspace-55.svg'

import FolderImageHover from './img/MindSpaceRGB neu-18.svg'
import GameImageHover from './img/MindSpaceRGB-16.svg'
import KunstImageHover from './img/mindspace-47.svg'
import PolyImageHover from './img/MindSpaceRGB neu-17.svg'
import DrawImageHover from './img/MindSpaceRGB neu-19.svg'
import ProgressImageHover from './img/MindSpaceRGB-15.svg'
import QuizImageHover from './img/MindSpaceRGB-36.svg'
import EndeImageHover from './img/mindspace-50.svg'
import LupeImageHover from './img/mindspace-52.svg'
import TextImageHover from './img/mindspace-54.svg'

import SettingsIcon from './img/MindSpaceRGB-22.svg'

import SubImage from './img/sub-1.svg'

import WarmTap from './sounds/tap-warm.mp3'

import Logo1 from './img/MindSpace-13.svg'
import Clock from 'react-live-clock';
import Ordner from "./ordner";
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
import Progress from "./progress"
import Settings from "./settings"
import Lupe from "./lupe"
import Notiz from "./notiz.js"

import { ThemeConsumer } from "styled-components";

import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';






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
      code: "0000", 
      clicks: 0, 
      influencePoints: 0,
      progressPoints: 0,
      quizProgress: 0,
      showKunst: false,
      sketchedImages: [],
      //Notification
      notePosition: "30px",
      mID: 0,
      notes: "test",
      currentBgColor: "#afdcdc",
      settings: [
        {id: 1, bgColor: "#eef2f3"},
        {id: 2, bgColor: "#ffe7a0"},
        {id: 3, bgColor: "#ffbeca"},
        {id: 4, bgColor: "#0096d3"},
        {id: 5, bgColor: "#dedddc"},
        {id: 6, bgColor: "#afdcdc"},
        {id: 7, bgColor: "#ffd900"},
        {id: 8, bgColor: "#90bc9c"}
      ],
      settingsVisible: false,
      files: fileData,
      day: today.getDate(),
      month: today.getMonth(),
      wochentag : weekday[today.getDay()],
      displayText: "",
      isLoggedIn: false,
      login: "",
      post: [
        { id: 1, name: "Polycon", className: "popup2", show: true, isActive: false, content: <Dum firstOpen= {this.firstOpen}/>, image: PolyImage,  hoverImage: PolyImageHover},
        { id: 2, name: "Ordner", className: "popup2", show: true, isActive: false, content: <Ordner firstOpen= {this.firstOpen}/>, image: FolderImage, hoverImage: FolderImageHover },
        { id: 3, name: "Spiel", className: "popup2", show: true, isActive: false, content: <PolySketch/>, image: GameImage, hoverImage: GameImageHover },
        { id: 4, name: "Skizzen", className: "popup2",  show: true, isActive: false, content: <Sketch2 firstOpen= {this.firstOpen} getCode = { this.getCode } saveImage= {this.saveSketch}/>, image: DrawImage, hoverImage: DrawImageHover },
        { id: 5, name: "Quiz", className: "popup2", show: true, isActive: false, content: <Quiz saveFunction={this.saveQuizData} loadFunction={this.getQuizData}/>, image: QuizImage, hoverImage: QuizImageHover },
        { id: 6, name: "Progress", className: "progress", show: true, isActive: false, content: <Progress/>, image: ProgressImage, hoverImage: ProgressImageHover },
        { id: 7, name: "Einstellungen", className: "settingsPopup", show: true, isActive: false, content: <Settings firstOpen= {this.firstOpen} getBgColor= {this.getBackgroundColor}/>,  image: SettingsIcon,  hoverImage: SettingsIcon},
        { id: 8, name: "Lupe", className: "popup2", show: true, isActive: false, content: <Lupe firstOpen= {this.firstOpen} opened="false"/>,  image: LupeImage,  hoverImage: LupeImageHover},
        { id: 9, name: "Kunst", className: "scrollDiv ", show: false, isActive: false, content: <Kunst getCode = { this.getCode } getSketches={this.getSketches}/>, image: KunstImage, hoverImage: KunstImageHover },
        { id: 10, name: "Notiz", className: "progress ", show: true, isActive: false, content: <Notiz saveNotes={this.saveNotes} getNotes={this.getNotes}/>, image: ProgressImage, hoverImage: ProgressImageHover },
        { id: 11, name: "Ergebnis", className: "popup2 ", show: true, isActive: false, content: <Notiz saveNotes={this.saveNotes} getNotes={this.getNotes}/>, image: EndeImage, hoverImage: EndeImageHover },
        { id: 12, name: "Text", className: "popup2 ", show: true, isActive: false, content: <Notiz saveNotes={this.saveNotes} getNotes={this.getNotes}/>, image: TextImage, hoverImage: TextImageHover },
       
      ],
     
       
    };
      this.handleLoginClick = this.handleLoginClick.bind(this)
      this.handleNoteClick = this.handleNoteClick.bind(this)
      this.notificationOpen = this.notificationOpen.bind(this)
      this.clickSound = this.clickSound.bind(this)
      this.toggleSettings = this.toggleSettings.bind(this)
      this.saveSketch = this.saveSketch.bind(this)


  }
    timer = 0;
    delay = 200;
    prevent = false;
    

    onSingleClickHandler = () => {
      this.clickSound();
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
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

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
    clickSound() {
      let audio = new Audio(WarmTap)
      audio.play()
    }

    saveQuizData= (data) => {
      this.setState({
        influencePoints: data.qID,
        quizProgress: data.qID
      })
      console.log("influencePoints: " , this.state.influencePoints)
    }
    getQuizData= () => { 
      return this.state.quizProgress
    }

   getBackgroundColor= (color) => {
    this.setState({currentBgColor: color})
    }

    getCode= () => {
    
      let posts = [...this.state.post];
      let idx = posts.findIndex(obj => { return obj.name == 'Kunst' })
      let post = posts[idx]
      post.show = true;
      posts[idx] = post
      this.setState({
        post: posts
      })
   
      return this.state.code

    }  
    saveNotes= (val) => {
      this.setState({notes: val})
    }
    getNotes= () => {
      return this.state.notes
    }


    toggleSettings(){
        var popup = document.getElementById("settingsPopup");
        if(this.state.settingsVisible==false){
          popup.style.display = "flex";
          this.setState({settingsVisible: true})
        }else{
          popup.style.display = "none";
          this.setState({settingsVisible: false})
        }
    }

    saveSketch = (image) => {
      this.setState({
        sketchedImages: this.state.sketchedImages.concat(image)
      })
    }
    getSketches = () =>{
       return this.state.sketchedImages
    }

    firstOpen = (val) =>{
      if (val == true ){
        console.log(this.state.progressPoints)
        return true
      } else {
        console.log(this.state.progressPoints)
        this.setState(prevstate => ({ progressPoints: prevstate.progressPoints + 1}));
        return true
      }
      
    }
  
    
            
    render(){
      const subimage = require('./img/sub-' + this.getRandomInt(3) + '.svg')
      console.log(subimage)
      /*
      document.addEventListener('click', function() {
        clickSound();
      });*/
      
      const options = [
        'one', 'two', 'three'
      ]; 

    return (
      
      <div className="Desktop" style={{backgroundColor: this.state.currentBgColor}}>
  <Login login={this.state.isLoggedIn} onClick={this.handleLoginClick}></Login>
        <div className="topBar">
            <div><img src={Logo}></img></div>
            <div></div>
            <div id="codeRead" value={this.state.code}>code: {this.state.code}</div>
            <div className="time">{this.state.wochentag}. {this.state.day}.{this.state.month}. <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Berlin'} /></div >
        </div>
           
      <div className="contentWrap">
          <div className="holder">
   
        <Product data={this.state.post} onChange={this.notificationOpen} id={this.state.post.id} onClick={this.onSingleClickHandler} code={this.state.code}/>
    
      </div> 
</div>
<Subliminal image={subimage}></Subliminal>
<Draggable
          handle="#modalTopBar"
          bounds={{ top: -250, left: -500, right: 500, bottom: 250 }}>
        <div id="settingsPopup">
        <div id="modalTopBar"><h1>Einstellungen</h1>
          <button className = "closeBtn" onClick={this.toggleSettings}></button>
        </div>
        <div className="content">
        <p>Hintergrundfarbe ändern:</p>
        {this.state.settings.map((data, key) => (
        <div onClick={()=>this.setState({currentBgColor: data.bgColor})} className="colorSelector" style={{background: data.bgColor}}></div>
    
   
           
          
        ))}
            </div>
         </div></Draggable>
         <EasybaseProvider ebconfig={ebconfig}>
     
    </EasybaseProvider>

      </div>
    );
  }
}

  


export default App;
