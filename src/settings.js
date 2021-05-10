import React from "react"

class Settings extends React.Component {
    constructor(){
        super()
        this.state = {
           
            settings: [
            {id: 1, bgColor: "#eef2f3"},
            {id: 2, bgColor: "#ffe7a0"},
            {id: 3, bgColor: "#ffbeca"},
            {id: 4, bgColor: "#0096d3"},
            {id: 5, bgColor: "#dedddc"},
            {id: 6, bgColor: "#afdcdc"},
            {id: 7, bgColor: "#ffd900"},
            {id: 8, bgColor: "#90bc9c"}
          ],
        }
    }
    render(){
        return(
            <div>
            <p>Hintergrundfarbe ändern:</p>
            {this.state.settings.map((data, key) => (
            <div onClick={()=>this.props.getBgColor(data.bgColor)} className="colorSelector" style={{background: data.bgColor}}></div>
            ))}
            </div>
       
        )
    }
}

export default Settings