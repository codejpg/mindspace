import React from "react"
const beginn = ["Die halbe Stunde", "Das Wetter", "Kein Mensch", "Eine Glühbirne", "Mit Butter", "Ohne Katzen"]
const mitte = ["ist auch", "macht den Affen", "fängt die Sonne", "brennt seit Titanic", "wirkt die Sonnenblume", "geht die Welt"]
const ende = ["neu.", "verrückt.", "sandig.", "erneut.", "immer klebrig.", "unter.", "weiter.", "völlig normal.", "trocken"]

class Generator extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "generator",
            beginn: this.getRandomInt(beginn.length - 1),
            mitte: this.getRandomInt(mitte.length - 1),
            ende: this.getRandomInt(ende.length - 1)
        }
    }
    handleClick = () => {
        this.setState({
            beginn: this.getRandomInt(beginn.length - 1),
            mitte: this.getRandomInt(mitte.length - 1),
            ende: this.getRandomInt(ende.length - 1)
        })
    }
    componentWillUnmount() {
        this.props.firstOpen(this.state.name)
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    render() {
        return (

            <div className="generatorContainer">
                <h1>{beginn[this.state.beginn]} {mitte[this.state.mitte]} {ende[this.state.ende]}</h1>


                <button className="btnRound" onClick={this.handleClick}></button>
            </div>
        )
    }
}
export default Generator