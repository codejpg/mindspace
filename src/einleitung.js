import React, { useState } from "react";
import "./einleitung.css";

const Einleitung = (props) => {
    const [visible, setVisible] = useState(true);
    const [content, setContent] = useState(1);

    const handleClick = () => {
        setContent((prevContent) => prevContent + 1);
    };

    if (visible) {
        return (
            <div className="fullScreenEinleitung">
                <div className="welcomeBox">
                    {(() => {
                        if (content === 1) {
                            console.log(content);
                            return (
                                <div>
                                    <h1>Hallo, {props.userName}!</h1>
                                    <p>
                                        Schön, dass du an diesem Experiment teilnimmst. Der Desktop
                                        den du gleich siehst, ist nur für dich. Du kannst alles
                                        erkunden, was dich interessiert.
                                    </p>
                                    <button onClick={handleClick} id="welcomeButton">
                                        ok
                                    </button>
                                </div>
                            );
                        } else if (content === 2) {
                            return (
                                <div>
                                    <h1>Ablauf</h1>
                                    <p>
                                        Sobald das Experiment beendet ist, werde ich dich
                                        benachrichtigen. Ganz am Ende wirst du etwas über dich selbst
                                        erfahren. Viel Spaß im MindSpace, {props.userName}!
                                    </p>
                                    <button onClick={handleClick} id="welcomeButton">
                                        Lets go!
                                    </button>
                                </div>
                            );
                        } else {
                            setVisible(false);
                        }
                    })()}
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default Einleitung;
