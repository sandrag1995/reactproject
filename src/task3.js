///////////////////TASK 3 - COOKIE CLICKER ON REACT//////////////////////////

import './App.css';
import {useState} from "react"
function task3() {
    const [num, setNum] = useState(0);

    const UPGRADE_COSTS = {
        option1: 50,
        option2: 100,
        option3: 80,
        option4: 50,
        option5: 100,
    };

    const [options, setOptions] = useState({
        option1: "block",
        option2: "block",
        option3: "block",
        option4: "block",
        option5: "block",
    });

    const [defaultCookie, newCookie] = useState("https://assets.stickpng.com/images/580b57fbd9996e24bc43c0fc.png");
    const [currentBackground, setCurrentBackground] = useState("white");
    const [animationStop, animationOn] = useState("");
    const [clickMultiplier, setClickMultiplier] = useState(1);
    function addCookie() {
        setNum(num + clickMultiplier);
    }

    function upgrade(option, cost, multiplier) {
        if (num >= cost) {
            setNum(num - cost);
            const updatedOptions = { ...options, [option]: "none" };
            setOptions(updatedOptions);
            setClickMultiplier(multiplier);
            switch (option) {
                case 'option3':
                    setCurrentBackground('aquamarine');
                    break;
                case 'option4':
                    newCookie("https://www.pngarts.com/files/4/Cookie-PNG-Pic.png");
                    break;
                case 'option5':
                    animationOn('rotate 5s infinite linear');
                    break;
                default:
                    break;
            }
        }
    }


    return (
        <div className="gameContainer d-flex">
            <div className="cookieScreen m-10 d-flex" style={{ backgroundColor: currentBackground }}>
                <img srcSet={defaultCookie} alt="" style={{height: '400px', width: '400px', animation: animationStop, transition: 'transform 8s linear',}} onClick={addCookie}/>
                <p><b>Cookies:</b> {num}</p>
            </div>

            <div className="upgradeMenu m-10">
                <div className="option1" onClick={() => upgrade("option1", UPGRADE_COSTS.option1, 2)} style={{ display: options.option1 }}>
                    {options.option1 === 'none' ? 'Upgrade 1 Purchased' : `2 per click - cost ${UPGRADE_COSTS.option1} cookies`}
                </div>

                <div className="option2" onClick={() =>upgrade("option2", UPGRADE_COSTS.option2, 3)} style={{ display: options.option2 }}>
                    {options.option2 === 'none' ? 'Upgrade 2 Purchased' : '3 per click - cost 100 cookies'}
                </div>

                <div className="option3" onClick={() => upgrade("option3", UPGRADE_COSTS.option3)} style={{ display: options.option3 }}>
                    {options.option3 === 'none' ? 'Upgrade 3 Purchased' : `Change background color - cost ${UPGRADE_COSTS.option3} cookies`}
                </div>

                <div className="option4" onClick={() =>upgrade("option4", UPGRADE_COSTS.option4)} style={{ display: options.option4 }}>
                    {options.option4 === 'none' ? 'Upgrade 4 Purchased' : `Change cookie look - cost ${UPGRADE_COSTS.option4} cookies`}
                </div>

                <div className="option5" onClick={() => upgrade("option5", UPGRADE_COSTS.option5)} style={{ display: options.option5 }}>
                    {options.option5 === 'none' ? 'Upgrade 5 Purchased' : `Make cookie spin - cost ${UPGRADE_COSTS.option5} cookies`}
                </div>
            </div>

        </div>
    );
}
export default task3;