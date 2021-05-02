import React from "react"
import  "./Notification.css"

class Notification extends React.Component {
    constructor(){
        super()
        this.state={
            position: "30px"
        }
        this.handleClick = this.handleClick.bind(this)
       
    }
    handleClick(){
        this.setState({
            position: "-400px"
        })
    }
  
    render(){
        const divStyle = { right: this.state.position };
        return (
            
            <div style={divStyle} className= "notification" >
                 <button className = "noteCloseBtn" onClick={this.handleClick}>x</button>
                <h1>Titel</h1>
                <p>Message</p>
            </div>
            
        )
    }
}

export default Notification