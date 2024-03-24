import React, { useState } from "react";
import styled from 'styled-components';
import "./endquiz.css";
import SpiraleImage from './img/OSCILL-78.svg';
import BoxImage from './img/OSCILL-79.svg';

const fragen = ["Was ist die Durchschnittstemperatur in Japan?", "Wähle eine Form aus.", "Was magst du lieber?", "Wähle.", "Wähle eine Form aus."];
const antworten1 = ["0", "antwort1", "Sport machen", "Honigmelone", "antwort7"];
const antworten2 = ["0", "antwort2", "Auf der Couch entspannen", "Drachenfrucht", "antwort8"];

const EndQuiz = (props) => {
    const [visible, setVisible] = useState(true);
    const [qID, setQID] = useState(0);
    const [sliderValue, setSliderValue] = useState(10);
    const [subNumber, setSubNumber] = useState(props.loadImgNumber());
    const [subNumber2, setSubNumber2] = useState("");
    const [influencePoints, setInfluencePoints] = useState(props.influencePoints);
    const [katzoderhund, setKatzoderhund] = useState(JSON.stringify(props.katzoderhund()));
    const [sketches, setSketches] = useState(props.sketchedImages());

    const handleClick = (event) => {
        if (qID === 1) {
            if (sliderValue > 15) {
                setInfluencePoints(prevPoints => prevPoints + 1);
            }
        }
        if (qID === 2) {
            if (event.target.id === "1") {
                setInfluencePoints(prevPoints => prevPoints + 1);
            }
        }
        if (qID === 3) {
            console.log(katzoderhund);
            if ((event.target.id === "1" && katzoderhund.includes("Hund")) || (event.target.id === "2" && katzoderhund.includes("Katze"))) {
                console.log("katzen oder hundemensch = influenced");
                setInfluencePoints(prevPoints => prevPoints + 1);
            }
        }
        if (qID === 4) {
            if (event.target.id === "1") {
                setInfluencePoints(prevPoints => prevPoints + 1);
            }
        }
        if (qID === 5) {
            if (event.target.id === "2") {
                setInfluencePoints(prevPoints => prevPoints + 1);
            }
        }
        if (qID === 6) {
            if (qID >= fragen.length - 1) {
                const name = "Ergebnis";
                props.showHiddenProgram(name);
            }
        }

        setQID(prevQID => prevQID + 1);
        setSubNumber(event.target.id);
        setSubNumber2(getRandomInt(3));
    };

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    const endEndQuiz = () => {
        props.saveFunction({
            visible,
            qID,
            sliderValue,
            subNumber,
            subNumber2,
            influencePoints,
            katzoderhund,
            sketches
        });
    };

    const titelErgebnis = () => {
        if (influencePoints === 0) {
            return "Das Pendel";
        } else if (influencePoints === 1 || influencePoints === 2) {
            return "Die Lupe";
        } else if (influencePoints === 3) {
            return "Der Stein";
        } else if (influencePoints === 4) {
            return "Die To Do Liste";
        } else if (influencePoints === 5) {
            return "Die Feder";
        }
    };

    const saveClick = () => {
        const saveData = {
            name: props.name,
            code: props.code,
            influencePoints,
            images: JSON.stringify(sketches),
            fotos: JSON.stringify(props.fotos()),
            catordog: katzoderhund,
            datum: new Date().toISOString(),
            result: titelErgebnis()
        };
        return saveData;
    };

    const Einleitung = styled.div`
        color: #000000;
        font-size: 26pt;
        margin: 0 1em;
        padding: 0.25em 1em;
        text-align: center;
        letter-spacing: -1px;
        line-height: 40pt;
    `;

    const Frage = styled.div`
        color: #000000;
        font-size: 26pt;
        margin: 0 1em;
        padding: 0.25em 1em;
        text-align: center;
        letter-spacing: -1px;
        line-height: 22pt;
    `;

    const QuizStyle = styled.div`
        position: absolute;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto; 
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
    `;

    return (
        <div className="fullScreen">
            <div className="box">
                {(() => {
                    if (qID === 0) {
                        return (
                            <QuizStyle>
                                <div className="item-frage">
                                    <Einleitung>
                                        Bevor ich dir verrate, worum es in diesem Experiment geht, würde ich dich bitten einige Fragen zu beantworten. Beantworte die Fragen schnell und intuitiv.
                                    </Einleitung>
                                </div>
                                <div className="item-center">
                                    <button className="btnSave" id="1" onClick={handleClick}>
                                        alles klar
                                    </button>
                                </div>
                            </QuizStyle>
                        );
                    } else if (qID === 1) {
                        return (
                            <div>
                                <div className="item-frage">
                                    <Frage>{fragen[qID - 1]}</Frage>
                                </div>
                                <div className="slidecontainer">
                                    <h1>
                                        <span>{sliderValue}°C</span>
                                    </h1>
                                    <input
                                        type="range"
                                        min="5"
                                        max="40"
                                        value={sliderValue}
                                        className="slider"
                                        id="myRange"
                                        onChange={handleSliderChange}
                                    />
                                </div>
                                <button className="btnCenter" id="1" onClick={handleClick}>
                                    weiter
                                </button>
                            </div>
                        );
                    } else if (qID === 2) {
                        return (
                            <QuizStyle>
                                <div className="item-frage">
                                    <Frage>{fragen[qID - 1]}</Frage>
                                </div>
                                <div className="item-a" onClick={handleClick}>
                                    <img id="1" src={require('./img/sub-' + subNumber + '.svg')} alt="" />
                                </div>
                                <div className="item-b" onClick={handleClick}>
                                    <img id="2" src={require('./img/sub-' + subNumber2 + '.svg')} alt="" />
                                </div>
                            </QuizStyle>
                        );
                    } else if (qID === 3 || qID === 4) {
                        return (
                            <QuizStyle>
                                <div className="item-frage">
                                    <Frage>{fragen[qID - 1]}</Frage>
                                </div>
                                <div className="item-a">
                                    <button className="rglBtn" id="1" onClick={handleClick}>
                                        {antworten1[qID - 1]}
                                    </button>
                                </div>
                                <div className="item-b">
                                    <button className="rglBtn" id="2" onClick={handleClick}>
                                        {antworten2[qID - 1]}
                                    </button>
                                </div>
                            </QuizStyle>
                        );
                    } else if (qID === 5) {
                        return (
                            <QuizStyle>
                                <div className="item-frage">
                                    <Frage>{fragen[qID - 1]}</Frage>
                                </div>
                                <div className="item-a" onClick={handleClick}>
                                    <img id="1" src={BoxImage} alt="" />
                                </div>
                                <div className="item-b" onClick={handleClick}>
                                    <img id="2" src={SpiraleImage} alt="" />
                                </div>
                            </QuizStyle>
                        );
                    } else if (qID === 6) {
                        return (
                            <QuizStyle>
                                <div className="item-end">
                                    <Einleitung>
                                        Danke, {props.name}. Das Experiment ist vorbei. Jetzt verrate ich dir, worum es in dem Experiment geht.
                                    </Einleitung>
                                </div>
                                <div className="item-center">
                                    <SavingData saveFunction={endEndQuiz} data={saveClick()} />
                                </div>
                            </QuizStyle>
                        );
                    }
                })()}
            </div>
        </div>
    );
};

const SavingData = (props) => {
    const handleClick = () => {
        console.log("props data", props.data);
        props.saveFunction();
    };

    return (
        <button className="btnSave" onClick={handleClick}>
            Ok
        </button>
    );
};

export default EndQuiz;
