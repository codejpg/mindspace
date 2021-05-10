import React from "react"
import styled, { ThemeConsumer } from 'styled-components'
import "./quiz.css"
let fragen = ["0","frage1","frage2","frage3","frage4"]
let antworten1 = ["0","antwort1","antwort3","antwort5","antwort7"]
let antworten2 = ["0","antwort2","antwort4","antwort6","antwort8"]


class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            qID: this.props.loadFunction(),
            frage: fragen[this.props.loadFunction()],
            content1: antworten1[this.props.loadFunction()],
            content2: antworten2[this.props.loadFunction()],
            over: this.props.loadFunction() > fragen.length
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {
        this.setState({
            qID: this.state.qID +1,
            aID: event.target.id,
            frage: fragen[this.state.qID],
            content1: antworten1[this.state.qID],
            content2: antworten2[this.state.qID],
            over: this.state.qID > fragen.length-1
        })
        console.log("Q ID: " + this.state.qID)
    }
    componentWillUnmount() {
        this.props.saveFunction(this.state);
    } 
 
     
      
    
    
    render() {
        let quizNotOver = Boolean(this.state.qID < fragen.length+1);

        const Button = styled.button`
            background: transparent;
            border-radius: 3px;
            border: 2px solid #00ffff;
            color: #00ffff;
            margin: 0 1em;
            font-size: 40px;
            padding: 0.25em 1em;
        `
        const Button2 = styled.button`
            background: #00ffff;
            color: white;
            border-radius: 3px;
            border: 2px solid #00ffff;
            font-size: 40px;
            margin: 0 1em;
            padding: 0.25em 1em;
        `
        const Frage = styled.div`
            color: #00ffff;
            font-size: 30pt;
            margin: 0 1em;
            padding: 0.25em 1em;
 
        `
        const QuizStyle = styled.div`
            position: absolute;
            display: inline-grid;
            grid-template-columns: auto auto;
            grid-template-rows: auto auto; 
            column-gap: 10px;
            row-gap: 15px;
            border: 2px solid #00ffff;
            top: 30px;
            bottom: 0;
            left: 0;
            right:0;
            color: #00ffff;
            background-color: #333333;
            overflow: hidden;
            width: 100%;
            height: 100%;
            justify-items: center;

        `
        
       
       
        if (quizNotOver) {
            return   <div>
                <QuizStyle>
            <div className="item-a"><Frage>{this.state.frage}</Frage></div>
           <div><Button id="1" onClick={this.handleClick}>{this.state.content1}</Button></div>
           <div><Button2 id="2" onClick={this.handleClick}>{this.state.content2}</Button2></div>
           </QuizStyle> </div>
          }
          return <QuizStyle><div>Du hast alle Fragen beantwortet</div></QuizStyle>;
    }
}

export default Quiz