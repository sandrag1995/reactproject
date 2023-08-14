import './App.css';

import UpgradeBar from "./components/golddigginggame/UpgradeBar";
import Inventory from "./components/golddigginggame/Inventory";
import GoldPrice from "./components/golddigginggame/GoldPrice";
import EnergyBar from "./components/golddigginggame/EnergyBar";
import DigButton from "./components/golddigginggame/DigButton";
import React, {useState} from "react"

function task10() {

    const [fullEnergy, setFullEnergy] = useState(100);
    const [defaultGold, setDefaultGold] = useState(0);
    const [defaultMoney, earnedMoney] = useState(100)
    const [inventoryItems, setInventoryItems] = useState([]);
    const [defaultValue, newValue] = useState(13)
    const [notVisibleButton, visibleButton] = useState(false)
    const [defaultWarning, setWarning] = useState("")

    const min = 0;
    const [max, newMax] = useState(1.0)
    const earnedGold = (min + Math.random() * (max - min)).toFixed(2)


    let [defaultLength, newLength] = useState(3)
    const [cost, newCost] = useState(50);
    function loweringEnergy(){

        const randomNum = Math.ceil(Math.random() * 9);
        if (fullEnergy > 0 && inventoryItems.length < defaultLength){
            setFullEnergy((prevEnergy) => Math.max(prevEnergy - randomNum, 0));

            setDefaultGold((prevGold) => prevGold + earnedGold);
            setInventoryItems([...inventoryItems, `Gold earned: ${earnedGold}`]);
        }
    }

    function sellGold() {
        if (inventoryItems.length === defaultLength) {
            const totalEarnedGold = inventoryItems.reduce((total, item) => {
                const earnedGold = parseFloat(item.split(":")[1].trim());
                return total + earnedGold;
            }, 0);

            earnedMoney(defaultMoney + totalEarnedGold * defaultValue);

            setInventoryItems([]);

            const min = 10;
            const max = 30;
            const newRandomValue = min + Math.random() * (max - min);
            newValue(newRandomValue);
        } else {
            setTimeout(setWarning, 1000);
            setWarning("Your inventory is not full!");
        }
    }


    ////////////UPDATES///////////////
    function restoreEnergy(){
        const restingCost = 50
        if (defaultMoney >= 50 && fullEnergy <= 100){
            const energyToAdd = 20;

            setFullEnergy(Math.min(fullEnergy + energyToAdd, 100))
            earnedMoney(defaultMoney - restingCost)


        } else {
            setTimeout(setWarning, 1000)
            setWarning("You don't have enough money!")
        }
    }

    function addHigherChance(){

        if (defaultMoney >= cost) {
            earnedMoney(defaultMoney - cost);
            newCost(cost + 50);
            newMax(Number((max + 0.3).toFixed(2)))

        } else {
            setTimeout(setWarning, 1000)
            setWarning("You don't have enough money!")
        }
    }

    function addExtraSlot(){
        const slotCost = 100;
        if (defaultMoney >= slotCost){
            earnedMoney(defaultMoney - slotCost)
            newLength(defaultLength + 1)
        } else {
            setTimeout(setWarning, 1000)
            setWarning("You don't have enough money!")
        }
    }

    ///////////////////////////////////


    return (
        <div className="gameContainer">
            <UpgradeBar className="upgradeBar"
                        restoreEnergy={restoreEnergy}
                        addHigherChance={addHigherChance}
                        addExtraSlot={addExtraSlot}
                        cost={cost}
            />
            <p style={{color: "red"}}>{defaultWarning}</p>

            <div className="gameScreen d-flex">
                <div className="inventoryScreen flex-1">
                    <Inventory className="inventory"
                               inventoryItems={inventoryItems}
                               setInventoryItems={setInventoryItems}
                               defaultLength={defaultLength}
                               sellGold={sellGold}
                               visibleButton={!notVisibleButton}
                               max={max}
                    />
                </div>

                <div className="playerScreen flex-1">
                    <GoldPrice className="goldPrice"
                               defaultValue={defaultValue}
                               defaultMoney={defaultMoney}
                    />
                    <EnergyBar className="energyBar" fullEnergy={fullEnergy}/>
                    <DigButton className="digBtn" loweringEnergy={loweringEnergy}/>
                </div>

            </div>
        </div>
    );

}

export default task10;

// const min = 0;
// const max = 1.3;
// const randomInRange = min + Math.random() * (max - min);