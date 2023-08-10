import React, {useState} from "react"

const ColorCard = ({color}) =>{

    const { name, hex, families } = color;

    const [hexName, setHexName] = useState(hex);
    const [primaryColor, setPrimaryColor] = useState("transparent");
    const [displayText, setDisplayText] = useState("");
    const [buttonVisible, setButtonVisible] = useState(true);
    const [showBorder, setShowBorder] = useState(false);
    const [smallCards, setSmallCards] = useState([]);

    function changeColor() {
        setPrimaryColor(name);
        setHexName(name);
        setDisplayText("Color families:");
        setButtonVisible(false);
        setSmallCards(families);
        setShowBorder(true);
    }

    return (
        <div className="colorCard" style={{ backgroundColor: primaryColor }}>
            <h3>{hexName}</h3>
            <p>{displayText}</p>
            <br />
            <div className={`smallCards ${showBorder ? "d-flex" : ""}`}>
                {smallCards.map((smallColor, index) => (
                    <div key={index} className={`smallCard ${showBorder ? "with-border" : ""}`} style={{ backgroundColor: smallColor }}></div>
                ))}
            </div>
            {buttonVisible && <button onClick={changeColor}>Show Color</button>}
        </div>
    );

}


export default ColorCard;