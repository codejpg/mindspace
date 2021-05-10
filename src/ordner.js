import React from "react"
import FolderImage from './img/MindSpaceRGB-11.svg'
import FolderImageHover from './img/MindSpaceRGB neu-18.svg'
import Dum from "./sketch"
import Draggable from 'react-draggable'
//import Modal from "./Modal";
import Modal from 'react-modal';
import "./Modal.css";

class Ordner extends React.Component {
    constructor(props){
      super(props);
        this.state = {
            showModal: false,
            dataModal: {
              name: "",
              content: "",
              image: ''
            },
            modals: [
                { id: 1, name: "Polycon", className: "popup", show: false, isActive: false, content: <Dum/>, image: FolderImage,  hoverImage: FolderImageHover},
                { id: 2, name: "Ordner", className: "popup", show: false, isActive: false, content: <Dum/>, image: FolderImage, hoverImage: FolderImageHover },
             
              ],
        }
       
        console.log(this.state.modals)
      }
    
      getModal = data => {
        this.setState({ showModal: true, dataModal: data });

        
      };
    
      hideModal = () => {
        this.setState({ showModal: false});
      };
     
  
  
  
  render() {
    
   
    return (
  
  <div>
    
     <div className="Wrapper">
       
        { this.state.modals.map((data, key) => (
         
    
          <div key={data.id} className="folder">
              <div onClick={() => this.getModal(data)}>
              <img src={data.image}
                    onMouseEnter={e => (e.currentTarget.src = data.hoverImage)}
                    onMouseOut={e => (e.currentTarget.src = data.image)}
                  />
                  <p>{data.name}</p></div>
          </div> 
        ))}
  </div>

      
  <Modal
  
           isOpen={this.state.showModal}
           onRequestClose={()=>this.hideModal}
           contentLabel="Inside Ordner"
           className="Modal"
           overlayClassName="Overlay"
           >
    
               <div id="modalTopBar"> <button className = "closeBtn" onClick={this.hideModal}></button>
          </div>

           <div>I am a modal</div>
           {this.state.dataModal.content}
         </Modal>
      
      </div>
  
  
  
  )}}

  export default Ordner