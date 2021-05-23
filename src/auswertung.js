import React from 'react'
import { ThemeConsumer } from 'styled-components'
import './entscheidung.css'
import EndeImage from './img/mindspace-48.svg'

class Auswertung extends React.Component {
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
            window.location.reload()
        }
    }
    render() {
        if (this.state.visible) {
            return (
                <div className="fullScreen">
                    <div className="auswertungBox">
                        <h1>Ergebnis</h1>
                        Du hast in {this.props.influencePoints()} von 5 Fällen die Entscheidung getroffen, die du treffen solltest
                        <div className="erster">
                            <button id="1" className="endBtn" onClick={this.handleClick}>Zurück in den Mindspace</button></div>
                        <div className="zweiter">
                            <button id="2" className="endBtn" onClick={this.handleClick}>Experiment verlassen</button></div>
                    </div>


                </div >
            )
        } else return null
    }
}

export default Auswertung