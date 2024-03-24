import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import "./quiz.css";
import "./endquiz.css";

const StartQuiz = (props) => {
    const [visible, setVisible] = useState(true);
    const [qID, setQID] = useState(3);
    const [over, setOver] = useState(false);
    const [chosenColor, setChosenColor] = useState(0);
    const [colors] = useState([
        { id: 1, bgColor: "#eef2f3" },
        { id: 2, bgColor: "#ffe7a0" },
        { id: 3, bgColor: "#ffbeca" },
        { id: 4, bgColor: "#0096d3" },
        { id: 5, bgColor: "#dedddc" },
        { id: 6, bgColor: "#afdcdc" },
        { id: 7, bgColor: "#ffd900" },
        { id: 8, bgColor: "#90bc9c" }
    ]);

    const handleClick = (event) => {

        if (qID === 3) {
            const id = event.target.id;
            props.getBgColor(colors[id].bgColor);
            finish();
        }
        if (qID === 6) {
            const id = event.target.id;
            setChosenColor(id);
        }

    };

    const finish = () => {
        setVisible(false);
        props.saveFunction({
            visible,
            qID,
            over,
            chosenColor,
            colors
        });
    };

    const Frage = styled.div`
        color: #000000;
        font-size: 30pt;
        margin: 0 1em;
        padding: 1.25em 1em;
    `;

    const QuizStyle = styled.div`
        position: absolute;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 0.1fr 1fr 1fr; 
        column-gap: 10px;
        row-gap: 15px;
        top: 0px;
        bottom: 0;
        left: 0;
        right:0;
        color: #000000;
        background-color: #eef2f3;
        overflow: hidden;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    `;


    if (visible) {
        return (
            <div className="fullScreen">
                <div className="box">
                    {(() => {
                         if (qID === 3) {
                            return (
                                <QuizStyle>
                                    <div className="item-frage"><Frage>Wähle eine Farbe aus</Frage></div>
                                    {colors.map((data, key) => (
                                        <div id={key} className="colorDiv" onClick={handleClick} style={{ background: data.bgColor }}></div>
                                    ))}
                                </QuizStyle>
                            );
                        } else if (qID === 4) {
                            return (
                                <div className="fullScreenEinleitung">
                                    <div className="welcomeBox">
                                        <p>Super, jetzt gehts los!</p>
                                        <button id="startButton" onClick={finish}>Start</button>
                                    </div>
                                </div>
                            );
                        }
                    })()}
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default StartQuiz;
