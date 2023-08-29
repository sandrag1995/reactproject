import React from 'react';
import {useDispatch } from 'react-redux';
import { sellStreet} from '../../features/monopoly';

function Resources({ money, ownedStreets }) {
    const dispatch = useDispatch();

    const handleSellStreet = (streetName) => {
        dispatch(sellStreet(streetName));
    };

    return (
        <div>
            <h1>Player's own property:</h1>
            <h3 style={{textDecoration: "underline"}}>Player's money: <span style={{ color: "green" }}>{money}$</span></h3>
            <div className="bought-streets">
                <h3>Bought Streets:</h3>
                <ul>
                    {ownedStreets.map((street, index) => (
                        <li key={index}>
                            {street}
                            <button onClick={() => handleSellStreet(street)}>💸Sell!💸</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Resources;