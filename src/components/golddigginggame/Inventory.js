const Inventory = ({inventoryItems, max, sellGold, visibleButton, defaultLength}) =>{

    return (
        <div className="inventory m-10">
            <p style={{color: "white", backgroundColor: "black"}}>Current inventory limit: {defaultLength}<br/>
            Max gold per 1 dig: {max}g.
            </p>
            <div className="slots d-flex">
                {inventoryItems.map((item, index) => (
                    <div key={index} className="slotCard m-10">
                        {item}
                    </div>
                ))}
            </div>

            {inventoryItems.length === defaultLength && visibleButton && (
                <button onClick={sellGold}>SELL ALL GOLD💰</button>
    )}
        </div>
    );

}


export default Inventory;