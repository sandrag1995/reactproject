const UpgradeBar = ({restoreEnergy, addHigherChance, addExtraSlot, cost}) =>{

    return (
        <div className="upgradeBar d-flex m-10">
            <button onClick={addHigherChance}>ADDS 0.3g TO GOLD DIG CHANCE💸: <br/>
                COST {cost}$</button>
            <button onClick={restoreEnergy}>RESTORE 20% ENERGY🛌: <br/>
                COST 50$</button>
            <button onClick={addExtraSlot}>1 EXTRA SLOT IN INVENTORY🎒: <br/>
                COST 100$</button>
        </div>
    );

}


export default UpgradeBar;