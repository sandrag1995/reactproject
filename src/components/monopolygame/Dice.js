import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { updateMoney, incrementLoopCount } from '../../features/monopoly';

const Dice = ({ gameMap, playerPosition, setPlayerPosition}) => {
    const minNum = 1;
    const maxNum = 6;
    const [randomNum, setRandomNum] = useState(null);
    const [visibleText, setVisibleText] = useState(false);
    const [rollImg, setRollImg] = useState("https://pngimg.com/d/dice_PNG41.png");
    const [visibleRollButton, setVisibleRollButton] = useState(true);
    const [visibleGoButton, setVisibleGoButton] = useState(false);

    const dispatch = useDispatch();
    const money = useSelector((state) => state.player.money);
    function rollDice() {
        const newRandomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        setRandomNum(newRandomNum);
        setVisibleText(true);
        setVisibleRollButton(false);
        setVisibleGoButton(true);
        const diceImages = [
            null,
            "https://w7.pngwing.com/pngs/604/326/png-transparent-dice-dice-1-image-file-formats-rectangle-dice-thumbnail.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/1200px-Dice-2-b.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/240px-Dice-3-b.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/2048px-Dice-4-b.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/1024px-Dice-5-b.svg.png",
            "https://static.thenounproject.com/png/2502960-200.png"
        ];

        setRollImg(diceImages[newRandomNum]);
    }


    function movePlayer() {
        setVisibleText(false);
        setVisibleRollButton(true);
        setVisibleGoButton(false);
        setRollImg("https://pngimg.com/d/dice_PNG41.png");

        const newPosition = (playerPosition + randomNum) % 16;

        if (newPosition < playerPosition) {
            dispatch(updateMoney(200));
            dispatch(incrementLoopCount());
        }

        setPlayerPosition(newPosition === 1 || newPosition === 0  || newPosition > 16? 16 : newPosition);
    }

    return (
        <div>
            <div className="dice d-flex">
                <div className="dice-value">
                    <img src={rollImg} alt="" style={{ height: "200px", width: "200px", margin: "20px", transitionDuration: "0.4s"}} />
                    {visibleText && <p style={{ textAlign: "center" }}>Go ({randomNum}) cells!</p>}
                </div>
                <div className="mt-50 buttons">
                    {visibleRollButton && <button onClick={rollDice}>ROLL DICE!</button>}
                    {visibleGoButton && <button onClick={movePlayer}>GO!</button>}
                </div>
            </div>
        </div>
    );
};

export default Dice;