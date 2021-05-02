import React from 'react';
import ReactDOM from 'react-dom';
var listOfImages =[];

class Kunst extends React.Component{
    importAll(r) {
        var test = r.keys().map(r);
        console.log(test)
        return test
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('./kunst/', false, /\.(png|jpe?g|svg)$/));
    }
    render(){
        return(
          <div className="kunstOrdner">
              {
                    
                    listOfImages.map(
                      (image, index) =>    <img key={index} src={image.default} alt="info"></img> 
                     
                    )
              }
              
              
          </div>
        )
    }
}
export default Kunst;