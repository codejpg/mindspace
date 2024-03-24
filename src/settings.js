import React from "react";

const Settings = (props) => {
    const settings = [
        { id: 1, bgColor: "#eef2f3" },
        { id: 2, bgColor: "#ffe7a0" },
        { id: 3, bgColor: "#ffbeca" },
        { id: 4, bgColor: "#0096d3" },
        { id: 5, bgColor: "#dedddc" },
        { id: 6, bgColor: "#afdcdc" },
        { id: 7, bgColor: "#ffd900" },
        { id: 8, bgColor: "#90bc9c" }
    ];

    const handleColorClick = (bgColor) => {
        props.getBgColor(bgColor);
    };

    return (
        <div>
            <p>Hintergrundfarbe ändern:</p>
            {settings.map((data) => (
                <div
                    key={data.id}
                    onClick={() => handleColorClick(data.bgColor)}
                    className="colorSelector"
                    style={{ background: data.bgColor }}
                ></div>
            ))}
        </div>
    );
};

export default Settings;