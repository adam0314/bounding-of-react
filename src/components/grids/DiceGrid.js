import React from "react";
import utils from "../../utils/utils";

const DiceGrid = props => {
    return (
        <div className="dice-container">
            <div className="scroll-y flex-row-wrap">
                {props.dice.map((die, idx) => (
                    <div className={"die " + utils.getBgForDieSign(die.sign) + " flex-column-thirds"} key={idx}>
                        {die.toString()}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DiceGrid;