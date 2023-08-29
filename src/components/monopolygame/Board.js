import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyStreet} from '../../features/monopoly';
import Figure from "./Figure";

const Board = ({ selectedFigureUrl, playerPosition, gameMap, streetMappings, streetPrice, ownedStreets}) => {
    const dispatch = useDispatch();
    const money = useSelector((state) => state.player.money);

    const handleBuyStreet = (index) => {
        const streetName = streetMappings[index];
        const price = streetPrice[streetName];

        if (!ownedStreets.includes(streetName) && money >= price) {
            dispatch(buyStreet(streetName));
        }
    };

    return (
        <div className="board">
            {gameMap.map((cellValue, index) => (
                <div
                    key={index}
                    className={`cell ${cellValue === playerPosition ? 'occupied' : ''}`}
                    id={index}
                >
                    {cellValue === playerPosition && selectedFigureUrl && (
                        <Figure imageUrl={selectedFigureUrl} playerPosition={playerPosition} />
                    )}
                    {streetMappings[index] && (
                        <div className="street-name">
                            <p>{streetMappings[index]}</p>
                        </div>
                    )}

                    {cellValue === playerPosition && playerPosition !== 1 && (
                        <div>
                            {ownedStreets.includes(streetMappings[index]) ? (
                                <button disabled>Sold out!</button>
                            ) : (
                                <button
                                    onClick={() => handleBuyStreet(index)}
                                    disabled={ownedStreets.includes(streetMappings[index]) || money < streetPrice[streetMappings[index]]}>
                                    {`Buy ($${streetPrice[streetMappings[index]]})`}
                                </button>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Board;