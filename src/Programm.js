import React, { useState } from "react";
import Draggable from "react-draggable";
import HoverImage from "react-hover-image";
import { ThemeConsumer } from "styled-components";
import Modal from "./Modal";

const Programm = (props) => {
  const [modals, setModals] = useState(props.data);
  const [hovered, setHovered] = useState(false);

  const getModal = (data) => {
    if (data.name === "Ergebnis") {
      if (props.endQuizDone()) {
        props.openAuswertung();
      } else {
        props.openEndQuiz();
      }
    } else {
      let modal;
      const updatedModals = modals.map((modal) => {
        modal.isActive = false;
        return modal;
      });
      if (data.id === 100) {
        modal = updatedModals[1];
      } else {
        modal = { ...updatedModals[data.id - 1] };
      }
      modal.showModal = true;
      modal.isActive = true;
      updatedModals[data.id - 1] = modal;
      setModals(updatedModals);
    }
  };

  const hideModal = (data) => {
    const updatedModals = modals.map((modal) => {
      if (modal.id === data.id) {
        modal.showModal = false;
        modal.isActive = false;
      }
      return modal;
    });
    setModals(updatedModals);
  };

  const getActive = (data) => {
    const updatedModals = modals.map((modal) => {
      modal.isActive = modal.id === data.id;
      return modal;
    });
    setModals(updatedModals);
  };

  const hoverEffect = (e) => {
    e.currentTarget.style.transition = "0.5s all";
    e.currentTarget.style.opacity = "0";
    e.currentTarget.src = e.target.dataset.key;
  };

  const username = props.nameShow ? props.getName() + "'s" : "";

  return (
    <div className="folderWrapperWrapper">
      {props.data.map((data) => (
        data.show && data.id !== 100 ? (
          <div key={data.id} id={data.id} name={data.name} className="folderWrapper">
            <div onClick={() => getModal(data)}>
              <HoverImage
                className="folderImage"
                src={data.image}
                hoverSrc={data.hoverImage}
                onMouseOut={() => setHovered(false)}
                onMouseOver={() => setHovered(true)}
                style={{ transform: `${hovered ? 'scale(2.5,2.5)' : null}` }}
              ></HoverImage>
              <p>{username} {data.name}</p>
            </div>
          </div>
        ) : null
      ))}
      {props.data.map((data) => (
        <Modal
          key={data.id}
          show={modals[data.id - 1].showModal}
          onHide={() => hideModal(data)}
          name={modals[data.id - 1].name}
          content={modals[data.id - 1].content}
          image={modals[data.id - 1].image}
          hoverImage={modals[data.id - 1].hoverImage}
          modalClass={modals[data.id - 1].className}
          isActive={modals[data.id - 1].isActive}
          onClick={() => getActive(data)}
        />
      ))}
    </div>
  );
};

export default Programm;
