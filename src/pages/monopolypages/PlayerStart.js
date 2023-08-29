import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import {selectedPlayer} from "../../features/monopoly";
import Figure from "../../components/monopolygame/Figure";


const PlayerStart = () => {

    const figures = [
        'https://i0.wp.com/www.actionfigureinsider.com/wpress/wp-content/uploads/2022/05/Boot.png?fit=800%2C640',
        'https://cf.geekdo-images.com/LttPmASqB0ZONGIdR6qYSg__opengraph/img/sJLLAvRmX0Nc8LoHG6oG41ItXQs=/fit-in/1200x630/filters:strip_icc()/pic5452860.png',
        'https://i.ebayimg.com/images/g/UYwAAOSwUYNaDFvV/s-l1600.png',
        'https://fox8.com/wp-content/uploads/sites/12/2022/04/Wheelbarrow.png',
    ];

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedFigureUrl, setSelectedFigureUrl] = useState(null);
    const [borderStyle, setBorderStyle] = useState("2px solid gray")
    const [errorMsg, setErrorMsg] = useState("")

    function selectFigure(figureUrl) {
        setSelectedFigureUrl(figureUrl);
        dispatch(selectedPlayer(figureUrl));
    }

    function handleStartClick() {
        if (selectedFigureUrl) {
            navigate('/gameboard', { state: { figure: selectedFigureUrl, money: 200, } });
        } else {
            setBorderStyle("5px solid red");
            setErrorMsg("Please select a figure!");
        }
    }

    return (
        <div className="startScreen d-flex">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Monopoly_game_logo.svg/2560px-Monopoly_game_logo.svg.png" alt="" style={{width: "600px"}}/>
            <h2 >Select your figure:</h2>
            <div className="figures d-flex" style={{border: borderStyle}}>
                {figures.map((imageUrl, index) => (
                    <Figure
                        key={index}
                        imageUrl={imageUrl}
                        onClick={() => selectFigure(imageUrl)}
                        borderStyle={selectedFigureUrl === imageUrl ? "5px solid green" : "2px solid gray"}
                    />))}
            </div>
            <button className="startBtn" onClick={handleStartClick}>Start!</button>
            <p>{errorMsg}</p>
        </div>
    );
};

export default PlayerStart;