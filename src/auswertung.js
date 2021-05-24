import React from 'react'
import { ThemeConsumer } from 'styled-components'
import './entscheidung.css'
import EndeImage from './img/mindspace-48.svg'
import LupeImage from './img/lupe.svg'
import FederImage from './img/feder.svg'
import ToDoImage from './img/todo.svg'
import SteinImage from './img/stein.svg'
import PendelImage from './img/pendel.svg'

class Auswertung extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true,
            auswertungVisible: true,
            influencePoints: this.props.influencePoints(),
            startAuswertung: true,
        }

    }
    handleClick = (event) => {
        console.log("target id" + event.target.id)
        if (event.target.id == 1) {
            this.props.showHiddenProgram("Ergebnis")
            this.props.hideAuswertung()
        } else if (event.target.id == 2) {
            window.location.reload()
        } else if (event.target.id == 3) {
            this.setState({ auswertungVisible: false })
        } else if (event.target.id == 4) {
            this.setState({ auswertungVisible: true })
        } else if (event.target.id == 5) {
            this.setState({ startAuswertung: false })
        }
    }
    bildErgebnis() {
        if (this.state.influencePoints == 0) {
            return PendelImage
        } else if (this.state.influencePoints == 1 || this.state.influencePoints == 2) {
            return LupeImage
        } else if (this.state.influencePoints == 3) {
            return SteinImage
        } else if (this.state.influencePoints == 4) {
            return ToDoImage
        } else if (this.state.influencePoints == 5) {
            return FederImage
        }
    }
    titelErgebnis() {
        if (this.state.influencePoints == 0) {
            return "Das Pendel"
        } else if (this.state.influencePoints == 1 || this.state.influencePoints == 2) {
            return "Die Lupe"
        } else if (this.state.influencePoints == 3) {
            return "Der Stein"
        } else if (this.state.influencePoints == 4) {
            return "Die To Do Liste"
        } else if (this.state.influencePoints == 5) {
            return "Die Feder"
        }
    }
    textErgebnis() {
        if (this.state.influencePoints == 0) {
            return "Du wirst beeinflusst? Nein, Du beeinflusst! Du durchschaust nicht nur jeden Trick, du trickst den Manipulator aus. Sehr gut!"
        } else if (this.state.influencePoints == 1 || this.state.influencePoints == 2) {
            return "Wie ein Detektiv durschschaust du fast jeden Trick und bist nur schwer beeinflussbar. Weiter so!"
        } else if (this.state.influencePoints == 3) {
            return "Du bist beständig und dich kann man nicht so leicht überzeugen. Auf ausgeklügelte Tricks fällst aber auch du rein."
        } else if (this.state.influencePoints == 4) {
            return "Du befolgst gerne Regeln und Anweisungen. Immer dem Plan zu folgen kann auch dazu führen, dass man dich leichter lenken kann."
        } else if (this.state.influencePoints == 5) {
            return "Wie eine Feder im Wind lässt du dich treiben. Du bist eher vertäumt und lässt dich bewusst und unbewusst leiten."
        }
    }
    textEinstufung() {
        if (this.state.influencePoints == 0) {
            return "gar nicht"
        } else if (this.state.influencePoints == 1 || this.state.influencePoints == 2) {
            return "kaum"
        } else if (this.state.influencePoints == 3) {
            return "moderat"
        } else if (this.state.influencePoints == 4) {
            return "ziemlich"
        } else if (this.state.influencePoints == 5) {
            return "zu 100%"
        }
    }
    render() {
        if (this.state.visible && this.state.auswertungVisible && this.state.startAuswertung) {
            return (
                <div className="fullScreen">
                    <div className="auswertungBox">
                        <div className="erklärung">
                            <h1>Worum geht es in diesem Experiment?</h1>
                            Der MindSpace hat versucht dich zu beeinflussen. Es ging darum, verschiedene Manipulationsmechanismen anzuwenden, um deine Entscheidungen zu lenken.
                            Daten über deine Entscheidungen wurden gesammelt und ausgewertet. Das Ziel dieses Experiments ist zum einen den Teilnehmer:innen die deine eigene Beeinflussbarkeit bewusster zu machen und zum anderen das Testen von Manipulationsmechanismen.
                            Ob der MindSpace geschafft hat dich zu beeinflussen erfährst du in deiner persönlichen Auswertung.
                        </div><button id="5" className="btnAus" onClick={this.handleClick}>Zu deiner Auswertung</button>

                    </div>
                </div>
            )
        }
        else if (this.state.visible && this.state.auswertungVisible && this.state.startAuswertung == false) {
            return (
                <div className="fullScreen">
                    <div className="auswertungBox">
                        <h1>Auswertung</h1>
                        <img className="resultImage" src={this.bildErgebnis()}></img><br></br>
                        Dein Ergebnis: <h1>{this.titelErgebnis()}</h1>
                        <p>{this.textErgebnis()}</p>


                       Dein Ergebnis bedeutet, dass du {this.textEinstufung()} beeinflussbar bist.


                        <div className="erster">
                            <button id="1" className="endBtn" onClick={this.handleClick}>Zurück in den Mindspace</button></div>
                        <div className="zweiter">
                            <button id="2" className="endBtn" onClick={this.handleClick}>Experiment verlassen</button></div>

                        <div className="dritter">
                            <button id="3" className="endBtn" onClick={this.handleClick}>Wie lief die Beeinflussung ab?</button></div>
                    </div>


                </div >
            )
        } else if (this.state.visible && this.state.auswertungVisible == false) {
            return (<div className="fullScreen">
                <div className="auswertungBox">
                    <h1>Die Manipulation</h1>
                    <button id="4" className="endBtn" onClick={this.handleClick}>Zurück zum Ergebnis</button>

                </div></div>
            )
        } else return null
    }
}

export default Auswertung