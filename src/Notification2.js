import React from "react"
import  "./Notification.css"
const titles=["Titel0","Titel1","Titel2","Titel3"];
const messages=["Message0","Message1", "Message2", "Message3"];

class Notification2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            titel: titles[this.props.id],
            message: messages[this.props.id]
        }
    }
        render(){
        const divStyle = { right: this.props.position };
        return (
            
            <div id={this.props.id} style={divStyle} className= "notification" >
                 <button className = "noteCloseBtn" onClick={this.props.onClick} >x</button>
                <h1>{this.state.titel}</h1>
                <p>{this.state.message}</p>
                <Notification2 id={this.props.id} position={this.props.notePosition} />
            </div>
            
        )
    }
}


export default Notification2