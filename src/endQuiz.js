import React from "react"
import styled, { ThemeConsumer } from 'styled-components'
import "./endquiz.css"
import SpiraleImage from './img/OSCILL-78.svg'
import BoxImage from './img/OSCILL-79.svg'
import { EasybaseProvider, useEasybase } from 'easybase-react';
import ebconfig from './ebconfig';
let fragen = ["Was ist die Durchschnittstemperatur in Deutschland?", "Wähle eine Form aus.", "Was magst du lieber?", "Wähle.", "Wähle eine Form aus."]
let antworten1 = ["0", "antwort1", "Sport machen", "Banane", "antwort7"]
let antworten2 = ["0", "antwort2", "Auf der Couch entspannen", "Apfel", "antwort8"]


class EndQuiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true,
            subNumber: this.props.loadImgNumber(),
            subNumber2: "",
            influencePoints: this.props.influencePoints,
            katzoderhund: JSON.stringify(this.props.katzoderhund()),
            sketches: this.props.sketchedImages(),
            qID: 0,
            frage: fragen[0],
            content1: antworten1[0],
            content2: antworten2[0],
            frame: {},
            sliderValue: 1

        }
        this.handleClick = this.handleClick.bind(this)
        this.endEndQuiz = this.endEndQuiz.bind(this)
        this.handleSliderChange = this.handleSliderChange.bind(this)


    }
    handleClick(event) {
        if (this.state.qID == 1) {
            if (this.state.sliderValue > 14) {
                this.setState(prevstate => ({
                    influencePoints: prevstate.influencePoints + 1
                }));
            }
        }
        if (this.state.qID == 2) {
            if (event.target.id == 1) {
                this.setState(prevstate => ({
                    influencePoints: prevstate.influencePoints + 1
                }));
            }
        }
        if (this.state.qID == 3) {
            console.log(this.state.katzoderhund)
            if (event.target.id == 1 && this.state.katzoderhund.includes("Hund") || event.target.id == 2 && this.state.katzoderhund.includes("Katze")) {
                console.log("katzen oder hundemensch = influenced")
                this.setState(prevstate => ({
                    influencePoints: prevstate.influencePoints + 1
                }));
            }
        }
        if (this.state.qID == 4) {
            if (event.target.id == 1) {
                this.setState(prevstate => ({
                    influencePoints: prevstate.influencePoints + 1
                }));
            }

        }
        if (this.state.qID == 5) {
            if (event.target.id == 2) {
                this.setState(prevstate => ({
                    influencePoints: prevstate.influencePoints + 1
                }));
            }

        }
        if (this.state.qID == 6) {

            if (this.state.qID >= fragen.length - 1) {
                const name = "Ergebnis"

                this.props.showHiddenProgram(name)
            }
        }

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

    handleSliderChange(event) {

        this.setState({ sliderValue: event.target.value });

    }
    endEndQuiz() {
        this.props.saveFunction(this.state);
    }



    saveClick() {
        const saveData = {
            name: this.props.name,
            code: this.props.code,
            influencePoints: this.state.influencePoints,
            images: JSON.stringify(this.state.sketches),
            fotos: JSON.stringify(this.props.fotos()),
            catordog: this.state.katzoderhund,
            //end: this.props.saveFunction,
            datum: new Date().toISOString(),
        }
        //this.props.saveFunction(this.state);
        return saveData;
        //

    }

    render() {
        const Einleitung = styled.div`
        color: #000000;
        font-size: 26pt;
        margin: 0 1em;
        padding: 0.25em 1em;
        text-align: center;
        letter-spacing: -1px;
        line-height: 40pt;
}

    `

        const Frage = styled.div`
        color: #000000;
        font-size: 26pt;
        margin: 0 1em;
        padding: 0.25em 1em;
        text-align: center;
        letter-spacing: -1px;
        line-height: 22pt;
}

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
            background-color: #eef2f3
            overflow: hidden;
            width: 100%;
            height: 100%;

        `

        let quizNotOver = Boolean(this.state.qID < fragen.length + 1);

        if (this.state.visible) {
            return (<div className="fullScreen">
                <div className="box">
                    {(() => {
                        if (this.state.qID == 0) {
                            return (<QuizStyle>
                                <div className="item-frage"><Einleitung>Bevor ich dir verrate, worum es in diesem Experiment geht, würde ich dich bitten einige Fragen zu beantworten.</Einleitung></div>
                                <div className="item-a"><button className="btnSave" id="1" onClick={this.handleClick}>alles klar</button></div>

                            </QuizStyle>
                            )
                        } else if (this.state.qID == 1) {
                            console.log(this.state.content)
                            return (<div><div className="item-frage"><Frage>{this.state.frage}</Frage></div>
                                <div class="slidecontainer">
                                    <h1><span>{this.state.sliderValue}°C</span></h1>
                                    <input type="range" min="-5" max="40" value={this.state.sliderValue} class="slider" id="myRange" onChange={this.handleSliderChange} /></div>


                                <div className="item-a"><button className="btnSave" id="1" onClick={this.handleClick}>weiter</button></div>

                            </div>
                            )

                        } else if (this.state.qID == 2) {
                            return (<QuizStyle>
                                <div className="item-frage"><Frage>{this.state.frage}</Frage></div>
                                <div className="item-a" onClick={this.handleClick}><img id="1" src={require('./img/sub-' + this.state.subNumber + '.svg').default}></img></div>
                                <div className="item-b" onClick={this.handleClick}><img id="2" src={require('./img/sub-' + this.state.subNumber2 + '.svg').default}></img></div>
                            </QuizStyle>)

                        }
                        else if (this.state.qID == 3) {
                            return (<QuizStyle>
                                <div className="item-frage"><Frage>{this.state.frage}</Frage></div>
                                <div className="item-a"><button className="rglBtn" id="1" onClick={this.handleClick}>{this.state.content1}</button></div>
                                <div className="item-b"><button className="rglBtn" id="2" onClick={this.handleClick}>{this.state.content2}</button></div>
                            </QuizStyle>)

                        } else if (this.state.qID == 4) {
                            return (<QuizStyle>
                                <div className="item-frage"><Frage>{this.state.frage}</Frage></div>
                                <div className="item-a"><button className="rglBtn" id="1" onClick={this.handleClick}>{this.state.content1}</button></div>
                                <div className="item-b"><button className="rglBtn" id="2" onClick={this.handleClick}>{this.state.content2}</button></div>
                            </QuizStyle>)

                        } else if (this.state.qID == 5) {
                            return (<QuizStyle>
                                <div className="item-frage"><Frage>{this.state.frage}</Frage></div>
                                <div className="item-a" onClick={this.handleClick}><img id="1" src={BoxImage}></img></div>
                                <div className="item-b" onClick={this.handleClick}><img id="2" src={SpiraleImage}></img></div>
                            </QuizStyle>)

                        } else if (this.state.qID == 6) {


                            return (<QuizStyle><div className="item-end">Danke, {this.props.name}.
                                Das Experiment ist vorbei. Jetzt verrate ich dir, worum es in dem Experiment geht.
                                <div className="item-b"><SavingData saveFunction={this.endEndQuiz} data={this.saveClick()} /> </div>
                            </div></QuizStyle>);

                        }
                        // <EasybaseProvider ebconfig={ebconfig}><SavingData name={this.props.name} code={this.props.code} influencePoints={this.state.influencePoints} images={this.state.sketches} fotos={this.props.fotos} katzoderhund={this.state.katzoderhund} end={this.props.saveFunction} /></EasybaseProvider>
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
        console.log("props data", props.data)
        Frame().push(
            props.data
            //catOrDog: props.katzoderhund,
            //fotos: props.fotos()

        )

        sync();
        props.saveFunction()
    }

    return <button className="btnSave" onClick={handleClick}>Ok</button>

}
export default EndQuiz