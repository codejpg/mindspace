import React from 'react'
import { ThemeConsumer } from 'styled-components'
import './entscheidung.css'
import EndeImage from './img/mindspace-48.svg'

class Entscheidung extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }

    }
    handleClick = (event) => {
        console.log("target id" + event.target.id)
        if (event.target.id == 1) {
            this.props.showHiddenProgram("Ergebnis")
            this.setState({ visible: false })
        } else if (event.target.id == 2) {
            this.props.openEndQuiz()
            this.setState({ visible: false })
        }
    }
    render() {
        if (this.state.visible) {
            return (
                <div className="fullScreenAbfrage">
                    <div className="popUpFrage">
                        <h1>Ich habe genug Daten für eine Auswertung.</h1>
                     Du kannst das Experiment beenden und erfahren worum es ging oder du kannst noch ein wenig Zeit im MindSpace verbringen.
                    Wenn du dich erstmal für's bleiben entscheidest, kannst du das Experiment jederzeit mit einem Klick auf dieses neue Desktop-Symbol beenden:
                    <br></br><img src={EndeImage}></img>
                        <div className="erster">
                            <button id="1" className="endBtn" onClick={this.handleClick}>Im MindSpace bleiben</button></div>
                        <div className="zweiter">
                            <button id="2" className="endBtn" onClick={this.handleClick}>Experiment beenden</button></div>
                    </div>

                </div>
            )
        } else return null
    }
}

export default Entscheidung