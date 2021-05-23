


import React from "react"


class Generator extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "generator",
        }
    }
    componentWillUnmount() {
        this.props.firstOpen(this.state.name)
    }
    render() {
        return (
            <div>
                <div className="reviewContainer">
                    <div className="film">Into The Storm</div>
                    <div className="title">EXTREM SCHLECHTER FILM</div>
                    <div className="sterne">1,0 von 5 Sternen</div>
                    <div className="review">Ein extrem es schlecht gemachter Film!!! Ob Schauspieler, Story, Aktion oder Sonnst was,er wird NIEMALS an das Original TWISTER rankommen!!!! Kaufen sie diesen Film NIEMALS!!!! Eckert.</div>
                </div>
                <button className="rglBtn">neue Review!</button>
            </div>
        )
    }
}
export default Generator