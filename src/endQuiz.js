import React from "react"
import styled, { ThemeConsumer } from 'styled-components'
import "./endquiz.css"
import { EasybaseProvider, useEasybase } from 'easybase-react';
import ebconfig from './ebconfig';
let fragen = ["Wie gehts dir?", "Wähle ein Form aus.", "Wähle eine Farbe aus.", "Was ist die Durchschnittsthemperatur in Deutschland?", "frage4"]
let antworten1 = ["0", "antwort1", "antwort3", "antwort5", "antwort7"]
let antworten2 = ["0", "antwort2", "antwort4", "antwort6", "antwort8"]


class EndQuiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true,
            subNumber: this.props.loadImgNumber(),
            subNumber2: "",
            influencePoints: this.props.influencePoints,
            katzoderhund: this.props.katzoderhund,
            sketches: this.props.sketchedImages(),
            qID: 0,
            frage: fragen[0],
            content1: antworten1[0],
            content2: antworten2[0],

        }
        this.handleClick = this.handleClick.bind(this)


    }
    handleClick(event) {
        this.setState({
            qID: this.state.qID + 1,
            aID: event.target.id,
            frage: fragen[this.state.qID],
            content1: antworten1[this.state.qID],
            content2: antworten2[this.state.qID],
        })
        console.log("Q ID: " + this.state.qID)
    }
    componentWillUnmount() {
        this.props.saveFunction(this.state);
        if (this.state.qID >= fragen.length - 1) {
            const name = "Ergebnis"
            this.props.showHiddenProgram(name)
        }
    }

    componentDidMount() {
        let newNum = this.getRandomInt(3);
        while (newNum == this.state.subNumber) {
            newNum = this.getRandomInt(3);
        }
        this.setState({ subNumber2: newNum })
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    handleSliderChange() {
        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;

        slider.oninput = function () {
            output.innerHTML = this.value;
        }
    }


    render() {

        const Button = styled.button`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #00ffff;
        color: #00ffff;
        margin: 0 1em;
        font-size: 40px;
        padding: 0.25em 1em;

      
    `
        const Button2 = styled.button`
        background: #00ffff;
        color: white;
        border-radius: 3px;
        border: 2px solid #00ffff;
        font-size: 40px;
        margin: 0 1em;
        padding: 0.25em 1em;

      }
    `
        const Frage = styled.div`
        color: #000000;
        font-size: 30pt;
        margin: 0 1em;
        padding: 0.25em 1em;

    `
        const QuizStyle = styled.div`
            position: absolute;
            display: grid;
            grid-template-columns: auto auto auto;
            grid-template-rows: auto auto auto; 
            column-gap: 10px;
            row-gap: 15px;
            top: 0px;
            bottom: 0;
            left: 0;
            right:0;
            color: #000000;
            background-color: #dedddc;
            overflow: hidden;
            width: 100%;
            height: 100%;

        `

        let quizNotOver = Boolean(this.state.qID < fragen.length + 1);

        if (this.state.visible) {
            return (<div className="fullScreen">
                <div className="box">
                    {(() => {
                        if (this.state.qID <= 1) {
                            console.log(this.state.content)
                            return (<div><div className="item-frage"><Frage>{this.state.frage}</Frage></div>
                                <div class="slidecontainer">
                                    <input type="range" min="1" max="100" value="50" class="slider" id="myRange" onChange={this.handleSliderChange} /></div>
                                <p>Value: <span id="demo"></span></p>
                                <Button id="1" onClick={this.handleClick}>{this.state.content1}</Button>
                            </div>
                            )

                        } else if (this.state.qID == 2) {
                            return (<QuizStyle>
                                <div className="item-frage"><Frage>{this.state.frage}</Frage></div>
                                <div className="item-a" onClick={this.handleClick}><img src={require('./img/sub-' + this.state.subNumber + '.svg').default}></img></div>
                                <div className="item-b" onClick={this.handleClick}><img src={require('./img/sub-' + this.state.subNumber2 + '.svg').default}></img></div>
                            </QuizStyle>)

                        }
                        else if (this.state.qID == 3) {
                            return (<QuizStyle>
                                <div className="item-frage"><Frage>{this.state.frage}</Frage></div>
                                <div className="item-a"><Button id="1" onClick={this.handleClick}>{this.state.content1}</Button></div>
                                <div className="item-b"><Button2 id="2" onClick={this.handleClick}>{this.state.content2}</Button2></div>
                            </QuizStyle>)

                        } else if (this.state.qID == 4) {


                            return (<QuizStyle><div className="item-end">Danke, {this.props.name}.
                                Das Experiment ist vorbei. Jetzt verrate ich dir, worum es in dem Experiment geht.
                                <div className="item-b">  <EasybaseProvider ebconfig={ebconfig}><SavingData name={this.props.name} code={this.props.code} influencePoints={this.state.influencePoints} images={this.state.sketches} fotos={this.props.fotos} katzoderhund={this.state.katzoderhund} />
                                </EasybaseProvider></div>
                            </div></QuizStyle>);

                        }

                    })()}

                </div>
            </div>

            )
        } else {
            return (null);
        }
    }
}



function SavingData(props) {
    const { Frame, sync } = useEasybase();



    const handleClick = () => {

        Frame().push({
            code: props.code,
            name: props.name,
            datum: new Date().toISOString(),
            influencePoints: props.influencePoints,
            images: props.images,
            //catOrDog: props.katzoderhund,
            //fotos: props.fotos()

        })

        sync();

    }

    return <button className="btn" onClick={handleClick}>Daten speichern</button>

}
export default EndQuiz