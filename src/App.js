import React from "react"

import Logo from './img/logo.svg'
import './Desktop.css'
//import Dropdown from 'react-dropdown';
import EndQuiz from './endQuiz'
import StartQuiz from './startQuiz'
import Generator from './generator'
import Entscheidung from './entscheidung'
import Auswertung from './auswertung'


import FolderImage from './img/mindspace-11.svg'
//import GameImage from './img/MindSpaceRGB-neu-13.svg'
import PhotoImage from './img/mindspace-09.svg'
import KunstImage from './img/mindspace-61.svg'
//import PolyImage from './img/MindSpaceRGB-neu-12.svg'
import DrawImage from './img/mindspace-10.svg'
import ProgressImage from './img/mindspace-68.svg'
//import QuizImage from './img/MindSpaceRGB-21.svg'
import EndeImage from './img/mindspace-48.svg'
//import LupeImage from './img/mindspace-53.svg'
//import TextImage from './img/mindspace-55.svg'
import PhotoAutomatImage from './img/fotoautomatt-63.svg'
import GeneratorImage from './img/AUTOMAT-65.svg'

import FolderImageHover from './img/mindspace-18.svg'
//import GameImageHover from './img/MindSpaceRGB-16.svg'
import PhotoImageHover from './img/mindspace-63.svg'
import KunstImageHover from './img/mindspace-60.svg'
//import PolyImageHover from './img/MindSpaceRGB-neu-17.svg'
import DrawImageHover from './img/mindspace-59.svg'
import ProgressImageHover from './img/mindspace-67.svg'
import QuizImageHover from './img/MindSpaceRGB-36.svg'
import EndeImageHover from './img/mindspace-50.svg'
//import LupeImageHover from './img/mindspace-52.svg'
//import TextImageHover from './img/mindspace-54.svg'
import PhotoAutomatImageHover from './img/fotoautomatt-64.svg'
import GeneratorImageHover from './img/AUTOMAT-67.svg'

import SettingsIcon from './img/mindspace-20.svg'
import SettingsIconHover from './img/mindspace_-20.svg'


import WarmTap from './sounds/tap-warm.mp3'

import Einleitung from "./einleitung"
//import Logo1 from './img/MindSpace-13.svg'
import Clock from 'react-live-clock';
import Ordner from "./ordner";
import Sketch2 from "./sketch2"
import PhotoBooth from "./photoBooth"
import Programm from "./Programm";
//import Quiz from "./Quiz"
import Kunst from "./Kunst"
import Subliminal from './subliminal'
import Draggable from "react-draggable";
import Login from "./login"
import Settings from "./settings"
import Notiz from "./notiz.js"


