import React from 'react'
import { ThemeConsumer } from 'styled-components'
import './entscheidung.css'
import EndeImage from './img/mindspace-48.svg'
import LupeImage from './img/lupe.svg'
import FederImage from './img/feder.svg'
import ToDoImage from './img/todo.svg'
import SteinImage from './img/stein.svg'
import PendelImage from './img/pendel.svg'
import SpiraleImage from './img/OSCILL-78.svg'
import BoxImage from './img/OSCILL-79.svg'
import KatzeIcon from "./img/katz.svg"
import HundIcon from "./img/hund.svg"
import HoverImage from 'react-hover-image/build'

class Auswertung extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true,
            auswertungVisible: true,
            influencePoints: this.props.influencePoints(),
            startAuswertung: true,
            subNumber: this.props.loadImgNumber(),
            subNummer2: "",
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
        } else if (this.state.influencePoints == 1) {
            return LupeImage
        } else if (this.state.influencePoints == 3 || this.state.influencePoints == 2) {
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
        } else if (this.state.influencePoints == 1) {
            return "Die Lupe"
        } else if (this.state.influencePoints == 3 || this.state.influencePoints == 2) {
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
        } else if (this.state.influencePoints == 1) {
            return "Wie ein Detektiv durchschaust du fast jeden Trick und bist nur schwer beeinflussbar. Weiter so!"
        } else if (this.state.influencePoints == 3 || this.state.influencePoints == 2) {
            return "Du bist beständig und dich kann man nicht so leicht überzeugen. Auf ausgeklügelte Tricks fällst aber auch du rein."
        } else if (this.state.influencePoints == 4) {
            return "Du befolgst gerne Regeln und Anweisungen. Immer dem Plan zu folgen kann auch dazu führen, dass man dich leichter lenken kann."
        } else if (this.state.influencePoints == 5) {
            return "Wie eine Feder im Wind lässt du dich treiben. Du bist eher vertäumt und lässt dich bewusst oder unbewusst leiten."
        }
    }
    textEinstufung() {
        if (this.state.influencePoints == 0) {
            return "gar nicht"
        } else if (this.state.influencePoints == 1) {
            return "kaum"
        } else if (this.state.influencePoints == 3 || this.state.influencePoints == 2) {
            return "moderat"
        } else if (this.state.influencePoints == 4) {
            return "ziemlich"
        } else if (this.state.influencePoints == 5) {
            return "zu 100%"
        }
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    componentDidMount() {
        let newNum = this.getRandomInt(3);
        while (newNum == this.state.subNumber) {
            newNum = this.getRandomInt(3);
        }
        this.setState({ subNumber2: newNum })

    }
    render() {
        if (this.state.visible && this.state.auswertungVisible && this.state.startAuswertung) {
            return (
                <div className="fullScreen">
                    <div className="auswertungBox">
                        <div className="erklärung">
                            <h1>Worum geht es in diesem Experiment?</h1>
                            Der MindSpace hat versucht dich zu beeinflussen. Verschiedene Manipulationsmechanismen wurden eingesetzt, um deine Entscheidungen zu lenken.
                            Daten über deine Entscheidungen wurden gesammelt und ausgewertet. Das Ziel dieses Experiments ist zum einen den Teilnehmer:innen die eigene Beeinflussbarkeit bewusster zu machen und zum anderen eine Erkenntnisgewinnung über die Wirksamkeit von gezielt eingesetzten Manipulationsmechanismen.
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
                        <p >Dein Ergebnis:</p> <h1>{this.titelErgebnis()}</h1>
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
                <div className="manipulationBox">
                    <h1>Die Manipulation</h1>
                    <div className="innerDiv">

                        Wie du schon erfahren hast, geht es im MindSpace dein Verhalten zu beeinflussen. Wie genau das abgelaufen ist erkläre ich dir hier.

                        <h2>1. Subliminal Messaging</h2>
                        <HoverImage className="manipulationImg" id="1" src={require('./img/sub-' + this.state.subNumber + '.svg').default} hoverSrc={require('./img/sub-' + this.state.subNumber2 + '.svg').default} /><br></br>
                        Vielleicht hast du am Anfang des Experiments ein Aufflackern bemerkt. Das war eine subliminale Beeinflussung, also ein visueller Trigger, der dich unterbewusst an eine Form gewöhnen sollte, der die Wahrscheinlichkeit erhöht, dass du diese auswählst.

                        <h2>2. Assoziation</h2>
                        Die Weisheiten, die der Generator für dich erstellt hat, enthalten Begriffe die Assoziationen auslösen sollen, die eine Entscheidung beeinflussen können. Die Assoziationen, die ausgelöst werden sollten, waren "warm" und "gelb", ohne diese Begriffe direkt zu nennen. So solltest du bei deiner Wahl der Durchschnittstemperatur zu einer wärmeren Temperatur tendieren und bei der Wahl zwischen Drachenfrucht und Honigmelone die Honigmelone auswählen.

                        <h2>3. Priming</h2>
                        <HoverImage className="manipulationImg" src={SpiraleImage} hoverSrc={BoxImage} /><br></br>

                        Neben dir auf dem Tisch steht ein Oszilloskop. Das ist ein Gerät, das elektronische Spannungen und ihren zeitlichen Verlauf auf dem Bildschirm sichtbar macht. Der Ablauf von Formen sollte dich darauf vorbereiten, die Spriale auszuwählen. Das ist ein visueller Trigger, der im idealfall unterbewusst wahrgenommen wird und dich dazu tendieren lässt, diese Form auszuwählen.
                           <h2>4. Hund oder Katze?</h2>
                        <HoverImage className="manipulationImg" src={HundIcon} hoverSrc={KatzeIcon} /><br></br>

                        Auf Social Media Plattformen entsteht bei der Nutzung ein Datenprofil, das versucht dein Verhalten vorherzusagen. Deshalb bekommst du dort Inhalte angezeigt, die deinen Interessen entsprechen. Du konntest die Katzen- und Hundebilder ansehen. Ich wollte herausfinden, ob du Katzen oder Hunde bevorzugst. Du wurdest in ein Persönlichkeitsprofil eingeteilt, das Hunde- bzw. Katzenmenschen entspricht. Deshalb wusste ich, ob du lieber entspannst oder in Bewegung bist.
                    </div>
                    <button id="4" className="btnMani" onClick={this.handleClick}>Zurück zum Ergebnis</button>

                </div></div>
            )
        } else return null
    }
}

export default Auswertung