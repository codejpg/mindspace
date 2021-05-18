import React from "react"
import "./subliminal.css"

class Subliminal extends React.Component{
    constructor(){
        super()
        this.state={
            name: "subliminal",
            randomItem:'',
            isVisible: false,
            count: 0
        }
  }

  

    randomItemGenerator = () => (
        this.myArray[Math.floor(Math.random()*this.myArray.length)]
    )
  
    componentDidMount(){
        this.props.firstOpen(this.state.name)
        this.interval = setInterval(() => {
            this.setState({ isVisible: true})
            this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            })

            
        }, 10000)
    }
    componentWillUnmount(){
        this.interval && clearInterval(this.interval)

            this.props.firstOpen(this.state.name)
            
    

        
    }
  
    render(){
        const isVisible = this.state.isVisible;
        console.log("visible: "+isVisible)
        if(isVisible && this.state.count < 10){
            setTimeout(() => { this.setState({isVisible: false}) }, 20)
          
       return(
          <div>
               
              <div id="subliminal">
              <img src={this.props.image.default}></img>

              <div className="center">

              </div></div></div>
       ) }
       else {
           return (
               <div></div>
           )
       }
     }
  
  }
  export default Subliminal