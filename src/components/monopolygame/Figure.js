import React from 'react';

const Figure = ({ imageUrl, onClick, borderStyle}) => {
    return (
        <div className="figure" style={{border: borderStyle, marginTop: "55px"}} onClick={onClick}>
            <img src={imageUrl} alt=""/>
        </div>
    );
};

export default Figure;