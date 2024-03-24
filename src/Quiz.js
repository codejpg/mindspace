import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./quiz.css";

const fragen = [
    "Wie gehts dir?",
    "Wähle ein Form aus.",
    "Wähle eine Farbe aus.",
    "Was ist die Durchschnittsthemperatur in Deutschland?",
    "frage4",
];
const antworten1 = ["0", "antwort1", "antwort3", "antwort5", "antwort7"];
const antworten2 = ["0", "antwort2", "antwort4", "antwort6", "antwort8"];

const Quiz = (props) => {
    const { loadImgNumber, loadFunction, saveFunction, showHiddenProgram } = props;
    const [subNumber, setSubNumber] = useState(loadImgNumber());
    const [subNumber2, setSubNumber2] = useState("");
    const [qID, setQID] = useState(loadFunction());
    const [frage, setFrage] = useState(fragen[qID]);
    const [content1, setContent1] = useState(antworten1[qID]);
    const [content2, setContent2] = useState(antworten2[qID]);
    const [over, setOver] = useState(qID > fragen.length);

    useEffect(() => {
        let newNum = getRandomInt(3);
        while (newNum === subNumber) {
            newNum = getRandomInt(3);
        }
        setSubNumber2(newNum);
    }, []);

    const handleClick = (event) => {
        setQID(qID + 1);
        setContent1(antworten1[qID + 1]);
        setContent2(antworten2[qID + 1]);
        setFrage(fragen[qID + 1]);
        setOver(qID + 1 > fragen.length - 1);
        console.log("Q ID: " + (qID + 1));
    };

    const handleSliderChange = () => {
        const slider = document.getElementById("myRange");
        const output = document.getElementById("demo");
        output.innerHTML = slider.value;

        slider.oninput = function () {
            output.innerHTML = this.value;
        };
    };

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };

    useEffect(() => {
        const { qID } = this.state;
        saveFunction({ subNumber, subNumber2, qID, frage, content1, content2, over });
        if (qID >= fragen.length - 1) {
            const name = "Ergebnis";
            showHiddenProgram(name);
        }
    }, [qID]);

    return (
        <div>
            {qID <= 1 && (
                <QuizStyle>
                    <div className="item-frage">
                        <Frage>{frage}</Frage>
                    </div>
                    <div className="slidecontainer">
                        <input
                            type="range"
                            min="1"
                            max="100"
                            defaultValue="50"
                            className="slider"
                            id="myRange"
                            onChange={handleSliderChange}
                        />
                    </div>
                    <p>
                        Value: <span id="demo"></span>
                    </p>
                    <Button id="1" onClick={handleClick}>
                        {content1}
                    </Button>
                </QuizStyle>
            )}
            {qID === 2 && (
                <QuizStyle>
                    <div className="item-frage">
                        <Frage>{frage}</Frage>
                    </div>
                    <div className="item-a" onClick={handleClick}>
                        <img src={require(`./img/sub-${subNumber}.svg`)} alt="" />
                    </div>
                    <div className="item-b" onClick={handleClick}>
                        <img src={require(`./img/sub-${subNumber2}.svg`)} alt="" />
                    </div>
                </QuizStyle>
            )}
            {qID === 3 && (
                <QuizStyle>
                    <div className="item-frage">
                        <Frage>{frage}</Frage>
                    </div>
                    <div className="item-a">
                        <Button id="1" onClick={handleClick}>
                            {content1}
                        </Button>
                    </div>
                    <div className="item-b">
                        <Button2 id="2" onClick={handleClick}>
                            {content2}
                        </Button2>
                    </div>
                </QuizStyle>
            )}
            {qID >= 4 && (
                <QuizStyle>
                    <div className="item-end">Du hast alle Fragen beantwortet</div>
                </QuizStyle>
            )}
        </div>
    );
};

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #00ffff;
    color: #00ffff;
    margin: 0 1em;
    font-size: 40px;
    padding: 0.25em 1em;
`;
const Button2 = styled.button`
    background: #00ffff;
    color: white;
    border-radius: 3px;
    border: 2px solid #00ffff;
    font-size: 40px;
    margin: 0 1em;
    padding: 0.25em 1em;
`;
const Frage = styled.div`
    color: #000000;
    font-size: 30pt;
    margin: 0 1em;
    padding: 0.25em 1em;
`;
const QuizStyle = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    column-gap: 10px;
    row-gap: 15px;
    top: 30px;
    bottom: 0;
    left: 0;
    right: 0;
    color: #000000;
    background-color: #dedddc;
    overflow: hidden;
    width: 100%;
    height: 100%;
`;

export default Quiz;