var preCodes = ["0000", "1111", "2222", "1212", "89238983bw", "A22-Bt31", "F37-25T", "A56-MR8", "A22-I73", "L27-KT5", "T77-3BS", "E64-73Q", "P6R-29Y"];


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
      userName: "User",
      favTier: "keins",
      favColor: 0,
      clicks: 0,
      influencePoints: 0,
      progressLupe: false,
      progressOrdner: false,
      progressSketch: false,
      progressSubliminal: false,
      progressGenerator: false,
      progressFotoAlbum: false,
      progressSkizzenAlbum: false,
      progressPoints: 0,
      quizProgress: 0,
      subImgNumber: 0,
      showKunst: false,
      endQuizVisible: false,
      auswertungVisible: false,
      endQuizDone: false,
      startSubliminal: false,
      sketchedImages: [],
      takenPhotos: [],
      catCount: 0,
      dogCount: 0,
      //Notification
      notePosition: "30px",
      mID: 0,
      notes: "Hier kannst du dir Notizen machen...",
      currentBgColor: "#afdcdc",
      settings: [
        { id: 1, bgColor: "#eef2f3" },
        { id: 2, bgColor: "#ffe7a0" },
        { id: 3, bgColor: "#ffbeca" },
        { id: 4, bgColor: "#0096d3" },
        { id: 5, bgColor: "#dedddc" },
        { id: 6, bgColor: "#afdcdc" },
        { id: 7, bgColor: "#ffd900" },
        { id: 8, bgColor: "#90bc9c" }
      ],
      settingsVisible: false,
      time: 0,
      start: 0,

      day: today.getDate(),
      month: today.getMonth(),
      wochentag: weekday[today.getDay()],
      displayText: "",
      isLoggedIn: false,
      addData: false,
      login: "",
      post: [
        //{ id: 1, name: "Polycon", className: "popup2", show: true, nameShow: false, isActive: false, content: <Dum firstOpen= {this.firstOpen}/>, image: PolyImage,  hoverImage: PolyImageHover},
        { id: 1, name: "Bilder", className: "popup2", show: true, nameShow: false, isActive: false, content: <Ordner firstOpen={this.firstOpen} getCode={this.getCode} getImages={this.getImages} className="tierFotoOrdner" getCatCount={this.getCatCount} getDogCount={this.getDogCount} saveTierCount={this.saveTierCount} />, image: FolderImage, hoverImage: FolderImageHover },
        //{ id: 3, name: "Spiel", className: "popup2", show: true, nameShow: false, isActive: false, content: <PolySketch/>, image: GameImage, hoverImage: GameImageHover },
        { id: 2, name: "Fotoautomat", className: "photoPopUp", show: true, nameShow: false, isActive: false, content: <PhotoBooth firstOpen={this.firstOpen} saveImage={this.savePhoto} />, image: PhotoAutomatImage, hoverImage: PhotoAutomatImageHover },
        { id: 3, name: "Skizzenblock", className: "sketchPopUp", show: true, nameShow: false, isActive: false, content: <Sketch2 firstOpen={this.firstOpen} getCode={this.getCode} saveImage={this.saveSketch} />, image: DrawImage, hoverImage: DrawImageHover },
        //{ id: 5, name: "Progress", className: "progress", show: true, nameShow: false, isActive: false, content: <Progress/>, image: ProgressImage, hoverImage: ProgressImageHover },
        { id: 4, name: "Einstellungen", className: "settingsPopup", show: true, nameShow: false, isActive: false, content: <Settings firstOpen={this.firstOpen} getBgColor={this.getBackgroundColor} />, image: SettingsIcon, hoverImage: SettingsIconHover },
        //{ id: 7, name: "Lupe", className: "popup2", show: true, nameShow: false, isActive: false, content: <Lupe firstOpen= {this.firstOpen}/>,  image: LupeImage,  hoverImage: LupeImageHover},
        { id: 5, name: "Notizen", className: "progress ", show: true, nameShow: true, isActive: false, content: <Notiz saveNotes={this.saveNotes} getNotes={this.getNotes} />, image: ProgressImage, hoverImage: ProgressImageHover },
        { id: 6, name: "Weisheiten Generator", className: "popup3 ", show: true, nameShow: false, isActive: false, content: <Generator firstOpen={this.firstOpen} saveNotes={this.saveNotes} getNotes={this.getNotes} />, image: GeneratorImage, hoverImage: GeneratorImageHover },
        { id: 7, name: "Kunst", className: "scrollDiv ", show: false, nameShow: true, isActive: false, content: <Kunst firstOpen={this.firstOpen} getCode={this.getCode} getImages={this.getSketches} className="kunstOrdner" />, image: KunstImage, hoverImage: KunstImageHover },
        { id: 8, name: "Fotos", className: "fotoScrollDiv ", show: false, nameShow: true, isActive: false, content: <Kunst firstOpen={this.firstOpen} getCode={this.getCode} getImages={this.getPhotos} className="fotoOrdner" />, image: PhotoImage, hoverImage: PhotoImageHover },
        //{ id: 7, name: "Quiz", className: "popup2", show: true, nameShow: false, isActive: false, content: <Quiz saveFunction={this.saveQuizData} loadFunction={this.getQuizData} loadImgNumber={this.getSubNumber} showHiddenProgram={this.showHiddenProgram}></Quiz>, image: QuizImage, hoverImage: QuizImageHover },
        { id: 9, name: "Ergebnis", className: "popup2 ", show: false, nameShow: true, isActive: false, content: 0, image: EndeImage, hoverImage: EndeImageHover },

      ],


    };
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleNoteClick = this.handleNoteClick.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.notificationOpen = this.notificationOpen.bind(this)
    this.clickSound = this.clickSound.bind(this)
    this.toggleNameChangePopup = this.toggleNameChangePopup.bind(this)
    this.saveSketch = this.saveSketch.bind(this)
    this.savePhoto = this.savePhoto.bind(this)
    this.getName = this.getName.bind(this);
    this.getSubNumber = this.getSubNumber.bind(this);
    this.showImages = this.showImages.bind(this);
    this.showKunst = this.showKunst.bind(this);
    this.catOrDog = this.catOrDog.bind(this);
    this.getCatCount = this.getCatCount.bind(this);
    this.getDogCount = this.getCatCount.bind(this);
    this.isEndQuizDone = this.isEndQuizDone.bind(this);
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now()
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1)
    console.log("start")
  }
  stopTimer() {
    clearInterval(this.timer)
    console.log("stop")
  }
  resetTimer() {
    this.setState({ time: 0 })
    console.log("reset")
  }


  componentDidMount() {
    this.setState({ subImgNumber: this.getRandomInt(3) })
  }

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

  handleLoginClick() {
    var input = document.getElementById('codeInput').value.trim();
    var input2 = document.getElementById('nameInput').value.trim();
    var n = preCodes.includes(input);
    // if (!input.length) { evt.preventDefault(); }
    if (!input.length || !input2.length || !n) return false;  // cancel click
    this.setState({

      code: (document.getElementById('codeInput').value),
      userName: (document.getElementById('nameInput').value),
      isLoggedIn: true

    })
    return true
  }

  handleNameChange() {
    var input2 = document.getElementById('nameInput2').value.trim();
    this.toggleNameChangePopup();
    // if (!input.length) { evt.preventDefault(); }
    if (!input2.length) return false;  // cancel click
    this.setState({
      userName: (document.getElementById('nameInput2').value),

    })
    return true



  }
  isEndQuizDone() {
    return this.state.endQuizDone
  }
  openEndQuiz = () => {
    if (this.state.endQuizDone == false) {
      this.setState({
        endQuizVisible: true
      })
    }
  }
  openAuswertung = () => {
    this.setState({
      auswertungVisible: true
    })
  }
  hideAuswertung = () => {
    this.setState({
      auswertungVisible: false
    })
  }
  handleNoteClick() {
    this.setState({
      notePosition: "-400px",
    })

  }
  notificationOpen() {
    this.setState({
      notePosition: "30px",
      mID: this.state.post.id
    })
    console.log("Mid: " + this.state.post.id)
  }
  clickSound() {
    let audio = new Audio(WarmTap)
    audio.play()
  }

  saveStartQuizData = (data) => {
    this.setState({
      //influencePoints: data.qID,
      quizProgress: data.qID,
      favColor: data.chosenColor,
      startSubliminal: true

    })
    this.startTimer()
    console.log("influencePoints: ", this.state.influencePoints)
  }

  catOrDog = () => {
    if (this.state.catCount > this.state.dogCount) {

      return "Katze"
    } else if (this.state.catCount < this.state.dogCount) {

      return "Hund"
    } else {
      return "mag keine Tiere"
    }


  }

  saveQuizData = (data) => {

    this.setState({
      influencePoints: data.influencePoints,
      //quizProgress: data.qID,
      auswertungVisible: true,
      endQuizVisible: false,
      endQuizDone: true

    })


    console.log("influencePoints: ", this.state.influencePoints)
  }
  getQuizData = () => {
    return this.state.quizProgress
  }

  getBackgroundColor = (color) => {
    this.setState({ currentBgColor: color })
  }

  saveTierCount = (data) => {
    this.setState({
      catCount: data.catCount,
      dogCount: data.dogCount
    })
  }
  getCatCount = () => {
    return this.state.catCount

  }
  getDogCount = () => {
    return this.state.dogCount

  }

  showImages = () => {
    let posts = [...this.state.post];
    let idx = posts.findIndex(obj => { return obj.name == 'Fotos' })
    let post = posts[idx]
    post.show = true;
    posts[idx] = post
    this.setState({
      post: posts
    })
  }


  showKunst = () => {
    let posts = [...this.state.post];
    let idx = posts.findIndex(obj => { return obj.name == 'Kunst' })
    let post = posts[idx]
    post.show = true;
    posts[idx] = post
    this.setState({
      post: posts
    })
  }
  getCode = () => {
    return this.state.code
  }


  saveNotes = (val) => {
    this.setState({ notes: val })
  }
  getNotes = () => {
    return this.state.notes
  }


  toggleNameChangePopup() {
    var popup = document.getElementById("nameChangePopup");
    if (this.state.settingsVisible == false) {
      popup.style.display = "flex";
      this.setState({ settingsVisible: true })
    } else {
      popup.style.display = "none";
      this.setState({ settingsVisible: false })
    }
  }

  saveSketch = (image) => {
    this.setState({
      sketchedImages: this.state.sketchedImages.concat(image)
    })
    this.showKunst()
  }
  savePhoto = (image) => {
    this.setState({
      takenPhotos: this.state.takenPhotos.concat(image)
    })
    this.showImages()
  }

  getSketches = () => {
    return this.state.sketchedImages
  }
  getPhotos = () => {
    return this.state.takenPhotos
  }

  importAll(r) {
    var test = r.keys().map(r);
    console.log(test)
    return test
  }

  firstOpen = (val) => {
    if (val == "ordner" && this.state.progressOrdner == false) {
      //this.setState(prevstate => ({ progressPoints: prevstate.progressPoints + 1, progressLupe: true }));
      this.setState(prevstate => ({ progressPoints: prevstate.progressPoints + 1, progressOrdner: true }));
    } else if (val == "sketch" && this.state.progressSketch == false) {
      this.setState(prevstate => ({ progressPoints: prevstate.progressPoints + 1, progressSketch: true }));
    } else if (val == "subliminal" && this.state.progressSubliminal == false) {
      this.setState(prevstate => ({ progressPoints: prevstate.progressPoints + 1, progressSubliminal: true }));
    } else if (val == "generator" && this.state.progressGenerator == false) {
      this.setState(prevstate => ({ progressPoints: prevstate.progressPoints + 1, progressGenerator: true }));
    } else if (val == "fotoOrdner" && this.state.progressFotoAlbum == false) {
      this.setState(prevstate => ({ progressPoints: prevstate.progressPoints + 1, progressFotoAlbum: true }));
    } else if (val == "kunstOrdner" && this.state.progressSkizzenAlbum == false) {
      this.setState(prevstate => ({ progressPoints: prevstate.progressPoints + 1, progressSkizzenAlbum: true }));
    } else {
      console.log("Progress:", this.state.progressPoints)
    }
    console.log("Progress:", this.state.progressPoints)

    //if(this.state.progressPoints >= 3){
    // const name = "Quiz"
    // this.showHiddenProgram(name)
    //}
  }

  showHiddenProgram = (val) => {

    let posts = [...this.state.post];
    let idx = posts.findIndex(obj => { return obj.name == val })
    let post = posts[idx]
    post.show = true;
    posts[idx] = post
    this.setState({
      post: posts
    })


  }

  getName = () => {
    return this.state.userName
  }
  getSubNumber = () => {
    return this.state.subImgNumber
  }
  getInfluencePoints = () => {
    return this.state.influencePoints
  }


  render() {
    const subimage = require('./img/sub-' + this.state.subImgNumber + '.svg')
    /*
        document.addEventListener('click', function () {
          clickSound();
        });*/




    const options = [
      'one', 'two', 'three'
    ];

    return (
      //<EasybaseProvider ebconfig={ebconfig}>

        <div className="Desktop" style={{ backgroundColor: this.state.currentBgColor }}>
          <Login login={this.state.isLoggedIn} onClick={this.handleLoginClick}></Login>
          <div className="topBar">
            <div className="logo"><img src={Logo}></img></div>
            <div></div>
            <div></div>
            <div class="dropdown-content">Name ändern</div>
            <div><div className="nameDisplay">{this.state.userName} <div class="dropdown-content" onClick={this.toggleNameChangePopup}>Name ändern</div></div></div>
            <div className="time">{this.state.wochentag}. {this.state.day}.{this.state.month}. <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Berlin'} /></div >
          </div>


          <div className="contentWrap">
            <div className="holder">

              <Programm getName={this.getName} data={this.state.post} onChange={this.notificationOpen} id={this.state.post.id} onClick={this.onSingleClickHandler} code={this.state.code} openEndQuiz={this.openEndQuiz} endQuizDone={this.isEndQuizDone} openAuswertung={this.openAuswertung} />

            </div>

          </div>
          {this.state.progressPoints >= 6 || this.state.time > 240000 ? <Entscheidung openEndQuiz={this.openEndQuiz} showHiddenProgram={this.showHiddenProgram} stopTimer={this.stopTimer} /> : null}

          {this.state.endQuizVisible == true ? <EndQuiz saveFunction={this.saveQuizData} loadFunction={this.getQuizData} loadImgNumber={this.getSubNumber} code={this.state.code} name={this.state.userName} influencePoints={this.state.influencePoints} sketchedImages={this.getSketches} katzoderhund={this.catOrDog} fotos={this.getPhotos} /> : null}
          {this.state.auswertungVisible == true ? <Auswertung influencePoints={this.getInfluencePoints} loadImgNumber={this.getSubNumber} showHiddenProgram={this.showHiddenProgram} hideAuswertung={this.hideAuswertung} /> : null}
          <StartQuiz name={this.state.userName} saveFunction={this.saveStartQuizData} getBgColor={this.getBackgroundColor} />

          {this.state.startSubliminal ? <Subliminal image={subimage} firstOpen={this.firstOpen}></Subliminal> : null}
          <Einleitung userName={this.state.userName} />
          <Draggable
            handle="#modalTopBar"
            bounds={{ top: -250, left: -500, right: 500, bottom: 250 }}>
            <div id="nameChangePopup">
              <div id="modalTopBar"><h1>Name ändern</h1>
                <button className="closeBtnEck" onClick={this.toggleNameChangePopup}></button>
              </div>
              <div className="content">

                <input autocomplete="off" id="nameInput2" type="text" placeholder="neuer Name"></input><br />
                <button id="nameChangeButton" onClick={this.handleNameChange}>bestätigen</button>

              </div>
            </div></Draggable>


        </div>
      //</EasybaseProvider>
    );
  }
}
function SavingData(props) {
  //const { Frame, sync } = useEasybase();

  const buttonStyle = {
    position: "absolute",
    left: 10,
    top: 10,
    fontSize: 21
  }

  const handleClick = () => {

    // Frame().push({
    //   code: props.code,
    //   name: props.name,
    //   datum: new Date().toISOString(),
    //   influencePoints: props.influencePoints,
    //   images: props.sketchedImages,
    // })

    // sync();
  }

}


/*
function GetUserData() {
  useEffect(() => {
    const { Frame, sync, configureFrame } = useEasybase();
  configureFrame({ tableName: "MindSpace", limit: 100 });
  sync();
}, []);

checkCode = () =>{
    const { Frame, sync, configureFrame } = useEasybase();
  Frame().map(ele => {
     if (ele.code == this.state.code) this.setState({
        influencePoints: ele.influencePoints,
        addData: true,
    })
  })}
  return 
}

*/

export default App;
