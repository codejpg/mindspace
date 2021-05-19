import React from "react"
import styled, { ThemeConsumer } from 'styled-components'

class Result extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true,
            slide: 1,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {
        this.setState({
            slide: this.state.slide +1,
         
        })

    }
    render(){
        const Button = styled.button`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #00ffff;
        color: #00ffff;
        margin: 0 1em;
        font-size: 40px;
        padding: 0.25em 1em;

      
    `
        if (this.state.visible){
            return(<div className="fullScreen">
                    <div className="box">
                    {(() => {
                        if  (this.state.slide <= 1){
                            console.log(this.state.content)
                             return(<div><div className="item-frage"></div>
                            <div class="slidecontainer">
                                <input type="range" min="1" max="100" value="50" class="slider" id="myRange" onChange={this.handleSliderChange}/></div>
                                <p>Value: <span id="demo"></span></p>
                                <Button  id="1" onClick={this.handleClick}>{this.state.content1}</Button>
                            </div>
                            )
          
                            
                            }

        })()}
            
        </div>
    </div>

)
    }else {
        return (null);
    }
}
}
export default Result
