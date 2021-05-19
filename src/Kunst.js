import React from 'react';
import ReactDOM from 'react-dom';
var listOfImages = [];

class Kunst extends React.Component {
    constructor(props) {
        super(props)
    }
    importAll(r) {
        var test = r.keys().map(r);
        console.log(test)
        return test
    }
    componentWillMount() {

        listOfImages = this.importAll(require.context('./kunst/', false, /\.(png|jpe?g|svg)$/));

    }

    render() {
        var code = this.props.getCode();
        var sketches = this.props.getImages();
        console.log(sketches)
        return (
            <div className={this.props.className} >
                {
                    sketches.map((image, key) => (
                        <img src={`data:image/jpeg;base64,${image}`} />
                        // (image, index) =>  image.default.includes(code) ?  <img key={index} src={image.default} alt="info"></img> : null
                        //(image, index) =>  image.default.includes(code) ?  <img key={index} src="data:image/png;base64,"{} alt="info"></img> : null

                    ))}


            </div>
        )
    }
}
export default Kunst;