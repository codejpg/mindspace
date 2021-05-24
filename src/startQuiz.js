import React from "react"
import styled, { ThemeConsumer } from 'styled-components'
import "./endquiz.css"
let fragen = ["Wie gehts dir?", "Wähle ein Form aus.", "Wähle eine Farbe aus.", "Was ist die Durchschnittsthemperatur in Deutschland?", "frage4"]
let antworten1 = ["0", "antwort1", "antwort3", "antwort5", "antwort7"]
let antworten2 = ["0", "antwort2", "antwort4", "antwort6", "antwort8"]


class StartQuiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true,
            qID: 3,
            frage: fragen[1],
            content1: antworten1[1],
            content2: antworten2[1],
            over: false,
            chosenColor: 0,
            catOrDog: "none",
            colors: [
                { id: 1, bgColor: "#eef2f3" },
                { id: 2, bgColor: "#ffe7a0" },
                { id: 3, bgColor: "#ffbeca" },
                { id: 4, bgColor: "#0096d3" },
                { id: 5, bgColor: "#dedddc" },
                { id: 6, bgColor: "#afdcdc" },
                { id: 7, bgColor: "#ffd900" },
                { id: 8, bgColor: "#90bc9c" }
            ],
        }
        this.handleClick = this.handleClick.bind(this)
        this.finish = this.finish.bind(this)

    }
    handleClick(event) {

        if (this.state.qID <= 1) {
            const id = event.target.id;
            this.setState({
                catOrDog: id
            })

        }
        if (this.state.qID == 3) {
            console.log("yes")
            const id = event.target.id;
            this.props.getBgColor(this.state.colors[id].bgColor)
            this.finish()
        }
        if (this.state.qID == 6) {
            const id = event.target.id;
            this.setState({
                chosenColor: id
            })

        }

        this.setState({
            qID: this.state.qID + 1,

            frage: fragen[this.state.qID],
            content1: antworten1[this.state.qID],
            content2: antworten2[this.state.qID],
            over: this.state.qID > fragen.length - 1,
        })

        console.log("Q ID: " + this.state.qID)
    }
    componentWillUnmount() {
        this.props.saveFunction(this.state);
    }

    finish() {
        this.setState({ visible: false })
        this.props.saveFunction(this.state);

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
            background-color: #eef2f3;
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

                            return (<QuizStyle>
                                <div className="item-frage"><Frage>Was magst du lieber?</Frage></div>
                                <div className="item-a"><button className="rglBtn" id="Hunde" onClick={this.handleClick} value={"Hunde"}>Hunde</button></div>
                                <div className="item-b"><button className="rglBtn" id="Katzen" onClick={this.handleClick} value={"Katzen"}>Katzen</button></div>
                            </QuizStyle>
                            )

                        } else if (this.state.qID == 2) {
                            return (<QuizStyle>
                                <div className="item-frage"><Frage>Was magst du lieber?</Frage></div>
                                <div className="item-a"><button className="rglBtn" id="1" onClick={this.handleClick}>Gedichte</button></div>
                                <div className="item-b"><button className="rglBtn" id="2" onClick={this.handleClick}>Filme</button></div>
                            </QuizStyle>)

                        }
                        else if (this.state.qID == 3) {
                            return (<QuizStyle>
                                <div className="item-frage"><Frage>Wähle eine Farbe aus</Frage></div>
                                {this.state.colors.map((data, key) => (
                                    <div id={key} className="colorDiv" onClick={this.handleClick} style={{ background: data.bgColor }}></div>
                                ))}
                            </QuizStyle>)
                        } else if (this.state.qID == 6) {
                            return (<QuizStyle>
                                <div className="item-frage"><Frage>Wähle eine Farbe aus</Frage></div>
                                <div id="grau" className="colorDiv" onClick={this.handleClick}></div>
                                <div id="hellgelb" className="colorDiv" onClick={this.handleClick}></div>
                                <div id="rosa" className="colorDiv" onClick={this.handleClick}></div>
                                <div id="schwarz" className="colorDiv" onClick={this.handleClick}></div>
                                <div id="blau" className="colorDiv" onClick={this.handleClick}></div>
                                <div id="rot" className="colorDiv" onClick={this.handleClick}></div>
                                <div id="grün" className="colorDiv" onClick={this.handleClick}></div>
                                <div id="gelb" className="colorDiv" onClick={this.handleClick}></div>
                            </QuizStyle>)


                        } else if (this.state.qID == 4) {
                            return (<div className="fullScreenEinleitung">
                                <div className="welcomeBox">
                                    <p>Super, jetzt gehts los!</p>
                                    <button id="startButton" onClick={this.finish}>Start</button>
                                </div> </div>);
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

export default StartQuiz