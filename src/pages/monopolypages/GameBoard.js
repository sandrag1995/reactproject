import React, {useState} from 'react';
import Board from "../../components/monopolygame/Board";
import Dice from "../../components/monopolygame/Dice";
import Resources from "../../components/monopolygame/Resources";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {sellStreet } from '../../features/monopoly';

const GameBoard = () => {
    const location = useLocation();
    const selectedFigureUrl = location.state?.figure;

    const dispatch = useDispatch();

    const money = useSelector((state) => state.player.money);
    const ownedStreets = useSelector((state) => {
        return Object.keys(state.player.streets).filter(street => state.player.streets[street].owned);
    });
    const handleSellStreet = (streetName) => {
        dispatch(sellStreet(streetName));
    };

    const gameMap = [
        1, 2, 3, 4, 5, 6,
        16, 0, 0, 0, 0, 7,
        15, 0, 0, 0, 0, 8,
        14, 13, 12, 11, 10, 9,
    ];

    const cellsWithBuyButton = [1, 2, 3, 4, 5, 11, 17, 23, 22, 21, 20, 19, 18, 12, 6];

    const streetMappings = {
        1: 'The Strand',
        2: 'Fleet Street',
        3: 'Trafalgar Square',
        4: 'Leicester Square',
        5: 'Coventry Street',
        11: 'Piccadilly',
        17: 'Regent Street',
        23: 'Oxford Street',
        22: 'Bond Street',
        21: 'Mayfair',
        20: 'Park Lane',
        19: 'Vermont Avenue',
        18: 'The Angel Islington',
        12: 'Euston Road',
        6: 'Pentonville Road',
    };

    const streetPrice = {
        'The Strand': 60,
        'Fleet Street': 60,
        'Trafalgar Square': 100,
        'Leicester Square': 100,
        'Coventry Street': 100,
        'Piccadilly': 120,
        'Regent Street': 140,
        'Oxford Street': 140,
        'Bond Street': 160,
        'Mayfair': 180,
        'Park Lane': 180,
        'Vermont Avenue': 200,
        'The Angel Islington': 200,
        'Euston Road': 220,
        'Pentonville Road': 220
    }

    const [playerPosition, setPlayerPosition] = useState(1);

    return (
        <div className="game d-flex">
            <Board
                selectedFigureUrl={selectedFigureUrl}
                playerPosition={playerPosition}
                gameMap={gameMap}
                cellsWithBuyButton={cellsWithBuyButton}
                streetMappings={streetMappings}
                streetPrice={streetPrice}
                ownedStreets={ownedStreets}
                handleSellStreet={handleSellStreet}
            />
            <Dice
                gameMap={gameMap}
                playerPosition={playerPosition}
                setPlayerPosition={setPlayerPosition}
                cellsWithBuyButton={cellsWithBuyButton}
                streetMappings={streetMappings}
                streetPrice={streetPrice}
            />
            <Resources money={money} ownedStreets={ownedStreets} handleSellStreet={handleSellStreet} />
        </div>
    );
};

export default GameBoard;