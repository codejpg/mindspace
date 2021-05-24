import React from "react"
import "./einleitung.css"

class Einleitung extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true,
            content: 1,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(prevstate => ({ content: prevstate.content + 1 }));
    }

    render() {
        if (this.state.visible) {
            return (
                <div className="fullScreenEinleitung">
                    <div className="welcomeBox">
                        {(() => {
                            if (this.state.content === 1) {
                                console.log(this.state.content)
                                return (<div>
                                    <h1>Hallo, {this.props.userName}!</h1><p>
                                        Schön, dass du an diesem Experiment teilnimmst. Der Desktop den du gleich siehst, ist nur für dich.
                 Du kannst alles erkunden, was dich interessiert.</p>
                                    <button onClick={this.handleClick} id="welcomeButton">ok</button>
                                </div>
                                )

                            } else if (this.state.content == 2) {
                                return (
                                    <div>
                                        <h1>Ablauf</h1><p>
                                            Sobald das Experiment beendet ist, werde ich dich benachrichtigen. Ganz am Ende wirst du etwas über dich selbst erfahren.
                     Viel Spaß im MindSpace, {this.props.userName}!</p>
                                        <button onClick={this.handleClick} id="welcomeButton">Lets go!</button>
                                    </div>
                                )
                            } else {
                                this.setState({ visible: false })

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


export default Einleitung

