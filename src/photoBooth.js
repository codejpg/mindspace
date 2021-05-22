
import { useEventCallback } from '@material-ui/core';
import React from 'react'
import Sketch from 'react-p5'
import SpeichernIcon from './img/mindspace-56.svg'
import LoeschenIcon from './img/mindspace-57.svg'
import AufnehmenIcon from './img/mindspace-58.svg'
let shutter, pg, video;


class PhotoBooth extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({

            lastSnapShot: {},

            timer: 0,
            showLatestPhoto: false,
            font: {},
            clear: false,
            decision: false,
            filter: 1


        })
        //this.speichern = this.speichern.bind(this);
    }

    componentDidMount(p5) {
        this.props.firstOpen(this.state.name)
        // this.setState({
        //   font: p5.loadFont('CourierNewBold.ttf')
        // })
    }
    filterer = (event) => {
        const id = event.target.id;
        this.setState({
            filter: id
        })
    }

    render() {

        const setup = (p5, canvasParentRef) => {

            this.state.cnv = p5.createCanvas(640, 480).parent(canvasParentRef)

            p5.pixelDensity(1);
            this.state.cnv.id('canvas');

            video = p5.createCapture(p5.VIDEO)

            video.size(640, 480);
            video.hide();
            //shutter = p4.loadSound('shutter.wav');

            pg = p5.createGraphics(p5.width, p5.height);

            pg.textFont(this.state.font);
            pg.textSize(32);
            pg.textAlign(p5.CENTER);

        }


        const draw = p5 => {
            p5.background(122);
            p5.image(video, 0, 0);

            //Show the last image taken for a short period
            if (this.state.showLatestPhoto) {
                p5.image(pg, 0, 0);

            } else {
                p5.background(122);
                p5.image(video, 0, 0);
            }
            if (this.state.filter == 1) {
                p5.filter(p5.POSTERIZE, 10);
                p5.filter(p5.THRESHOLD);
            } else if (this.state.filter == 2) {
                p5.tint(254, 250, 202); //sepia
                p5.filter(p5.POSTERIZE, 20);
            }
            else if (this.state.filter == 3) {
                p5.filter(p5.POSTERIZE, 30);
                p5.tint(150, 0, 0);  //goth 
            }
            else if (this.state.filter == 4) {

                p5.tint(255, 25, 255);
                p5.filter(p5.POSTERIZE, 7);//posterize
            }
            else if (this.state.filter == 5) {
                p5.tint(255, 255, 255);
                p5.filter(p5.POSTERIZE, 20);
                p5.filter(p5.INVERT);
            }


            //p5.filter(p5.ERODE)
            //p5.filter(p5.THRESHOLD);



            //Flash effect
            /*
            if (this.state.timer < 5) {
                p5.background(this.state.timer * 25 + 130);
            } else if (this.state.timer < 8) {
                p5.background(255);
            }*/

            if (this.state.decision == true) {
                this.setState({
                    showLatestPhoto: false
                })

            }

            this.setState(prevstate => ({ timer: prevstate.timer + 1 }));
            console.log(this.state.timer);

        }


        const aufnehmen = (p5, event) => {
            //save('myCanvas.jpg');
            //shutter.play();

            pg.image(video, 0, 0);

            //pg.filter(p5.BLUR, 2); //Optional blur
            pg.fill(0);
            pg.text("Hello world", p5.width / 2, p5.height / 3);
            this.setState({
                timer: 0,
                showLatestPhoto: true,
                decision: false
            })
        }


        const takePircture = (p5, event) => {


        }
        const speichern = (p5) => {
            //var code = this.props.getCode();
            var canvas = document.getElementById("canvas");
            const base64Canvas = canvas.toDataURL("image/jpeg").split(';base64,')[1];

            this.props.saveImage(base64Canvas);
            this.setState({
                clear: true,
                decision: true
            })

        }

        const loeschen = (p5) => {
            this.setState({
                clear: true,
                decision: true
            })
        }

        return (
            <div>
                <Sketch setup={setup} draw={draw} />
                <img className="aufnehmenButton" src={AufnehmenIcon} onClick={aufnehmen} />

                <img className="löschenButton" src={LoeschenIcon} onClick={loeschen} />
                <img className="saveButton" src={SpeichernIcon} onClick={speichern} />
                <div className="filterEffekte">
                    <b>Filter:</b>
                    <div id="1" onClick={this.filterer}>threshold</div>
                    <div id="2" onClick={this.filterer}>sepia</div>
                    <div id="3" onClick={this.filterer}>goth tint</div>
                    <div id="4" onClick={this.filterer}>posterize</div>
                    <div id="5" onClick={this.filterer}>invert</div>

                </div>

            </div>
        )
    } x
}

export default PhotoBooth
