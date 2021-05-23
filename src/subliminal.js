import React from "react"
import "./subliminal.css"

class Subliminal extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "subliminal",
            randomItem: '',
            isVisible: false,
            count: 0,
            subEnd: false
        }
    }



    randomItemGenerator = () => (
        this.myArray[Math.floor(Math.random() * this.myArray.length)]
    )

    componentDidMount() {
        this.props.firstOpen(this.state.name)
        this.interval = setInterval(() => {
            this.setState({ isVisible: true })
            this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            })


        }, 10000)
    }
    componentWillUnmount() {
        this.interval && clearInterval(this.interval)




    }

    render() {
        const isVisible = this.state.isVisible;

        if (isVisible && this.state.count < 10) {
            setTimeout(() => { this.setState({ isVisible: false }) }, 16)

            return (
                <div>

                    <div style={{ zIndex: 1000 }} id="subliminal">
                        <img src={this.props.image.default}></img>

                        <div className="center">

                        </div></div></div>
            )
        }

        else {
            if (this.state.count == 10 && this.state.subEnd == false) {

                this.props.firstOpen(this.state.name)
                console.log("subliminal is over")
                this.setState({ subEnd: true })
            }
            return (
                <div></div>
            )
        }
    }

}
export default Subliminal