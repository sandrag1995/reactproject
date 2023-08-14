const EnergyBar = ({fullEnergy}) =>{

    return (
        <div className="energyBar m-10">
            <div className="remainingEnergy" style={{width: `${fullEnergy}%`}}></div>
        </div>
    );

}


export default EnergyBar;